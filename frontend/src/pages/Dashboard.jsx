import { FaGear } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

import React from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  let { setIsAuthenticated } = useAuthContext();

  const handleLogout = () => {
    setIsAuthenticated(null);
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date Created
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="inline mr-2 -space-x-2 overflow-hidden ">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://avatar.iran.liara.run/public/boy"
                        alt=""
                      />
                    </div>
                    Michael Holz
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">04/10/2023</td>
                  <td className="whitespace-nowrap px-6 py-4">Admin</td>
                  <td className="whitespace-nowrap px-6 py-4">Active</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <FaGear className="inline mr-2 text-blue-400 text-lg" />
                    <TiDelete className="inline text-red-500 text-2xl" />
                  </td>
                </tr>

                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="inline mr-2 -space-x-2 overflow-hidden ">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://avatar.iran.liara.run/public/girl"
                        alt=""
                      />
                    </div>
                    Paula Wilson
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">05/08/2014</td>
                  <td className="whitespace-nowrap px-6 py-4">Publisher</td>
                  <td className="whitespace-nowrap px-6 py-4">Active</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <FaGear className="inline mr-2 text-blue-400 text-lg" />
                    <TiDelete className="inline text-red-500 text-2xl" />
                  </td>
                </tr>

                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="inline mr-2 -space-x-2 overflow-hidden ">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://avatar.iran.liara.run/public/boy"
                        alt=""
                      />
                    </div>
                    Antonio Moreno
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">11/05/2015</td>
                  <td className="whitespace-nowrap px-6 py-4">Publisher</td>
                  <td className="whitespace-nowrap px-6 py-4">Suspended</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <FaGear className="inline mr-2 text-blue-400 text-lg" />
                    <TiDelete className="inline text-red-500 text-2xl" />
                  </td>
                </tr>

                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="inline mr-2 -space-x-2 overflow-hidden ">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://avatar.iran.liara.run/public/boy"
                        alt=""
                      />
                    </div>
                    Mary Saveley
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">06/09/2016</td>
                  <td className="whitespace-nowrap px-6 py-4">Reviewer</td>
                  <td className="whitespace-nowrap px-6 py-4">Active</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <FaGear className="inline mr-2 text-blue-400 text-lg" />
                    <TiDelete className="inline text-red-500 text-2xl" />
                  </td>
                </tr>

                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">5</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="inline mr-2 -space-x-2 overflow-hidden ">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src="https://avatar.iran.liara.run/public/boy"
                        alt=""
                      />
                    </div>
                    Martin Sommer
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">12/08/2017</td>
                  <td className="whitespace-nowrap px-6 py-4">Moderator</td>
                  <td className="whitespace-nowrap px-6 py-4">Inactive</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <FaGear className="inline mr-2 text-blue-400 text-lg" />
                    <TiDelete className="inline text-red-500 text-2xl" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="m-3 flex flex-col items-center">
              <button
                onClick={() => handleLogout()}
                className="text-white bg-red-500 p-2 text-center rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
