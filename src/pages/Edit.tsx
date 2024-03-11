import { Link, useOutletContext } from "react-router-dom";
import Form from "../components/Form";
import { EditProps, Note } from "../types/Types";
import { ArrowLeft } from "iconsax-react";

const Edit = ({ aTags, updateNote, createTag }: EditProps) => {
  const found: Note = useOutletContext();

  return (
    <div>
      <div className="flex items-center">
        <Link to={"/"}>
          <ArrowLeft size="32" color="#000" className="me-6" />
        </Link>
        <h1 className="font-light text-4xl">{found.title}</h1>
      </div>
      <Form
        aTags={aTags}
        tags={found.tags}
        createTag={createTag}
        onClick={(upNote) => updateNote(found.id, upNote)}
        title={found.title}
        markdown={found.markdown}
      />
    </div>
  );
};

export default Edit;
