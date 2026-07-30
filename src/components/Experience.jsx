import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "Started B.E Computer Science",
    description:
      "Joined SDM Institute of Technology."
  },

  {
    year: "2026",
    title: "MERN Stack Developer Intern",

    description:
      "Completed hands-on training in React, Node.js, Express.js and MongoDB."
  },

  {
    year: "Present",

    title: "Building Full Stack Applications",

    description:
      "Developing real-world projects and preparing for Software Developer roles."
  }
];

export default function Experience(){

return(

<section id="experience" className="py-24">

<div className="max-w-5xl mx-auto">

<h2 className="text-center text-5xl font-bold mb-20">

Journey

</h2>

<div className="relative border-l-2 border-blue-600">

{timeline.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,x:-40}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

className="ml-10 mb-16"

>

<div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full"/>

<p className="text-blue-400">

{item.year}

</p>

<h3 className="text-2xl font-bold mt-2">

{item.title}

</h3>

<p className="text-gray-400 mt-3">

{item.description}

</p>

</motion.div>

))}

</div>

</div>

</section>

)

}