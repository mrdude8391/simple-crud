import React from "react";
import { useEffect, useState } from "react";
import * as noteService from "../services/noteService";
import NoteItem from "../components/NoteItem";
import type { Note } from "../types/Note";
import NoteForm from "../components/NoteForm";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await noteService.getNotes();
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id: string) => {
    await noteService.deleteNote(id);
    fetchNotes();
  };

  const createNote = async (note: Note) => {
    await noteService.createNote(note);
    fetchNotes();
  };

  return (
    <div className="max-container padding-container border-2 border-blue-600">
      <h1>Notes Page</h1>
      <NoteForm onSubmit={createNote} />
      {notes.map((note: Note) => (
        <NoteItem key={note._id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NotesPage;
