import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Clapperboard,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "RevBookMyShow",
    label: "Featured MERN application",
    icon: Clapperboard,
    accent: "from-violet-500 to-fuchsia-500",
    description:
      "A full-stack movie ticketing platform built around the complete booking journey - from discovering a film and choosing a show to selecting seats and managing bookings.",
    highlights: [
      "JWT authentication and role-based customer/admin access",
      "Colour-coded seat selection with Regular, Premium, and VIP pricing",
      "Admin workflows for movies, theatres, screens, shows, and booking reports",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/prajwal7p/BookMyShow",
    demo: "https://book-my-show-six-peach.vercel.app",
  },
  {
    title: "Course Management System",
    label: "React application",
    icon: GraduationCap,
    accent: "from-sky-500 to-cyan-400",
    description:
      "A responsive course discovery and management experience that brings together protected account flows, course browsing, course creation, and a cart-style learning journey.",
    highlights: [
      "Reusable React components, hooks, and React Router navigation",
      "Protected routes with authentication state and user feedback",
      "Axios-powered course data handling with responsive Tailwind UI",
    ],
    tech: ["React", "JavaScript", "Axios", "React Router", "Tailwind CSS"],
    github: "https://github.com/prajwal7p/Course-management-project",
    demo: "https://course-management-project-axbzjno8k-prajwal7ps-projects.vercel.app/login",
  },
  {
    title: "MERN E-Commerce",
    label: "Full-stack commerce platform",
    icon: ShoppingBag,
    accent: "from-amber-400 to-orange-500",
    description:
      "A deployed e-commerce application designed for secure product discovery and shopping, paired with admin tools that keep product data accurate and manageable.",
    highlights: [
      "JWT authentication, bcrypt password hashing, and role-based authorization",
      "Product search, shopping cart, and responsive customer experience",
      "Admin dashboard with complete product CRUD operations via REST APIs",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Context API"],
    github: "https://github.com/prajwal7p/E-commece-website",
    demo: "https://e-commece-website-emq5.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            Selected work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Projects built to solve real user flows.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            End-to-end applications that combine thoughtful interfaces with practical backend systems.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} shadow-lg`}>
                  <Icon size={27} strokeWidth={2.2} className="text-white" />
                </div>

                <p className="text-sm font-medium text-blue-300">{project.label}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

                <ul className="mt-7 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <BadgeCheck size={18} className="mt-0.5 shrink-0 text-blue-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source on GitHub`}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                  >
                    <FaGithub size={17} /> Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Live demo <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
