import { Link } from "react-router-dom";
import Form from "../components/Form";
import { CreateProps } from "../types/Types";
import { ArrowLeft } from "iconsax-react";

const Create = ({ aTags, onClick, createTag }: CreateProps) => {
  return (
    <div>
      <div className="flex items-center">
        <Link to={"/"}>
          <ArrowLeft size="32" color="#000" className="me-6" />
        </Link>
        <h1 className="text-5xl">Add New Note</h1>
      </div>
      <Form aTags={aTags} onClick={onClick} createTag={createTag} />
    </div>
  );
};

export default Create;
