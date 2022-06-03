import React, { useState } from "react";
import SingleProject from '../SingleProject';

function Projects() {
  const [projects] = useState([
    {
      name: "DevHub",
      github: "devhub",
      deployment: "https://whispering-island-67364.herokuapp.com/",
      tools: [
        "Express",
        "Node",
        "GraphQL",
        "React",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Chakra UI",
        "Apollo"
      ],
      imgPath: "devhub.png",
      description:
        "Final project - work with four other students to create a full stack MERN application from scratch. Shop around from different website templates, input instructions, and send to a team of developers to create the website for you.",
      featured: true,
    },
    {
        name: "Depp Thoughts (A social media example application)",
        github: "deep-thoughts",
        deployment: "https://social-media-ex.herokuapp.com/",
        tools: [
          "Javascript",
          "Express",
          "Node",
          "GraphQL",
          "React",
          "MongoDB",
          "Mongoose",
          "Authentication",
          "Headers",
        ],
        imgPath: "deep-thoughts.png",
        description:
          "Utilizing all previous experience, create a social media application that emulates a mutli-page website as a SPA with React. Has all abilities of a social media application, packaged in a small form factor.",
        featured: true,
    },
    {
        name: "Movie Vision",
        github: "movie-vision",
        deployment: "https://movie-vision-211.herokuapp.com/",
        tools: [
          "Javascript",
          "Express",
          "Node",
          "SQL",
          "Sequelize",
          "QAuth",
          "Handlebars",
        ],
        imgPath: "movie-vision.png",
        description:
          "Second group project. Share your thoughts on movies with your community. Write reviews, view others, find new movies to watch, and enjoy a secure browsing experience. This app has best in class authentication for user information, and built on a secure SQL database to keep information organized and easy to access.",
        featured: false,
    },
    {
      name: "Zookeepr",
      github: "zookeepr",
      deployment: "https://zookeepr-75384.herokuapp.com/",
      tools: [
        "Javascript",
        "Express",
        "Node",
        "SQL",
        "Sequelize",
        "RESTful API",
        "Jest",
      ],
      imgPath: "zookeepr.png",
      description:
        "Move a zoo from a physical database to a virtual one. Utilizing SQL, have the ability to view any animal or zookeeper, as well as add them.",
      featured: false,
    },
    {
      name: "Tech Blog",
      github: "tech-blog",
      deployment: "https://tech-blog-211.herokuapp.com/",
      tools: [
        "Javascript",
        "Express",
        "Node",
        "SQL",
        "Sequelize",
        "Handlebars",
        "Authentication",
      ],
      imgPath: "tech-blog.png",
      description:
        "Connect with others through blog posts about technology. Using login authentication, create and comment on posts, while limiting access based on user state.",
      featured: false,
    },
    {
      name: "Portfolio (version 1)",
      github: "matt-pityo-css-portfolio",
      deployment: "https://mpityo.github.io/Matt-Pityo-CSS-Portfolio/",
      tools: ["Javascript", "CSS", "HTML"],
      imgPath: "css-portfolio.png",
      description:
        "First version of my portfolio. Created one month into the bootcamp, only uses vanilla Javascript/CSS/HTML, no packages, no fancy features.",
      featured: false,
    },
    {
      name: "Food Festival",
      github: "food-festival",
      deployment: "https://mpityo.github.io/food-festival/",
      tools: ["PWA", "Webpack"],
      imgPath: "food-festival.png",
      description:
        "Take a functional application and create a PWA and integrate offline features, such as caching webpages and images.",
      featured: false,
    },
    {
      name: "Pizza Hunt",
      github: "pizza-hunt",
      deployment: "https://pizza-hunt-211.herokuapp.com/",
      tools: [
        "Javascript",
        "Express",
        "Node",
        "IndexedDB",
        "MongoDB",
        "Mongoose",
      ],
      imgPath: "pizza-hunt.png",
      description:
        "First interaction with MongoDB. Create pizzas, add them to a database for others to view and comment on. No login or logout functionality, so any user can add and contribute to the conversation.",
      featured: false,
    },
    {
      name: "Cross Country Cuisine",
      github: "crosscountrycuisine",
      deployment: "https://mpityo.github.io/CrossCountryCusine/",
      tools: ["Javascript", "CSS", "HTML"],
      imgPath: "cross-country-cuisine.png",
      description:
        "First group project to find the top rated cuisine from a searched city. Features the ability to only show results from certain cuisines, as well as the ability to favorite a restaurant to see it faster next time. Uses public APIs to bring in and display information. CSS is bootstrap and HTML is all vanilla, as well as vanilla javascript.",
      featured: false,
    },
  ]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filtered, setFiltered] = useState('');

  const filterProjects = event => {
      const tagToFilterBy = event.target.textContent;
      setFilteredProjects(projects.filter(project => {
          return project.tools.includes(tagToFilterBy);
      }));
      setFiltered(tagToFilterBy);
  }

  const removeFilter = () => {
    setFiltered('');
    setFilteredProjects(projects);
  }

  return (
    <section className="mx-4">
      <div className="text-align">
        <h1>Projects</h1>
        <h4>Let my experience speak for itself...</h4>
        <h6>(click on any technology of interest to see projects with only that)</h6>
      </div>
      {filtered && (
          <div className="current-filter m-auto"><span className="close" onClick={removeFilter}>X</span>{filtered}</div>
      )}
      <div id="projects" className="">
          {/* all projects */}
        <div className="project-wrapper d-flex flex-wrap align-items-start">
          {filteredProjects.map((project) => (
            <div className="project d-flex flex-wrap p-2 col-xs-12 col-sm-6 col-md-4 col-lg-3"
              key={project.name}>
                <SingleProject project={project} filterProjects={filterProjects} />
            </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
