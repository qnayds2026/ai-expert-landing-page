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
import { MasterclassFormModal } from './components/MasterclassFormModal';
import { SyllabusModal } from './components/SyllabusModal';
import { MentorSection } from './components/MentorSection';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [syllabusOpen, setSyllabusOpen] = useState(false);

  const handleOpenEnrollment = () => {
    setFormModalOpen(true);
  };

  const handleCloseFormModal = () => {
    setFormModalOpen(false);
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
        onOpenEnrollment={handleOpenEnrollment} 
        onOpenSyllabus={handleOpenSyllabus} 
      />

      {/* Main Content: 30-Day Masterclass */}
      <main className="flex-1">
        {/* 1. Hero with Live Deliverables Sandbox */}
        <Hero 
          onOpenEnrollment={handleOpenEnrollment} 
          onOpenSyllabus={handleOpenSyllabus} 
        />

        {/* 2. Problem / Hook Section */}
        <ProblemHook 
          onOpenEnrollment={handleOpenEnrollment} 
        />

        {/* 3. Program Overview & Specs Matrix (Page 1 Table & Class Mode) */}
        <ProgramOverview 
          onOpenEnrollment={handleOpenEnrollment} 
        />

        {/* 4. The 7-Step Learning Flow Formula (Page 1 Section 2) */}
        <LearningFlow />

        {/* 5. Detailed 12 Course Modules (Pages 1-4 Section 3) */}
        <CurriculumSection 
          onOpenEnrollment={handleOpenEnrollment} 
        />

        {/* 6. Student Outcomes: 15 Core Competencies (Page 5 Section 4) */}
        <StudentOutcomes 
          onOpenEnrollment={handleOpenEnrollment} 
        />

        {/* 7. 10 Career Pathways: Potential Skill-Based Opportunities (Page 5 Section 5) */}
        <CareerOpportunities 
          onOpenEnrollment={handleOpenEnrollment} 
        />

        {/* Mentor Section (Sawad KT - Founder Qnayds LLP) */}
        <MentorSection onOpenEnrollment={handleOpenEnrollment} />

        {/* 8. Pricing Section (5000 strikethrough -> Free) */}
        <PricingSection 
          onOpenEnrollment={handleOpenEnrollment} 
        />

        {/* 9. Frequently Asked Questions Accordion */}
        <FAQSection 
          onOpenEnrollment={handleOpenEnrollment} 
        />
      </main>

      {/* Footer with Official Positioning & Legal Disclaimer */}
      <Footer 
        onOpenEnrollment={handleOpenEnrollment} 
      />

      {/* Interactive 11-Question Registration & Survey Modal */}
      <MasterclassFormModal
        isOpen={formModalOpen}
        onClose={handleCloseFormModal}
      />

      {/* Full Syllabus View Modal */}
      <SyllabusModal
        isOpen={syllabusOpen}
        onClose={handleCloseSyllabus}
        onEnroll={() => {
          setSyllabusOpen(false);
          handleOpenEnrollment();
        }}
      />

      {/* Floating CTA bar on scroll */}
      <FloatingCTA 
        onOpenEnrollment={handleOpenEnrollment}
      />
    </div>
  );
}
