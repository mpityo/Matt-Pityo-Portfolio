import React, { useState } from 'react';

function Projects () {
    const [projects] = useState([
        {
            name: 'Movie Vision',
            github: 'movie-vision',
            deployment: 'https://movie-vision-211.herokuapp.com/',
            tools: ['Javascript', 'Express', 'Node', 'SQL', 'Sequelize', 'QAuth', 'Handlebars (front end architecture)'],
            imgPath: 'movie-vision.png',
            description: 'Share your thoughts on movies to share with your community. Write reviews, view others, find new movies to watch, and enjoy a secure browsing experience. This app has best in class authentication for user information, and built on a secure SQL database to keep information organized and easy to access.',
            featured: true
        },
        {}
    ]);

    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section className="mx-4">
            <div id="project-header">
                <h1>Projects</h1>
                <h6>Check them out!</h6>
            </div>
            <div id="featured-projects" className="">
                <h3>Featured</h3>
                <div className="project-wrapper d-flex" id="featured-prj-wrapper">
                    {featuredProjects.map(({ name, github, deployment, tools, imgPath, description }) => (
                        <div className="project d-flex flex-wrap mw-100">
                            <img className="flex-row img-fluid img-thumbnail" src={`./assets/projects/${imgPath}`} alt="" />
                            <div className="flex-row">
                                <h5 className='card-title mb-0'>{name}</h5>
                                <div className='mb-2 tool-wrapper'>
                                    {tools.map((tool) => (
                                        <a href={`#${tool}`} className='card-subtitle text-muted badge'>{tool}</a>
                                    ))}
                                </div>
                                <p className='card-text'>{description}</p>
                                <a href={`https://github.com/mpityo/${github}`} className="card-link" target='_blank' rel="noreferrer">GitHub</a>
                                <a href={deployment} className="card-link" target='_blank' rel="noreferrer">Deployment</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;