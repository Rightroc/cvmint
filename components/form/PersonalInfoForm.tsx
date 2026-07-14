"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input";
import { p } from "framer-motion/client";

const schema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Phone number is too short"),
  linkedIn: z.string().url().optional(),
  portfolio: z.string().url().optional(),
  github: z.string().url().optional(),
  address: z.string().min(3, "Address is required"),
  title: z.string().min(2, "Professional title is required"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  cvData: any;
  setCvData: React.Dispatch<React.SetStateAction<any>>;
}

export default function PersonalInfoForm({ cvData, setCvData }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const formValues = watch();

  useEffect(() => { 
    setCvData({
      ...cvData,
      personal: formValues,
    });
  }, [formValues]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Step 1 Completed 🎉");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold">
        Personal Information
      </h2>

      <Input
        label="Full Name"
        register={register("fullName")}
        error={errors.fullName?.message}
      />

      <Input
        label="Email"
        type="email"
        register={register("email")}
        error={errors.email?.message}
      />

      <Input
        label="Phone"
        register={register("phone")}
        error={errors.phone?.message}
      />

      <Input
        label="LinkedIn Profile"
        type="url"
        placeholder="https://www.linkedin.com/in/yourprofile"
        register={register("linkedIn")}
        error={errors.linkedIn?.message}
      />

      <Input
        label="portfolio"
        type="url"
        placeholder="https://www.portfolio/Website.com"
        register={register("portfolio")}
        error={errors["portfolio"]?.message}
      />

      <Input
        label="github"
        type="url"
        placeholder="https://www.github.com/yourprofile"
        register={register("github")}
        error={errors["github"]?.message}
      />

      <Input
        label="Address"
        register={register("address")}
        error={errors.address?.message}
      />

      <Input
        label="Professional Title"
        register={register("title")}
        error={errors.title?.message}
      />

      <button
        className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Next →
      </button>
    </form>
  );
}