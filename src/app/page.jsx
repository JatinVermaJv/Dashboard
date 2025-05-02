import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import { QuestionsSection } from './components/QuestionsSection';
import { ChatAI } from './components/ChatAI';
import Card from './components/Card';

const dummyProspects = [
  { name: 'Wade Warren', stage: 'Initial Inquiry', avatar: '/avatars/luffy.png' },
  { name: 'Ava Wright', stage: 'Initial Inquiry', avatar: '/avatars/gojo.png' },
  { name: 'Cody Fisher', stage: 'Initial Inquiry', avatar: '/avatars/sakura.png' },
];

export default function Home() {
  return (
    // using the sidebar component
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
    {/* using header component */}
      <div className="ml-64">
        <Header />

        <main className="pt-20 px-8 pb-8">
          <div className="flex gap-6">
            <div className="w-[360px] h-[592px] p-6 rounded-xl border border-[#EAECF0] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
              <h2 className="flex justify-center text-lg font-semibold mb-4 text-black">Account Progress</h2>
              <div className="w-40 h-40 mx-auto p-4 mb-6 pb-6 border-b border-gray-200">
                <ProgressBar
                  value={85}
                  text="85%"
                  strokeWidth={12}
                  styles={{
                    path: { stroke: '#3B82F6' },
                    text: { fill: '#1F2937', fontSize: '20px' }
                  }}
                />
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-4 text-black">Steps Completed</h3>
                  <div className="space-y-3">
                    {['Profile Setup', 'Initial Training', 'Legal Documents'].map((step) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                          {/* using the svg icon for the check mark */}
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-base">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-4 text-black">Steps Remaining</h3>
                  <div className="space-y-3">
                    {['Financial Integration', 'Final Review'].map((step) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white" />
                        <span className="text-gray-700 text-base">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Card className="">{/* width and height is provided so no need to define here also*/}
                <h2 className="text-lg font-semibold mb-4 text-black">Total Franchisees Onboard</h2>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold text-black">14</span>
                    <div className="border border-green-500 text-green-500 text-sm px-2 py-0.5 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M6 9V3M6 3L3 6M6 3L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      7.4%
                    </div>
                  </div>
                  <div className="flex -space-x-2">{/* -space-x-2 for the profile to come one up to another Alternative we can use the z-index */}
                    {dummyProspects.map((prospect) => (
                      <img
                        key={prospect.name}
                        src={prospect.avatar}
                        alt={prospect.name}
                        className="w-6 h-6 rounded-full border-2 border-white"
                      />
                    ))}
                    <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                      +7
                    </div>
                  </div>
                </div>
                  
                  {/* this is the space progress bar*/}
                <div className="space-y-6">
                  <div className="flex flex-row items-start gap-2 w-full h-3">
                    <div className="flex-grow w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="flex-grow h-2 bg-blue-400 rounded-full"></div>
                    <div className="flex-grow w-20 h-2 bg-blue-200 rounded-full"></div>
                  </div>

                  <div className="space-y-3">
                    {/*could have used the map function to follow DRY principle*/}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-gray-600">Stage 1 (Initial Inquiry)</span>
                      </div>
                      <span className="font-medium text-black">02</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span className="text-gray-600">Stage 2 (Document Submission)</span>
                      </div>
                      <span className="font-medium text-black">07</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                        <div className="text-gray-600">Stage 3 (Training)</div>
                      </div>
                      <span className="font-medium text-black">05</span>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="w-[360px] h-[280px]">
                <h2 className="text-lg font-semibold mb-4 text-black">Financial Wellbeing</h2>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-4xl font-bold block text-black">20</span>
                    <span className="text-gray-600 text-sm">Total Franchisees</span>
                  </div>
                  <div className="border border-green-500 text-green-500 text-sm px-2 py-0.5 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M6 9V3M6 3L3 6M6 3L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    2.1%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="flex justify-center text-gray-600 text-sm block mb-1">Target</span>
                    <span className="flex justify-center text-xl font-bold text-black">$500,000</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="flex justify-center text-gray-600 text-sm block mb-1">Current</span>
                    <span className="flex justify-center text-xl font-bold text-black">$450,000</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col gap-6">
              <Card className="w-[360px] h-[280px]">
                <h2 className="text-lg font-semibold mb-4 text-black">Key Insights & Feedback</h2>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-4xl font-bold text-black">10%</div>
                    <div className="text-sm text-gray-600">Sales Growth</div>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span>Top Performer</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-4 text-black">Feedback</h3>
                  <div className="bg-gray-100 p-4 py-2 rounded-lg">
                    <p className="text-gray-600">
                      Franchisees are requesting more detailed training materials.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="w-[360px] h-[280px]">
                <h2 className="text-lg font-semibold mb-4 text-black">Prospect Leads</h2>
                <div className="space-y-3">
                  {dummyProspects.map((prospect) => (
                    <div key={prospect.name} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                      <div className="flex items-center gap-3">
                        <img
                          src={prospect.avatar}
                          alt={prospect.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-black">{prospect.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">Stage: {prospect.stage}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="flex mt-6">
            <div className="">
              <QuestionsSection />
            </div>
            <div className="ml-6 flex-1">
              <ChatAI />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
