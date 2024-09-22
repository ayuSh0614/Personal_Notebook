import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes: ", error);
    }
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const note = await response.json();
      setNotes(notes.concat(note)); // Update the notes array with the new note
    } catch (error) {
      console.error("Error adding note: ", error);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      console.log("Deleted note:", json);

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes); // Update notes after deletion
    } catch (error) {
      console.error("Error deleting note: ", error);
    }
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      console.log("Updated note:", json);

      // Find the note and update its content locally
      const newNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setNotes(newNotes);
    } catch (error) {
      console.error("Error editing note: ", error);
    }
  };

  // Search notes
  const searchNotes = (query) => {
    if (!query.trim()) {
      // If the search query is empty, fetch all notes again
      getNotes();
      return;
    }

    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.description.toLowerCase().includes(query.toLowerCase()) ||
        note.tag.toLowerCase().includes(query.toLowerCase())
    );
    setNotes(filteredNotes); // Update the state with the filtered notes
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes, searchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
