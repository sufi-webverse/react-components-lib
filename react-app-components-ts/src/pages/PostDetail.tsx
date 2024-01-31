import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostDetail = () => {
  const params = useParams();
  const [post, setPost] = useState<any>({});
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => setPost((prev: any) => data));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
      .then((resp) => resp.json())
      .then((data) => setComments((prev: any) => data));
  }, []);

  return (
    <>
      <div className="shadow rounded p-4 grid grid-cols-[500px_auto] gap-10">
        <div>
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <div>
          <h3>Comments</h3>
          <ul className="">
            {comments &&
              comments.map((comment: any) => {
                return (
                  <li className="list-item mb-3" key={comment.id}>
                    <p>{comment.name}</p>
                    <p>By- {comment.email}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
