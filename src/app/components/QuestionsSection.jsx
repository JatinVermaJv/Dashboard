'use client';

import React from 'react';
import { useQuestionHistory } from '../context/QuestionHistoryContext';

// Initial hardcoded questions for first visit
const initialQuestions = [
  {
    id: 1,
    user: {
      name: 'Phoenix Baker',
      username: '@phoenix',
      avatar: '/avatars/levi.png'
    },
    question: 'What are the requirements for opening a new store?',
    timeAgo: '5min ago'
  },
  {
    id: 2,
    user: {
      name: 'Koray Okumus',
      username: '@koray',
      avatar: '/avatars/tanjiro.png'
    },
    question: 'How do I manage inventory effectively?',
    timeAgo: '4hr ago'
  }
];

export const QuestionsSection = () => {
  const { questionHistory } = useQuestionHistory();

  // If there are new questions, show the latest two; otherwise, show the initial hardcoded ones
  const questionsToShow = questionHistory.length >= 1
    ? questionHistory.slice(-2).map((q, idx) => ({
        id: idx,
        user: {
          name: q.userId,
          username: '',
          avatar: initialQuestions[idx % 2].user.avatar // alternate avatars
        },
        question: q.question,
        timeAgo: q.timestamp
      }))
    : initialQuestions;

  return (
    <div className="w-[360px] h-[291px] bg-white rounded-xl border border-[#EAECF0] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-black">Pending Questions</h2>
          <span className="bg-blue-100 text-blue-600 font-medium text-xs px-2 py-1 rounded-full">
            {questionsToShow.length.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {questionsToShow.map((item) => (
          <div key={item.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={item.user.avatar}
                  alt={item.user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-sm text-black">{item.user.name}</p>
                  <span className="text-gray-500 text-sm">{item.user.username}</span>
                  <span className="text-gray-400 text-sm">{item.timeAgo}</span>
                </div>
                <p className="text-gray-600 mt-1">{item.question}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};