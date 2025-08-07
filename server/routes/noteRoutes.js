const express = require("express");
const router = express.Router();

const {
  getNotes,
  getNoteById,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

router.get("/", getNotes);
router.get("/:id", getNote, getNoteById);
router.post("/", createNote);
router.patch("/:id", getNote, updateNote);
router.delete("/:id", getNote, deleteNote);

module.exports = router;
