import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/style.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Note, NoteData, Tag } from "./types/Types";
import { v4 } from "uuid";
import Layout from "./components/Layout";

function App() {
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("tags", []);

  const createTag = (tag: Tag): void => {
    setTags((prev) => [...prev, tag]);
  };

  const createNote = (noteData: NoteData): void => {
    const newNote: Note = {
      id: v4(),
      ...noteData,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id: string): void => {
    setNotes((prev) => [...prev.filter((i) => i.id !== id)]);
  };

  const updateNote = (id: string, updatedData: NoteData): void => {
    const updated = notes.map((note) =>
      note.id === id
        ? {
            id,
            ...updatedData,
          }
        : note
    );
    setNotes(updated);
  };

  return (
    <div className="md:container md:mx-auto m-10">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main notes={notes} aTags={tags} createTag={createTag} />}
          />
          <Route
            path="/new"
            element={
              <Create onClick={createNote} createTag={createTag} aTags={tags} />
            }
          />
          <Route path="/:id" element={<Layout notes={notes} />}>
            <Route index element={<Detail deleteNote={deleteNote} />} />
            <Route
              path="edit"
              element={
                <Edit
                  aTags={tags}
                  createTag={createTag}
                  updateNote={updateNote}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
