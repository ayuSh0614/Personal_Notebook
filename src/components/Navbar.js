import { useEffect, useState, useContext } from "react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext"; // Import your context

const Navbar = () => {
  let navigate = useNavigate();
  const { notes, setNotes, getNotes } = useContext(noteContext); // Access notes and setNotes from context
  const [searchQuery, setSearchQuery] = useState("");

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  let location = useLocation();

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter notes based on search query
  const searchNotes = () => {
    if (searchQuery.trim() === "") {
      // If no search query, reset to all notes
      getNotes(); // Fetch all notes again if search is cleared
    } else {
      const filteredNotes = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setNotes(filteredNotes); // Update the displayed notes
    }
  };

  // Debounce search to avoid too many state updates while typing
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchNotes();
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounceFn); // Cleanup timeout on re-render
  }, [searchQuery]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Personal NoteBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Search bar */}
            {localStorage.getItem("token") && (
              <form className="d-flex mx-2">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search notes..."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </form>
            )}

            {/* Login/Logout button */}
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  to="/login"
                  role="button"
                  className="mx-1 btn btn-primary"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  role="button"
                  className="mx-1 btn btn-primary"
                >
                  SignUp
                </Link>
              </form>
            ) : (
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
