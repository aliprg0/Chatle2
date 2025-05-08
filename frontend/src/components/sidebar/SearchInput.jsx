// src/components/sidebar/SearchInput.jsx
import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic
    console.log("Searching for:", e.target.elements.search.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-1">
      <input
        type="text"
        name="search"
        placeholder="Search conversations…"
        className="flex-1 input bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-lg p-2 text-sm focus:ring-sky-500 focus:border-sky-500 outline-none"
      />
      <button
        type="submit"
        className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
        aria-label="Search"
      >
        <IoSearchSharp className="w-5 h-5" />
      </button>
    </form>
  );
};
export default SearchInput;
