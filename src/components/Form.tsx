import { useState, useRef } from "react";
import Tags from "./Tags";
import { CreateProps, Tag } from "../types/Types";
import { useNavigate } from "react-router-dom";

const Form = ({
  onClick,
  createTag,
  title = "",
  tags = [],
  markdown = "",
  aTags,
}: CreateProps) => {
  const [selected, setSelected] = useState<Tag[]>([tags]);
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClick({
      title: titleRef.current!.value,
      markdown: contentRef.current!.value,
      tags: selected,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xxl mt-10">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="grid-title"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Title
          </label>
          <input
            ref={titleRef}
            defaultValue={title}
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
          <Tags
            aTags={aTags}
            selected={selected}
            setSelected={setSelected}
            createTag={createTag}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full  px-3 mb-6 md:mb-0">
          <label
            htmlFor="grid-content"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Content
          </label>
          <textarea
            ref={contentRef}
            defaultValue={markdown}
            rows={10}
            id="grid-content"
            placeholder="Content"
            className="appearance-none block w-full text-gray-700
            border border-gray-200 rounded py-3 px-4 leading-tight
            focus:outline-none focus:bg-white focus:border-emerald-200 transition-colors"></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded"
          type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
