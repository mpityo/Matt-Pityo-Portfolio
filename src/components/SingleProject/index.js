import React, { useState } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { ImRocket } from "react-icons/im";

function SingleProject({project}) {
  const { name, github, deployment, tools, imgPath, description, featured } = project;
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* individual project */}
        {/* image */}
        <div className="flex-row flex-wrap prj-img-container col-sm-4 col-md-12" onClick={() => setExpanded(!expanded)}>
          <img
            className="prj-img img-fluid"
            src={`./assets/projects/${imgPath}`}
            alt=""
          />
        </div>
        {expanded && (
            <div>
        {/* card body */}
        <div className="prj-body flex-row flex-wrap col-sm-8 m-auto w-100">
          {/* title and if featured project */}
          <h4 className="card-title mb-0 mt-2">{name}</h4>
          {featured && <h6 className="featured mt-1">Featured</h6>}

          {/* tools used */}
          <div className="mb-2 tool-wrapper">
            {tools.map((tool) => (
              <span
                className="card-subtitle text-muted badge tool"
                // onClick={props.func(tool)}
              >
                {tool}
              </span>
            ))}
          </div>
          {/* description */}
          <p className="card-text">{description}</p>
          {/* footer */}
          <div className="prj-footer d-flex justify-content-around">
            <a
              href={`https://github.com/mpityo/${github}`}
              className="card-link flex-row"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubAlt />
            </a>
            <a
              href={deployment}
              className="card-link flex-row"
              target="_blank"
              rel="noreferrer"
            >
              <ImRocket />
            </a>
          </div>
        </div>
        </div>
        )}
    </div>
  );
}

export default SingleProject;
