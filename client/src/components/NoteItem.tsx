import React from "react";
import { useState } from "react";
import type { Note } from "../types/Note";
import NoteForm from "./NoteForm";

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
  onUpdate: (id: string, note: Note) => void;
}

const NoteItem = ({ note, onUpdate, onDelete }: NoteItemProps) => {
  const [editing, setEditing] = useState(true);

  return (
    <div className="my-5">
      <div>
        <h2 className="font-bold">{note.title}</h2>
        <p>{note.content}</p>
        <p>{note._id}</p>
      </div>
      <div hidden={editing}>
        <NoteForm
          onSubmit={(updatedNote) => {
            onUpdate(note._id, updatedNote);
            setEditing(false);
          }}
        />
      </div>
      <div className="flex justify-between">
        <button onClick={() => setEditing(!editing)}>Edit</button>
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
