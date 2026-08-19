import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemHook } from './components/ProblemHook';
import { ProgramOverview } from './components/ProgramOverview';
import { LearningFlow } from './components/LearningFlow';
import { CurriculumSection } from './components/CurriculumSection';
import { StudentOutcomes } from './components/StudentOutcomes';
import { CareerOpportunities } from './components/CareerOpportunities';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { SyllabusModal } from './components/SyllabusModal';
import { MentorSection } from './components/MentorSection';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [syllabusOpen, setSyllabusOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('Complete 30-Day Cohort (FREE)');

  const WHATSAPP_SESSION_URL = "https://chat.whatsapp.com/DKkUINCsIx9K7uKXDXwgJp?s=cl&p=i&ilr=0&amv=1";

  const handleOpenEnrollment = (_tier?: string) => {
    window.open(WHATSAPP_SESSION_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCloseEnrollment = () => {
    setEnrollmentOpen(false);
  };

  const handleOpenSyllabus = () => {
    setSyllabusOpen(true);
  };

  const handleCloseSyllabus = () => {
    setSyllabusOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans relative flex flex-col">
      {/* Sticky Header */}
      <Header 
        onOpenEnrollment={() => handleOpenEnrollment()} 
        onOpenSyllabus={handleOpenSyllabus} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with Live Deliverables Sandbox */}
        <Hero 
          onOpenEnrollment={() => handleOpenEnrollment()} 
          onOpenSyllabus={handleOpenSyllabus} 
        />

        {/* 2. Problem / Hook Section */}
        <ProblemHook 
          onOpenEnrollment={() => handleOpenEnrollment()} 
        />

        {/* 3. Program Overview & Specs Matrix (Page 1 Table & Class Mode) */}
        <ProgramOverview />

        {/* 4. The 7-Step Learning Flow Formula (Page 1 Section 2) */}
        <LearningFlow />

        {/* 5. Detailed 12 Course Modules (Pages 1-4 Section 3) */}
        <CurriculumSection 
          onOpenEnrollment={() => handleOpenEnrollment()} 
        />

        {/* 6. Student Outcomes: 15 Core Competencies (Page 5 Section 4) */}
        <StudentOutcomes />

        {/* 7. 10 Career Pathways: Potential Skill-Based Opportunities (Page 5 Section 5) */}
        <CareerOpportunities 
          onOpenEnrollment={() => handleOpenEnrollment()} 
        />

        {/* Mentor Section (Sawad KT - Founder Qnayds LLP) */}
        <MentorSection onOpenEnrollment={() => handleOpenEnrollment()} />

        {/* 8. Pricing Section (5000 strikethrough -> Free) */}
        <PricingSection 
          onOpenEnrollment={() => handleOpenEnrollment()} 
        />

        {/* 9. Frequently Asked Questions Accordion */}
        <FAQSection 
          onOpenEnrollment={() => handleOpenEnrollment()} 
        />
      </main>

      {/* Footer with Official Positioning & Legal Disclaimer */}
      <Footer 
        onOpenEnrollment={() => handleOpenEnrollment()} 
      />

      {/* Interactive Overlays */}
      <EnrollmentModal
        isOpen={enrollmentOpen}
        onClose={handleCloseEnrollment}
        selectedTier={selectedTier}
      />

      <SyllabusModal
        isOpen={syllabusOpen}
        onClose={handleCloseSyllabus}
        onEnroll={() => {
          setSyllabusOpen(false);
          handleOpenEnrollment();
        }}
      />

      {/* Floating CTA bar on scroll */}
      <FloatingCTA />
    </div>
  );
}
