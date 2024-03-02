import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "65d5c202f1809ecde634d7a7",
          "user": "65d3276bae8aaef1ec67711d",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2024-02-21T09:27:30.566Z",
          "__v": 0
        },
        {
          "_id": "65d5c202f1809ecde634d7a7",
          "user": "65d3276bae8aaef1ec67711d",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2024-02-21T09:27:30.566Z",
          "__v": 0
        },
        {
          "_id": "65d5c202f1809ecde634d7a7",
          "user": "65d3276bae8aaef1ec67711d",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2024-02-21T09:27:30.566Z",
          "__v": 0
        },
        {
          "_id": "65d5c202f1809ecde634d7a7",
          "user": "65d3276bae8aaef1ec67711d",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2024-02-21T09:27:30.566Z",
          "__v": 0
        },
        {
          "_id": "65d5c202f1809ecde634d7a7",
          "user": "65d3276bae8aaef1ec67711d",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2024-02-21T09:27:30.566Z",
          "__v": 0
        },
        {
          "_id": "65d5c202f1809ecde634d7a7",
          "user": "65d3276bae8aaef1ec67711d",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2024-02-21T09:27:30.566Z",
          "__v": 0
        },
        {
          "_id": "65d5c202f1809ecde634d7a7",
          "user": "65d3276bae8aaef1ec67711d",
          "title": "New note",
          "description": "Please access the playlist",
          "tag": "Youtube",
          "date": "2024-02-21T09:27:30.566Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;