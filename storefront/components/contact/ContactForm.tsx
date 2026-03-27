"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactSchema, ContactFormInput } from "@/schemas/contactSchema";
import { useRouter } from "next/navigation";
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(ContactSchema),
    values: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
  });
  const router = useRouter()

  const onSubmit = async (data: ContactFormInput) => {
    console.log("form submitted:", data);
    reset();
    router.push("/contact/success")
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <div className="bg-indigo-50 border border-indigo-100  p-6 sm:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 "
        >
          {/* name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm text-indigo-900">
              {" "}
              Name:
            </label>
            <input
              className="w-full px-4 py-2.5 text-sm text-indigo-900 bg-white border border-indigo-200  outline-none transition-transform  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-indigo-300"
              {...register("name")}
              id="name"
              type="text"
              name="name"
              required
            />
          </div>
          {errors.name && (
            <span className="text-xs text-amber-500 font-medium">
              {errors.name.message}
            </span>
          )}
          {/* subject */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="subject"
              className="text-sm text-indigo-900 font-heading"
            >
              Subject:
            </label>
            <input
              className="w-full px-4 py-2.5 text-sm text-indigo-900 bg-white border border-indigo-200  outline-none transition-transform  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-indigo-300"
              {...register("subject")}
              id="subject"
              type="text"
              name="subject"
              required
            />
            {errors.subject && (
              <span className="text-xs text-amber-500  font-medium">
                {errors.subject.message}
              </span>
            )}
          </div>
          {/* email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className=" text-sm text-indigo-900 font-heading"
            >
              {" "}
              Email:
            </label>
            <input
              className="w-full px-4 py-2.5 text-sm text-indigo-900 bg-white border border-indigo-200  outline-none transition-transform  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-indigo-300"
              {...register("email")}
              id="email"
              type="email"
              name="email"
              required
            />

            {errors.email && (
              <span className="text-xs text-amber-500 font-medium">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* message */}{" "}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-sm text-indigo-900 font-heading"
            >
              {" "}
              Message:
            </label>
            <textarea
              className="w-full px-4 py-2.5 text-sm text-indigo-900 bg-white border border-indigo-200  outline-none transition-transform focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-indigo-300 resize-none"
              {...register("message")}
              id="message"
              name="message"
              required
            />

            {errors.message && (
              <span className="text-xs text-amber-500 font-medium">
                {errors.message.message}
              </span>
            )}
          </div>
         
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3 px-4 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              type="submit"
            >
              Submit Request
            </button>
          
        </form>
      </div>
    </div>
  );
}
