"use client";

import { useState, useRef } from "react";
import ProgressBar from "@/components/form/ProgressBar";
import PersonalInfoForm from "@/components/form/PersonalInfoForm";
import EducationForm from "@/components/form/EducationForm";
import CVPreview from "@/components/cv/CVPreview";
import { formSteps } from "@/data/formSteps";
import { defaultCV } from "@/data/defaultCV";
import SummaryForm from "@/components/form/SummaryForm";
import ExperienceForm from "@/components/form/ExperienceForm";
import SkillsForm from "@/components/form/SkillsForm";
import RefereeForm from "@/components/form/RefereeForm";


export default function BuilderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [cvData, setCvData] = useState(defaultCV);
  const previewRef = useRef<HTMLDivElement>(null);
  const finish = () => {
    previewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => {
      alert("🎉 Your CV is ready! You can now export it as a PDF or Word document.");
    }, 400);
  };

  const nextStep = () => {
    if (currentStep < formSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 py-12">
      <div className="mx-auto mb-10 max-w-7xl">
        <h1 className="text-4xl font-bold text-slate-900">
          CVCraft
        </h1>

        <p className="mt-2 text-slate-600">
          Build a professional CV with live preview, PDF and Word export.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-2">

        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <ProgressBar
            currentStep={currentStep}
            totalSteps={formSteps.length}
          />
          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            {formSteps[currentStep]}
          </h2>

          <div className="mt-10">

            {currentStep === 0 && (
              <PersonalInfoForm
                cvData={cvData}
                setCvData={setCvData}
              />
            )}

            {currentStep === 1 && (
              <SummaryForm
                cvData={cvData}
                setCvData={setCvData}
              />
            )}

            {currentStep === 2 && (
              <EducationForm
                cvData={cvData}
                setCvData={setCvData}
              />
            )}

            {currentStep === 3 && (
              <ExperienceForm
                cvData={cvData}
                setCvData={setCvData}
              />
            )}

            {currentStep === 4 && (
              <SkillsForm
                cvData={cvData}
                setCvData={setCvData}
              />
            )}

            {currentStep === 5 && (
              <RefereeForm
                cvData={cvData}
                setCvData={setCvData}
              />
            )}

          </div>

          <div className="mt-10 flex items-center justify-between">

            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="rounded-lg border border-gray-300 px-6 py-2.5 text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              ← Previous
            </button>

            <p className="mt-2 text-sm text-slate-500">
              Complete each section to build your CV.
            </p>

            <button
              onClick={
                currentStep === formSteps.length - 1
                  ? finish
                  : nextStep
              }
              className={`rounded-lg px-6 py-2.5 font-medium transition ${
                currentStep === formSteps.length - 1
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {currentStep === formSteps.length - 1
                ? "✓ Finish"
                : "Next →"}
            </button>

          </div>
        </div>

        <div ref={previewRef}>
          <CVPreview data={cvData} />
        </div>

      </div>
    </main>
  );
}