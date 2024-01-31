import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Post from "./Post";
import Button from "../../components/Button";

function Posts() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts((prev) => json);
      });
  }, []);

  return (
    <div className="">
      <div className="px-6 my-3 grid grid-cols-2 md:grid-cols-5 gap-8">
        {posts &&
          posts.map((post: any) => (
            <React.Fragment key={post.id}>
              <div className="mb-2">
                <Post {...post} />
              </div>
            </React.Fragment>
          ))}
      </div>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button text={"click me"} onClick={() => alert("clicked")} />
    </div>
  );
}

export default Posts;
