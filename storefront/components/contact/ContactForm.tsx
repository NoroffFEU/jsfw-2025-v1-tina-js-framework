"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactSchema, ContactFormInput } from "@/schemas/contactSchema";

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

  const onSubmit = async (data: ContactFormInput) => {
    console.log("form submitted:", data);
    reset();
    alert("you have submitted the contact form");
  };

  return (
    <div className="flex ">
        
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
        {/* name */}
        <label htmlFor="name"> Name:</label>
        <input
          className="border"
          {...register("name")}
          id="name"
          type="text"
          name="name"
          required
        /> 
        {errors.name && (<span>{errors.name.message}</span>)

        }
        

        {/* subject */}
        <label htmlFor="subject">Subject:</label>
        <input
          className="border"
          {...register("subject")} 
          id="subject"
          type="text"
          name="subject"
          required
        />

        {/* email */}
        <label htmlFor="email"> Email:</label>
        <input
          className="border"
          {...register("email")} 
          id="email"
          type="email"
          name="email"
          required
        />

        {/* message */}
        <label htmlFor="message"> Message:</label>
        <input
          className="border"
          {...register("message")} 
          id="message"
          type="text"
          name="message"
          required
        />
        <button className="flex bg-amber-200 rounded-lg" type="submit"> Submit </button>
      </form>
    </div>
  );
}
