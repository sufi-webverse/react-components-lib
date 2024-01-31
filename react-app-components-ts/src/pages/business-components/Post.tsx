import { Link } from "react-router-dom";

const Post = ({ id, title, body }: any) => {
  return (
    <>
      <div className="flex flex-col shadow rounded p-4 ">
        <h2 className="font-semibold">{title}</h2>
        <p>{body}</p>

        <div className="border"></div>

        <Link className="bg-indigo-200 px-3 py-2 float-end mt-2 rounded" to={`posts/${id}`}>details</Link>
      </div>
    </>
  );
};

export default Post;
