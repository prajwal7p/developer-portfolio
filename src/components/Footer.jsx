import {  Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {

return(

<footer className="border-t border-white/10 py-10">

<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

<div>

<h2 className="text-2xl font-bold">

Prajwal P

</h2>

<p className="text-gray-400">

MERN Stack Developer

</p>

</div>

<div className="flex gap-6 mt-6 md:mt-0">

<a href="https://github.com/prajwal7p">

<FaGithub />

</a>

<a href="https://linkedin.com/in/prajwal-p-nair">

<FaLinkedin/>

</a>

<a href="mailto:prajwalnair9@gmail.com">

<Mail/>

</a>

</div>

</div>

<p className="text-center mt-8 text-gray-500">

© 2026 Prajwal P. All Rights Reserved.

</p>

</footer>

)

}