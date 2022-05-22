import React, { useState } from 'react';

function Projects () {
    const [projects] = useState([
        {
            name: 'Movie Vision',
            github: 'movie-vision',
            deployment: 'https://movie-vision-211.herokuapp.com/',
            tools: ['Javascript', 'Express', 'Node', 'SQL', 'Sequelize', 'QAuth', 'Handlebars'],
            imgPath: 'movie-vision.png',
            description: 'Second group project. Share your thoughts on movies to share with your community. Write reviews, view others, find new movies to watch, and enjoy a secure browsing experience. This app has best in class authentication for user information, and built on a secure SQL database to keep information organized and easy to access.',
            featured: true
        },
        {
            name: 'Zookeepr',
            github: 'zookeepr',
            deployment: 'https://zookeepr-75384.herokuapp.com/',
            tools: ['Javascript', 'Express', 'Node', 'SQL', 'Sequelize', 'RESTful API', 'Jest'],
            imgPath: 'zookeepr.png',
            description: 'Move a zoo from a physical database to a virtual one. Utilizing SQL, have the ability to view any animal or zookeeper, as well as add them.',
            featured: false
        },
        {
            name: 'Depp Thoughts (A social media example application)',
            github: 'deep-thoughts',
            deployment: 'https://social-media-ex.herokuapp.com/',
            tools: ['Javascript', 'Express', 'Node', 'GraphQL', 'React', 'MongoDB', 'Mongoose', 'Authentication', 'Headers'],
            imgPath: 'deep-thoughts.png',
            description: 'Utilizing all previous experience, create a social media application that emulates a mutli-page website as a SPA with React. Has all abilities of a social media application, packaged in a small form factor.',
            featured: true
        },
        {
            name: 'Tech Blog',
            github: 'tech-blog',
            deployment: 'https://tech-blog-211.herokuapp.com/',
            tools: ['Javascript', 'Express', 'Node', 'SQL', 'Sequelize', 'Handlebars', 'Authentication'],
            imgPath: 'tech-blog.png',
            description: 'Connect with others through blog posts about technology. Using login authentication, create and comment on posts, while limiting access based on user state.',
            featured: false
        }
        ,
        {
            name: 'Portfolio (version 1)',
            github: 'matt-pityo-css-portfolio',
            deployment: 'https://mpityo.github.io/Matt-Pityo-CSS-Portfolio/',
            tools: ['Javascript', 'CSS', 'HTML'],
            imgPath: 'zookeepr.png',
            description: 'First version of my portfolio. Created one month into the bootcamp, only uses vanilla Javascript/CSS/HTML, no packages, no fancy features.',
            featured: false
        },
        {
            name: 'Food Festival',
            github: 'food-festival',
            deployment: 'https://mpityo.github.io/food-festival/',
            tools: ['PWA', 'Webpack'],
            imgPath: 'food-festival.png',
            description: 'Take a functional application and create a PWA and integrate offline features, such as caching webpages and images.',
            featured: false
        },
        {
            name: 'Pizza Hunt',
            github: 'pizza-hunt',
            deployment: 'https://pizza-hunt-211.herokuapp.com/',
            tools: ['Javascript', 'Express', 'Node', 'IndexedDB', 'MongoDB', 'Mongoose'],
            imgPath: 'pizza-hunt.png',
            description: 'First interaction with MongoDB. Create pizzas, add them to a database for others to view and comment on. No login or logout functionality, so any user can add and contribute to the conversation.',
            featured: false
        },
        {
            name: 'Cross Country Cuisine',
            github: 'crosscountrycuisine',
            deployment: 'https://mpityo.github.io/CrossCountryCusine/',
            tools: ['Javascript', 'CSS', 'HTML'],
            imgPath: 'cross-country-cuisine.png',
            description: 'First group project to find the top rated cuisine from a searched city. Features the ability to only show results from certain cuisines, as well as the ability to favorite a restaurant to see it faster next time. Uses public APIs to bring in and display information. CSS is bootstrap and HTML is all vanilla, as well as vanilla javascript.',
            featured: false
        },
    ]);

    const [hovered, setIsHovered] = useState(false);
    function handleHover (event) {
        console.log(hovered);
        setIsHovered(!hovered);
        console.log(hovered);
    }

    return (
        <section className="mx-4">  
            <div id="project-header">
                <h1>Projects</h1>
                <h6>Check them out!</h6>
            </div>
            <div id="projects" className="">
                <div className="project-wrapper d-flex" id="featured-prj-wrapper">
                    {projects.map(({ name, github, deployment, tools, imgPath, description, featured }) => (
                        <div className="project flex-row d-flex flex-wrap p-2 mb-3">
                            <div>
                            <div className='flex-row flex-wrap'>
                                <img className='prj-img' src={`./assets/projects/${imgPath}`} alt="" />
                                {/* <div className={`${featured && 'featured'}`}> featured</div> */}
                            </div>
                            <div className="flex-row flex-wrap">
                                <h5 className='card-title mb-0'>{name} {featured && <h6>Featured!</h6>}</h5>
                                <div className='mb-2 tool-wrapper'>
                                    {tools.map((tool) => (
                                        <span className='card-subtitle text-muted badge'>{tool}</span>
                                    ))}
                                </div>
                                <p className='card-text'>{description}</p>
                                <a href={`https://github.com/mpityo/${github}`} className="card-link" target='_blank' rel="noreferrer">GitHub</a>
                                <a href={deployment} className="card-link" target='_blank' rel="noreferrer">Deployment</a>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;