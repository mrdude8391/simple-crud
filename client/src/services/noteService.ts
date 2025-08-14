import axios, { HttpStatusCode } from 'axios'
import type { Note } from '../types/Note';

const API_URL = import.meta.env.VITE_API_URL

export const getNotes = () => axios.get(API_URL);
export const createNote = (note: Note) => axios.post(API_URL, note);
export const updateNote = (id: string, note: Note) => axios.patch(`${API_URL}/${id}`, note);
export const deleteNote = (id: string) => axios.delete(`${API_URL}/${id}`);

