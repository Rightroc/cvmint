"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";

export default function EducationForm() {
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      course: "",
      startYear: "",
      endYear: "",
      current: false,
    },
  ]);

  const handleChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...education];
    (updated[index] as any)[field] = value;
    setEducation(updated);
  };

  const handleCurrentChange = (
    index: number,
    checked: boolean
  ) => {
    const updated = [...education];
    updated[index].current = checked;

    if (checked) {
      updated[index].endYear = "";
    }

    setEducation(updated);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        school: "",
        degree: "",
        course: "",
        startYear: "",
        endYear: "",
        current: false,
      },
    ]);
  };

  const removeEducation = (index: number) => {
    setEducation(
      education.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">
        Education
      </h2>

      {education.map((item, index) => (
        <div
          key={index}
          className="space-y-4 rounded-xl border p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold">
            Education {index + 1}
          </h3>

          <Input
            label="School"
            value={item.school}
            onChange={(e) =>
              handleChange(index, "school", e.target.value)
            }
          />

          <Input
            label="Degree"
            value={item.degree}
            onChange={(e) =>
              handleChange(index, "degree", e.target.value)
            }
          />

          <Input
            label="Course"
            value={item.course}
            onChange={(e) =>
              handleChange(index, "course", e.target.value)
            }
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Start Year"
              value={item.startYear}
              onChange={(e) =>
                handleChange(index, "startYear", e.target.value)
              }
            />

            <Input
              label="End Year"
              value={item.endYear}
              onChange={(e) =>
                handleChange(index, "endYear", e.target.value)
              }
              disabled={item.current}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={item.current}
              onChange={(e) =>
                handleCurrentChange(index, e.target.checked)
              }
            />

            <label>I'm currently studying here</label>
          </div>

          {education.length > 1 && (
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Remove Education
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        + Add Education
      </button>
    </div>
  );
}