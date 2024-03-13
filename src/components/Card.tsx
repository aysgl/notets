import { Link } from "react-router-dom";
import { Note } from "../types/Types";

const Card = ({ note }: { note: Note }) => {
  return (
    <Link to={`/${note.id}`} className="text-black">
      <div className="rounded overflow-hidden bg-gray-100 rounded border border-gray-100 hover:border-gray-200 hover:bg-white transition-color ease-in-out duration-300 h-full">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{note.title}</div>
          <p className="text-gray-700 text-base">
            {note.markdown.length > 150
              ? `${note.markdown.slice(0, 150)}...`
              : note.markdown}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {note?.tags.map((tag) => (
            <span
              key={tag.value}
              className="inline-block bg-emerald-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag.label}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
