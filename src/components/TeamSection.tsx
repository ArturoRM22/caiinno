'use client'

import { useState } from 'react';
import { TeamMember } from '../models/Team';
import { teamData } from '@/data/team';

interface TeamSectionProps {
  language: 'english' | 'spanish';
}

export default function TeamSection({ language }: TeamSectionProps) {
  const [activeMember, setActiveMember] = useState<number | null>(null);
  const [activeResearcher, setActiveResearcher] = useState<number | null>(null);

  // Get the team data for the selected language
  const { teamMembers, juniorResearchers } = teamData[language];

  const toggleMember = (index: number) => {
    setActiveMember(activeMember === index ? null : index);
  };

  const toggleResearcher = (index: number) => {
    setActiveResearcher(activeResearcher === index ? null : index);
  };

  const renderMemberDropdown = (member: TeamMember, index: number, isActive: boolean, toggleFn: (index: number) => void) => (
    <div key={index} className="border rounded-lg overflow-hidden mb-4">
      <button
        className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => toggleFn(index)}
        aria-expanded={isActive}
        aria-controls={`member-content-${index}`}
      >
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <svg
          className={`w-5 h-5 transition-transform ${isActive ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div 
        id={`member-content-${index}`}
        className={`prose px-4 pb-4 transition-all duration-300 ${isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        {member.bio.map((paragraph, pIndex) => (
          <p key={pIndex} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h2 className="text-3xl font-bold mb-8">
        {language === 'spanish' ? 'Equipo' : 'Team'}
      </h2>
      
      <div className="space-y-2">
        {teamMembers.map((member, index) => 
          renderMemberDropdown(member, index, activeMember === index, toggleMember)
        )}
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-8">
        {language === 'spanish' ? 'Investigadores Junior' : 'Junior Researchers'}
      </h2>
      
      <div className="space-y-2">
        {juniorResearchers.map((researcher, index) => 
          renderMemberDropdown(researcher, index, activeResearcher === index, toggleResearcher)
        )}
      </div>
    </div>
  );
}