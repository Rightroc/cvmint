"use client";

import { useState } from "react";
import ProgressBar from "@/components/form/ProgressBar";
import PersonalInfoForm from "@/components/form/PersonalInfoForm";
import EducationForm from "@/components/form/EducationForm";
import CVPreview from "@/components/cv/CVPreview";
import { formSteps } from "@/data/formSteps";
import { defaultCV } from "@/data/defaultCV";

export default function BuilderPage() {
  const [currentStep] = useState(1);
  const [cvData, setCvData] = useState(defaultCV);

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <ProgressBar
            currentStep={currentStep}
            totalSteps={formSteps.length}
          />

          <div className="mt-8" space-y-10>
            <PersonalInfoForm
              cvData={cvData}
              setCvData={setCvData}
            />

            <EducationForm />
          </div>
        </div>

        <CVPreview data={cvData} />

      </div>
    </main>
  );
}