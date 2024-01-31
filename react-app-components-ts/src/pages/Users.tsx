import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers((prev) => json);
      });
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl bg-gray-50 px-10 py-32">
        <div className="grid grid-cols-[30%_auto] gap-5">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-800">
              Meet our leadership
            </h2>
            <p className="text-xl leading-8 mt-3">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-10">
            {users &&
              users.map((user: any) => {
                return (
                  <>
                    <div className="flex items-center gap-x-4">
                      <img
                        className="h-12 rounded-full"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      />
                      <span className="text-left">
                        <h2 className="text-[17px] font-bold">{user.name}</h2>
                        <p className="text-[17px] font-semibold text-indigo-800">
                          Co-Founder / CEO
                        </p>
                      </span>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-gray-950 text-white px-20    ">
        <div className="flex flex-col">
          <div className="py-20 max-w-4xl">
            <h1 className="text-3xl font-bold">Our team</h1>
            <p className="text-2xl mt-6">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-4 gap-x-10 gap-y-10">
              {users &&
                users.map((user: any) => {
                  return (
                    <>
                      <div className="flex flex-col gap-x-4">
                        <img
                          className=" rounded-md"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        />
                        <span className="text-left mt-3">
                          <h2 className="text-[17px] font-bold">{user.name}</h2>
                          <p className="text-[17px] font-semibold text-indigo-800">
                            Co-Founder / CEO
                          </p>
                          <p>Toronto, Canada</p>
                        </span>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
