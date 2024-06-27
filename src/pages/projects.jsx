import React from "react";
import "../css/projects.css";

export default function Projects() {
  const projects = [
    [
      1,
      "EBlitz",
      "ebike20221.jpg",

      "Emerging through the odds, revving into the track of future, here presenting E-blitz. The third member in our E-bike collection, E-blitz is exceptional in its design and working.",
    ],

    [
      1,
      "ebike 2021",
      "ebike20221.jpg",

      "Zephyr, our E - bike is like a pleasant breeze but built to last.Our e - bike is meticulously crafted for safety, durability, and affordability through ethical engineering practices.It had achieved overall AIR - 7 at ETWDC 2022.",
    ],

    [
      2,
      "Fuego F-15",
      "image3.jpg",

      "ith unwavering enthusiasm, our team produced the Fuego F - 15, aimed to be unbeatable in the track, as its name says. with a compact and driver friendly design, our newest Go - Kart was indeed, majestic in the events, achieving an overall of AIR - 7 in FKDC Season 5, followed by an AIR - 1 in Cost, and AIR - 5 in Acceleration and Autocross.",
    ],

    [
      3,
      "Fuego 2.O",
      "gokart20211.jpg",

      "The fire was unleashed again, with a bigger and better force, as we launched our new Go - kart, the Fuego 2.0, 2 years after its predecessor. With its ergonomic design, our Go - Kart did a fantastic feat in IKC Virtuals'22 achieving a score of AIR - 10 and Kerala - 1. ",
    ],

    [
      4,
      "Satva",
      "satva.jpg",

      "Sathva, a project dedicated to the betterment of society, it is lifting platform that empowers individuals with disabilities to access and exit the stage with ease",
    ],
  ];
  return (
    <div>
      <img src={require("../res/icons/tire_mark.png")} alt="" id="tire_mark" />
      <h1 class="heading" id="projects_heading">
        OUR PROJECTS
      </h1>
      <div id="all_projects" class="projects">
        {projects.map((project) => {
          return (
            <div class="project_card">
              <div class="image_holder">
                <img src={require(`../res/all_images/${project[2]}`)} alt="" />
              </div>

              <div class="Projectdetails">
                <h3 class="title">{project[1]}</h3>
                <p class="description">{project[3]}</p>

                <a href="" class="view">
                  VEIW PROJECT
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
