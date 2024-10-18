"use client"
import React, { useState } from 'react';
import { Award, Target } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// RoadmapProgress Component
export const RoadmapProgress = () => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
    <h2 className="text-xl font-bold mb-4 text-gray-800">Continue Learning</h2>
    <div className="relative bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-4 border border-green-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-white">Full Stack Development</h3>
          <p className="text-sm text-green-200">Progress: 60%</p>
        </div>
        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:-translate-y-0.5 transition-all duration-300 hover:shadow-md">
          Continue
        </button>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2.5 mt-4">
        <div
          className="bg-gradient-to-r from-green-500 to-green-600 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: '60%' }}
        ></div>
      </div>
    </div>
  </div>
);

// RecommendedRoadmaps Component
export const RecommendedRoadmaps = () => {
  const roadmaps = [
    { title: 'Cloud Computing', level: 'Intermediate', duration: '3 months' },
    { title: 'Machine Learning', level: 'Advanced', duration: '6 months' },
    { title: 'Blockchain', level: 'Beginner', duration: '2 months' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Recommended Roadmaps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roadmaps.map((roadmap) => (
          <div
            key={roadmap.title}
            className="border border-gray-300 rounded-lg p-4 hover:-translate-y-1 transition-all duration-300 hover:shadow-md bg-gradient-to-br from-yellow-200 to-yellow-300"
          >
            <Target className="w-8 h-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold text-gray-800">{roadmap.title}</h3>
            <p className="text-sm text-yellow-500">{roadmap.level}</p>
            <p className="text-sm text-yellow-500">{roadmap.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// CompletedCertificates Component
export const CompletedCertificates = () => {
  const certificates = [
    { title: 'Web Development', date: '2024-01-15', score: '95%' },
    { title: 'React Advanced', date: '2023-12-01', score: '88%' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Completed Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="border border-gray-300 rounded-lg p-4 hover:-translate-y-1 transition-all duration-300 hover:shadow-md bg-gradient-to-br from-indigo-200 to-indigo-300"
          >
            <Award className="w-8 h-8 text-indigo-400 mb-2" />
            <h3 className="font-semibold text-gray-800">{cert.title}</h3>
            <p className="text-sm text-indigo-500">Completed: {cert.date}</p>
            <p className="text-sm text-indigo-500">Score: {cert.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// SkillsHexagon Component
export const SkillsHexagon = ({ interviewData }) => {
    // Mock data for skills
    const skillsData = [
      { skill: 'Java', value: 50 },
      { skill: 'MERN Stack', value: 20 },
      { skill: 'Python', value: 60 },
      { skill: 'DevOps', value: 40 },
      { skill: 'Machine Learning', value: 30 },
    ];
  
    // Mock data for trending technologies
    const trendingTechnologies = [
      { title: 'React', users: 1200 },
      { title: 'Node.js', users: 950 },
      { title: 'Docker', users: 800 },
      { title: 'Kubernetes', users: 600 },
    ];
  
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Skills Analysis</h2>
  
        {/* Circular Progress Bars with reduced size */}
        <div className="flex justify-around mb-6">
          {skillsData.map((skill) => (
            <div key={skill.skill} className="flex flex-col items-center">
              <CircularProgressbar
                value={skill.value}
                text={`${skill.value}%`}
                styles={{
                  path: { stroke: `rgba(63, 81, 181, ${skill.value / 100})` },
                  text: { fill: '#f88', fontSize: '12px' },
                  root: { width: '80px', height: '80px' },
                }}
              />
              <span className="mt-2 text-sm">{skill.skill}</span>
            </div>
          ))}
        </div>
  
        {/* Trending Technologies Bar Chart */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Trending Technologies</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={trendingTechnologies}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="title" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Bar dataKey="users" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
  
        {/* Interview Attempts Line Graph */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Interview Attempts Scores</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={interviewData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="role" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

// InterviewAttempts Component
export const InterviewAttempts = ({ interviews }) => {
    const [expandedCard, setExpandedCard] = useState(null);
  
    const handleCardClick = (index) => {
      setExpandedCard(expandedCard === index ? null : index);
    };
  
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Interview Attempts</h2>
        <div className="space-y-4">
          {interviews.map((interview, index) => (
            <div
              key={interview.role}
              className={`border border-gray-300 rounded-lg p-4 hover:-translate-y-1 transition-all duration-300 hover:shadow-md cursor-pointer bg-gradient-to-br from-pink-200 to-pink-300 ${expandedCard === index ? 'expanded' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-800">{interview.role}</h3>
                  <p className="text-sm text-pink-500">Score: {interview.score}%</p>
                </div>
              </div>
              {expandedCard === index && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700">Interview Questions</h4>
                  <ul className="space-y-2">
                    {interview.questions.map((q, qIndex) => (
                      <li key={qIndex} className="ml-4">
                        <p className="text-sm text-gray-800">
                          Q: {q.question}
                        </p>
                        <p
                          className={`text-sm ${q.isCorrect ? 'text-green-600' : 'text-red-600'}`}
                        >
                          Your answer: {q.userAnswer}
                        </p>
                        {!q.isCorrect && (
                          <p className="text-sm text-gray-500">Correct answer: {q.correctAnswer}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

// RightComponent
 export const RightComponent = () => {
    const interviews = [
        {
          role: 'Frontend Developer',
          score: 85,
          questions: [
            { question: 'What is React?', correctAnswer: 'A JavaScript library for building UIs', userAnswer: 'A JavaScript framework', isCorrect: false },
            { question: 'Explain useState hook', correctAnswer: 'A hook for adding state to a functional component', userAnswer: 'A hook for managing lifecycle', isCorrect: false },
            { question: 'What is JSX?', correctAnswer: 'A syntax extension for JavaScript', userAnswer: 'A templating language', isCorrect: false },
          ],
        },
        {
          role: 'Full Stack Developer',
          score: 78,
          questions: [
            { question: 'What is Node.js?', correctAnswer: 'A JavaScript runtime built on Chrome\'s V8 engine', userAnswer: 'A backend framework', isCorrect: false },
            { question: 'What is Express?', correctAnswer: 'A web framework for Node.js', userAnswer: 'A templating engine', isCorrect: false },
            { question: 'What is MongoDB?', correctAnswer: 'A NoSQL database', userAnswer: 'NoSQL', isCorrect: true },
          ],
        },
      ];
    
      return (
        <div className="flex flex-grow flex-col space-y-4 mx-5">
          <RoadmapProgress />
          <RecommendedRoadmaps />
          <CompletedCertificates />
          <SkillsHexagon interviewData={interviews} />
          <InterviewAttempts interviews={interviews} />
        </div>
      );
    };
export default RightComponent