const Note = require("../models/Note");

// Get all notes
const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

// Get Note by ID
const getNoteById = async (req, res) => {
  try {
    res.json(res.note);
  } catch (err) {
    res.status(404).json({ message: "Note not found" });
  }
};

// Create note
const createNote = async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update Note
const updateNote = async (req, res) => {
  const { title, content } = req.body;
  const note = res.note;
  note.tile = title || note.title;
  note.content = content || note.content;
  try {
    const updatedNote = await note.save();
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Note

const deleteNote = async (req, res) => {
  try {
    await res.note.deleteOne();
    res.json({ message: "deleted note" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

async function getNote(req, res, next) {
  let note;
  try {
    note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "note not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.note = note;
  next();
}

module.exports = {
  getNotes,
  getNote,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
