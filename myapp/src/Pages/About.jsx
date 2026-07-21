import React, { useState } from "react";
import { PageTitle } from "../components/PageTitle";

export function About() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("Ram");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <PageTitle title="About" />
      <h1 className="text-3xl font-bold">About Page</h1>

      <p className="text-lg text-gray-600">
        This is an example of the React <strong>useState Hook</strong> using a
        simple counter and form input.
      </p>

      <h2 className="text-xl font-semibold">Counter Example</h2>

      <h3 className="text-2xl font-bold">{count}</h3>

      <div className="flex gap-3">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-4">Form Example</h2>

      <input
        className="border p-2 rounded w-72"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <h3 className="text-lg">
        First Name: <strong>{firstName}</strong>
      </h3>
    </div>
  );
}