import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "100 JS Projects",
    description:
      "This project has small js projects like a local ChatGPT, paint, excel all in vanilla. Check it out",
    image: "/Images/projects/js-100-projects.png",
    tag: ["All", "Web"],
    git: "https://github.com/PabloJL/js-projects",
    preview: "https://js-projects-liart.vercel.app/",
  },
  {
    id: 2,
    title: "To Do App",
    description:
      "This To do app helps you keep track of your daily tasks so you don´t forget anything",
    image: "/Images/projects/todo.png",
    tag: ["All", "Web"],
    git: "https://github.com/PabloJL/TODO-App",
    preview: "https://pablojl.github.io/TODO-App/",
  },
  {
    id: 3,
    title: "Shopee",
    description:
      "Shopee is an Ecommerce app, you can find any kind of product here!",
    image: "/Images/projects/shopee.png",
    tag: ["All", "Web"],
    git: "https://github.com/PabloJL/Shope",
    preview: "https://timely-cuchufli-2a39da.netlify.app/",
  },

  {
    id: 4,
    title: "Post It",
    description: "Share your thoughts, comment and like other peoples posts😁",
    image: "/Images/projects/post-it.png",
    tag: ["All", "Web"],
    git: "https://github.com/PabloJL/post-it",
    preview: "https://post-it-olive.vercel.app/",
  },
  {
    id: 5,
    title: "Local ChatGPT",
    description: "This is a local version of chatGPT",
    image: "/Images/projects/04.webp",
    tag: ["All", "Web"],
    git: "https://github.com/PabloJL/js-projects/tree/master/public/projects/04-chatgpt-local",
    preview: "https://js-projects-liart.vercel.app/04-chatgpt-local",
  },
  {
    id: 6,
    title: "Typing Game",
    description: "Try this game to test your typing skills.",
    image: "/Images/projects/03.webp",
    tag: ["All", "Web"],
    git: "https://github.com/PabloJL/js-projects/tree/master/public/projects/03-typing-game",
    preview: "https://js-projects-liart.vercel.app/03-typing-game",
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleFilterChange = (newTag) => {
    setFilter(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(filter)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div ref={ref} id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleFilterChange}
          name="All"
          isSelected={filter === "All"}
        />
        <ProjectTag
          onClick={handleFilterChange}
          name="Web"
          isSelected={filter === "Web"}
        />
        <ProjectTag
          onClick={handleFilterChange}
          name="Mobile"
          isSelected={filter === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitURL={project.git}
              previewUrl={project.preview}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
