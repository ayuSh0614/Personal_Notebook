import React, { useState } from 'react';
import axios from 'axios';
import './MyForm.css';
import Notes from './Notes';
// import React, { useEffect, useRef, useState} from 'react'
// import noteContext from "../context/notes/noteContext"
// import { useContext } from 'react'
// import NoteItem from './NoteItem';
// import AddNote from './AddNote';
// import { useNavigate } from 'react-router-dom';
// import MyForm from './MyForm';
 // Assuming the CSS file is named MyForm.css and located in the same directory as your component

const MyForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    description: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const updateNote = (currentNote) => {
  //   ref.current.click();
  //   setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://example.com/api/formdata', formData)
      .then(response => {
        console.log('Form data successfully submitted:', response.data);
        // You can perform any additional actions here after successful submission
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Subject:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Date:
          {/* <input type="date" name="date" value={formData.date} onChange={handleChange} /> */}
          <input type="date" name="date" value={props.edescription} onChange={handleChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
