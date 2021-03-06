import React from "react";

function Check({ meal }) {
  return (
    <div className="flex items-center mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-omnifood-primary mr-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        />
      </svg>

      <span className="text-lg  text-tg-g_555">{meal}</span>
    </div>
  );
}

export default Check;
