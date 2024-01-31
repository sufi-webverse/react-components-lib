import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Interview = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUsers((prev: any) => json);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between px-7 py-5 text-[17px]">
        <div className="flex flex-row gap-8 items-center">
          <div>
            <img
              className="w-10 "
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            />
          </div>
          <div className="flex gap-x-8 font-semibold">
            <span>Dashboard</span>
            <span>Team</span>
            <span>Calendar</span>
            <span>projects</span>
          </div>
        </div>

        <div className="right">
          <div className="flex gap-x-3">
            <span>
              <BellAlertIcon className="w-7" />
            </span>
            <span>
              <img
                className="w-8 "
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="px-7 bg-black text-white max-w-7xl mx-auto py-24">
        <div className="w-[50%]">
          <h3 className="text-4xl font-bold">Our team</h3>
          <p className="mt-6 text-xl font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            incidunt exercitationem magnam quos eum voluptates qui nobis
            possimus eligendi quia, labore repellat atque omnis illo voluptate
            molestias quibusdam porro quas? We’re a dynamic group of individuals
            who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <div className="mt-[5rem]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {users &&
              users.map((user) => {
                return (
                  <>
                    <div className="">
                      <img
                        className="rounded-md"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      />

                      <span className="flex flex-col gap-y-1 mt-4">
                        <span className="text-xl font-semibold">
                          {user.name}
                        </span>
                        <span>Co-Founder / CEO</span>
                        <span className="font-light text-gray-300">
                          Toronto, Canada
                        </span>
                      </span>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <div>
          <div className="md:hidden">
            <Bars3Icon className="w-10" />
          </div>
        </div>

        <div>
          <div className="hidden md:block w-[25%]">
            <ul>
              <li>List-1</li>
              <li>List-1</li>
              <li>List-1</li>
            </ul>
          </div>

          <div className="md:hidden w-[25%] relative">
            <ul>
              <li>List-1</li>
              <li>List-1</li>
              <li>List-1</li>
            </ul>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Interview;
