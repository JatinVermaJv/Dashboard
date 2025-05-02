'use client'
import { createContext, useContext, useState } from 'react';

const QuestionHistoryContext = createContext();

export function useQuestionHistory() {
  return useContext(QuestionHistoryContext);
}

export function QuestionHistoryProvider({ children }) {
  const [questionHistory, setQuestionHistory] = useState([]);
  const [userCount, setUserCount] = useState(1);

  const addQuestion = (userMessage) => {
    if (!userMessage.trim()) return;
    const newQuestion = {
      userId: `user${userCount}`,
      question: userMessage,
      timestamp: new Date().toLocaleString(),
    };
    setQuestionHistory((prev) => [...prev, newQuestion]);
    setUserCount((prev) => prev + 1);
  };

  return (
    <QuestionHistoryContext.Provider value={{ questionHistory, addQuestion }}>
      {children}
    </QuestionHistoryContext.Provider>
  );
} 