import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../Model/Model";

function About() {
  return (
    <section className="mx-4 about">
      <h1 className="text-align">Matt Pityo</h1>
      <div className="d-flex flex-wrap about-container mt-1">
        {/* <div className="flex-row bio-img-container"> */}
        {/* <img
            className="img-fluid rounded bio-img"
            src={process.env.PUBLIC_URL + "/assets/bio-img.jpeg"}
            alt="Matt looking up towards the sky on the beach"
          ></img> */}
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 10 }}
          style={{
            backgroundColor: "transparent",
            width: "30vw",
            height: "60vh",
            maxWidth: "350px",
          }}
        >
          <ambientLight intensity={1.2} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model position={[0.025, -0.91, 0]}/>
          </Suspense>
          <OrbitControls />
        </Canvas>
        {/* </div> */}
        <div className="col-md-8 flex-row bio m-auto">
          <p>
            I am a full stack developer looking for opportunities to connect and
            showcase my abilities and passion. With a decade in the customer
            service/entertainment industry, I have a deep understanding of
            interpersonal communication and relations. I am a proven people
            person and problem solver, as well as a mediator - I haven't met one
            person I haven't gotten along with. Now stepping into the software
            development space, I'm looking to marry my people skills and my
            technical skills.
          </p>
          <p>
            I have a certificate in full stack web development from the
            University of Central Florida. In addition, I am a current student
            at the University of Florida going for a Computer Science degree.
            Both programs have fostered a deep understanding of back-end
            JavaScript frameworks such as Node, Express, React, and Sequelize
            (to name a few), front-end technologies such as Handlebars and any
            CSS engine, and the ability to research and use any new technology
            that is thrown my way. I am eager to step into a role that allows me
            to utilize any and/or all of these skills.
          </p>
          <p>
            While in the bootcamp, I completed 23 individual projects varying in
            complexity, and 3 group assignments from scratch. The group projects
            allowed me to corroborate with other students while simultaneously
            reinforcing my own understanding of the concepts and technology
            being used. All three projects received high marks and positive
            reaction from both peers and teaching staff.
          </p>
          <p>
            There's nothing a cup of coffee and a meticulous attitude can't
            accomplish - try me!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
