import React from "react";
import { useState } from "react";
import type { Note } from "../types/Note";

interface NoteFormProps {
  onSubmit: (note: Note) => void;
}

const NoteForm = ({ onSubmit }: NoteFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="border flex flex-col">
      <h2>Note Form</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
