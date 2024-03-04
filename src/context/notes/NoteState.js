import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []

      
      const [notes, setNotes] = useState(notesInitial)

    // Get all notes
    const getNotes = async () => {
        // API call
        
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkMzI3NmJhZThhYWVmMWVjNjc3MTFkIn0sImlhdCI6MTcwODQyMTcxMH0.f6dUhCDC2vX2aOFguxTLGoZbXGshpNVCLXJrGVOeUw8"
            },
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
      }


      // Add a note
      const addNote = async (title, description, tag) => {
        // TODO: API call
        // API call
        
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkMzI3NmJhZThhYWVmMWVjNjc3MTFkIn0sImlhdCI6MTcwODQyMTcxMH0.f6dUhCDC2vX2aOFguxTLGoZbXGshpNVCLXJrGVOeUw8"
            },
            body: JSON.stringify({title, description, tag})
        });

        const json = await response.json();
        console.log(json)

        console.log("Adding a new note")
        const note = {
            "_id": "65d5c2012f1809ecde634d7a7",
            "user": "65d3276bae8aaef1ec67711d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-02-21T09:27:30.566Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
      }

      // Delete a note
      
      const deleteNote = async (id) => {
          // API call
          const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkMzI3NmJhZThhYWVmMWVjNjc3MTFkIn0sImlhdCI6MTcwODQyMTcxMH0.f6dUhCDC2vX2aOFguxTLGoZbXGshpNVCLXJrGVOeUw8"
            },
        });
        const json =  response.json();
        console.log(json)
        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note)=>{return note._id !==id})
        setNotes(newNotes)
      }

      // Edit a note
      const editNote = async (id, title, description, tag) => {
        // API call
        
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkMzI3NmJhZThhYWVmMWVjNjc3MTFkIn0sImlhdCI6MTcwODQyMTcxMH0.f6dUhCDC2vX2aOFguxTLGoZbXGshpNVCLXJrGVOeUw8"
            },
            body: JSON.stringify({title, description, tag})
        });
        const json =  response.json();
        console.log(json)
        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id)
            {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
      }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;