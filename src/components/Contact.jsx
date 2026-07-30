import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_195cgfq",
      "template_0hayk26",
      form.current,
      "mNCoKcF3qcYYVIBdr"
    );

    alert("Message Sent Successfully!");

    e.target.reset();
  };

  return (

<section
id="contact"
className="py-24 bg-[#030712]"
>

<div className="max-w-6xl mx-auto px-6">

<motion.h2

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

className="text-center text-5xl font-bold mb-16"

>

Let's Connect

</motion.h2>

<div className="grid md:grid-cols-2 gap-12">

<div>

<h3 className="text-3xl font-semibold mb-8">

Contact Information

</h3>

<div className="space-y-6">

<p className="flex gap-4 items-center">

<Mail/>

prajwalnair9@gmail.com

</p>

<p className="flex gap-4 items-center">

<Phone/>

+91 9353625696

</p>

<a

href="https://github.com/prajwal7p"

target="_blank"

className="flex gap-4 items-center hover:text-blue-400"

>

<FaGithub />

GitHub

</a>

<a

href="https://linkedin.com/in/prajwal-p-nair"

target="_blank"

className="flex gap-4 items-center hover:text-blue-400"

>

<FaLinkedin/>

LinkedIn

</a>

</div>

</div>

<form

ref={form}

onSubmit={sendEmail}

className="space-y-5"

>

<input

type="text"

name="from_name"

placeholder="Your Name"

required

className="w-full bg-white/5 p-4 rounded-xl border border-white/10"

/>

<input

type="email"

name="from_email"

placeholder="Email"

required

className="w-full bg-white/5 p-4 rounded-xl border border-white/10"

/>

<textarea

rows="6"

name="message"

placeholder="Message"

required

className="w-full bg-white/5 p-4 rounded-xl border border-white/10"

/>

<button

className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700 transition"

>

Send Message

</button>

</form>

</div>

</div>

</section>

);

}