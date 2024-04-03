import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-green-700 text-3xl font-semibold text-center my-7">
        Profile
      </h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile_image"
          className="rounded-full h-24 w-24 object-cover cursor-pointer mt-2 self-center"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-xl"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          className="border p-3 rounded-xl"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border p-3 rounded-xl"
        />
        <button className="bg-green-700 p-3 rounded-xl text-white uppercase hover:opacity-95 disabled:opacity-60">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-3">
        <span className="text-red-600 rounded-xl p-3 font-bold cursor-pointer hover:bg-red-100">
          Delete Account
        </span>
        <span className="text-red-600 rounded-xl p-3 font-bold cursor-pointer hover:bg-red-100">
          Sign Out
        </span>
      </div>
    </div>
  );
}

export default Profile;
