// import { zodResolver } from "@hookform/resolvers/zod";
export default function ContactForm() {
  return (
    <div className="flex ">
      <form className="flex flex-col gap-4 ">
     
        {/* name */}
        <label htmlFor="name"> Name:</label>
        <input className="border" id="name" type="text" name="name" required />
       
        {/* subject */}
         <label htmlFor="subject">Subject:</label>
        <input className="border" id="subject" type="text" name="subject" required />
       
        {/* email */}
         <label htmlFor="email"> Email:</label>
        <input className="border" id="email" type="email" name="email" required />
       
        {/* message */}
         <label htmlFor="message"> Message:</label>
        <input className="border" id="message" type="text" name="message" required />
       <button className="flex bg-amber-200 rounded-lg"> Submit </button>
      </form>
    </div>
  );
}
