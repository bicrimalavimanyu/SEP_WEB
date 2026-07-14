import { useState } from "react";

export function About() {
    const [count, setCount] = useState(0);
    const [firstName, setFirstName] = useState("Ram");

    return (
        <div className="p-10 text-center bg-gray-200 m-10 rounded-lg">
            <h1> Example of the useState react hook </h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment </button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="m-10" />

            <h1>FirstName: {firstName}</h1>

        </div>
    );
}