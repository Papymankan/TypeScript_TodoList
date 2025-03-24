import React from "react";

function Form() {
  return (
    <div className="w-80 sticky top-5 p-4 bg-gray-700 rounded-md text-white">
      <form action="" className=" flex flex-col">
        <label>عنوان را وارد کنید</label>
        <input
          type="text"
          placeholder="عنوان"
          className="w-full bg-gray-600 p-3 outline-0 text-lg shadow rounded-xl my-2"
        />
        <label>توضیحات را وارد کنید</label>
        <input
          type="text"
          placeholder="توضیحات"
          className="w-full bg-gray-600 p-3 outline-0 text-lg shadow rounded-xl mt-2"
        />

        <button className="mt-5 self-end cursor-pointer px-3 py-2 rounded-xl bg-cyan-400">
          ثبت
        </button>
      </form>

      <hr className="my-5 border-gray-500" />

      <div className="w-full flex flex-col items-start">
        <form action="">
          <h2 className="text-xl text-bold mb-3">نمایش :</h2>
          <div className="w-full flex gap-2">
            <input type="radio" name="filter" id="" checked />
            <p>همه</p>
          </div>
          <div className="w-full flex gap-2">
            <input type="radio" name="filter" id="" />
            <p>انجام شده</p>
          </div>
          <div className="w-full flex gap-2">
            <input type="radio" name="filter" id="" />
            <p>انجام نشده</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
