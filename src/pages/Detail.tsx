import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { DetailProps, Note } from "../types/Types";
import { ArrowLeft, Edit, Trash } from "iconsax-react";
import Markdown from "react-markdown";

const Detail = ({ deleteNote }: DetailProps) => {
  const found: Note = useOutletContext();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
          <Link to={"/"}>
            <ArrowLeft size="32" color="#000" className="me-6" />
          </Link>
          <h1 className="font-light text-4xl">{found.title}</h1>
        </div>
        <div className="flex">
          <Edit
            onClick={() => navigate(`edit`)}
            size="32"
            color="#12b981"
            className="me-4 color-emerald-400"
          />
          <Trash
            onClick={() => deleteNote(found.id)}
            size="32"
            color="#12b981"
          />
        </div>
      </div>
      <div className="rounded overflow-hidden bg-gray-100 rounded border border-gray-100  transition-color ease-in-out duration-300">
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{found.markdown}</p>
          <Markdown>{found.markdown}</Markdown>
        </div>
        <div className="px-6 pt-4 pb-2">
          {found?.tags.map((tag) => (
            <span
              key={tag.value}
              className="inline-block bg-emerald-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
