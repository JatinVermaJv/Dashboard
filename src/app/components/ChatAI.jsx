'use client';

import React, { useState } from 'react';

const ChatAI = () => {
  //this is for the backend logic to send the actual question to the llm
  const [message, setMessage] = useState("");

  

  return (
    <div className="mt-6 p-6">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* I cant figure out the name of logo so for now i have used this one and will change later */}
        <div className="text-blue-500 text-5xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="58" height="58">
            <path d="M43.69 16a11.31 11.31 0 0 0-16 0L24 19.69 20.31 16a11.31 11.31 0 1 0 0 16L24 28.31 27.69 32a11.31 11.31 0 0 0 16-16zM16.78 28.46a6.31 6.31 0 1 1 0-8.92L21.24 24zm23.37 0a6.31 6.31 0 0 1-8.93 0L26.76 24l4.46-4.46a6.31 6.31 0 0 1 8.93 0 6.31 6.31 0 0 1 0 8.92z" style={{fill:"#6fabe6"}}/>
            <path d="M43.69 16a11.31 11.31 0 0 0-16 0L24 19.69 20.31 16A11.31 11.31 0 0 0 1.1 22.5 11.31 11.31 0 0 0 20.31 29L24 25.31 27.69 29a11.31 11.31 0 0 0 19.21-6.5 11.2 11.2 0 0 0-3.21-6.5zM16.78 28.46A6.32 6.32 0 0 1 6 24a5.77 5.77 0 0 1 .19-1.5 6.13 6.13 0 0 1 1.66-3 6.31 6.31 0 0 1 8.93 0l3 3 1.5 1.5zm23.37 0a6.31 6.31 0 0 1-8.93 0L26.76 24l1.5-1.5 3-3a6.31 6.31 0 0 1 8.93 8.92z" style={{fill:"#82bcf4"}}/>
          </svg>
        </div>

        <h2 className="text-3xl font-semibold text-center">
          Welcome to the AI Chat Assistant
        </h2>

        {/* chat input for user to ask the actual question and answer using the llm - TO BE IMPLEMENTED */}
        <div className="w-full relative mt-2">
          <input
            value={message}
            type="text"
            placeholder="Ask your question here.."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg pr-12 focus:outline-none focus:border-blue-500"
            
            onChange={(e) => setMessage(e.target.value)}
          />
          {/*sendMessage is the function that sends the user questions to the llm using api call - TO BE IMPLEMENTED */}
          <button onClick={() => sendMessage(message)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="transform rotate-90"
            >
              <path
                d="M12 19V5M5 12l7-7 7 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAI; 