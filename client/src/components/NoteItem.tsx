import React from "react";
import type { Note } from "../types/Note";

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
}

const NoteItem = ({ note, onDelete }: NoteItemProps) => {
  return (
    <div className="my-5">
      <div>
        <h2 className="font-bold">{note.title}</h2>
        <p>{note.content}</p>
        <p>{note._id}</p>
      </div>
      <div className="flex justify-between">
        <button>Edit</button>
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
