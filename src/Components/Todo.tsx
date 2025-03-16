import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function Todo() {
  return (
    <div className="w-full bg-gray-700 rounded-md p-4 text-white">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl text-bold">انجام درس</h2>

        <div className="flex justify-between items-center">
          <button className="cursor-pointer p-2 rounded-full hover:bg-gray-600 duration-200">
            <FaCheck className="text-2xl text-green-600" />
          </button>
          <button className="cursor-pointer p-2 rounded-full hover:bg-gray-600 duration-200">
            <MdDeleteOutline className="text-2xl text-red-600" />
          </button>
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-3">
        سلام همه یرا خیری پریسا سلام همه یرا خیری پریسا سلام همه یرا خیری پریسا
        سلام همه یرا خیری پریسا سلام همه یرا خیری پریسا سلام همه یرا خیری پریسا
        سلام همه یرا خیری پریسا سلام همه یرا خیری پریسا سلام همه یرا خیری پریسا{" "}
      </p>
    </div>
  );
}

export default Todo;
