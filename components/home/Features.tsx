import { FileText, Sparkles, Download } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: "ATS Friendly",
      desc: "Professional resumes recruiters love.",
    },
    {
      icon: Sparkles,
      title: "AI Assisted",
      desc: "Generate summaries and work experience.",
    },
    {
      icon: Download,
      title: "PDF Export",
      desc: "Download instantly as a polished PDF.",
    },
  ];

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover: "
          >
            <Icon className="mb-5 h-10 w-10 text-blue-600" />

            <h3 className="text-xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {feature.desc}
            </p>
          </div>
        );
      })}
    </section>
  );
}