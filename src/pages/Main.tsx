import { Link } from "react-router-dom";
import { MainPage, Tag } from "../types/Types";
import { FormEvent, useMemo, useState } from "react";
import SelectTags from "../components/Tags";
import Card from "../components/Card";
import { Add } from "iconsax-react";

const Main = ({ notes, aTags, createTag }: MainPage) => {
  const [title, setTitle] = useState<string>("");
  const [selected, setSelected] = useState<Tag[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const filteredNote = useMemo(() => {
    return notes.filter((note) => {
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selected.length === 0 ||
          selected.every((s) => note.tags.some((tag) => tag.value === s.value)))
      );
    });
  }, [notes, title, selected]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-5xl">My Notes</h1>
        <Link to={"/new"}>
          <button
            className="flex items-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold p-3 rounded"
            type="submit">
            <Add size="20" color="#FFF" />
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-xxl mt-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="grid-title"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              id="grid-title"
              type="text"
              placeholder="Title"
              className="appearance-none block w-full text-gray-700 border border-gray-200 focus:border-emerald-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 transition-colors"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 align-end">
            <label
              htmlFor="grid-title"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Tags
            </label>
            <SelectTags
              aTags={aTags}
              selected={selected}
              setSelected={setSelected}
              createTag={createTag}
            />
          </div>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {filteredNote.map((note) => (
            <Card key={note.id} note={note} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Main;
