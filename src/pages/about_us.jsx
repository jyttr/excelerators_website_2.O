import React from "react";
import "../css/about_us.css";

export default function AboutUs() {
  return (
    <>
      <div id="description" class="box">
        <h3 class="heading">ABOUT US</h3>
        <div id="top_image" class="image_div">
          <img
            src={require("../res/all_images/gokart20213.jpg")}
            alt=""
            class="image"
          />
        </div>

        <p class="para">
          Excelerators CET a motor sports team of College of Engineering
          Trivandrum. We focus on building gokarts and ebikes for various events
          and competitions and other projects for the welfare the college and
          society.The team is powers by group of young minds inspired to reach
          great heights Together we have participated in many events such as
          FKDC , Formula Kart design challenage and Electric Two wheeler design
          challenage organized by FMAE. Our vision and mission is to bring about
          by entailing new innovations in the field of automotive design and
          production. Encourage the upcoming generations to think out of the box
          so as the bring about advancements in the existing culture of gokart
          and ebike production . To coome up with cost effective assistive
          deviced for the diffrently abled sections of the population
        </p>
      </div>

      <div id="story" class="box">
        <h3 class="heading">OUR STORY</h3>
        <div class="image_div">
          <img
            src={require("../res/all_images/group_photo.jpg")}
            alt=""
            class="image"
          />
        </div>

        <p class="para">
          Excelerators CET started off as a motorsports team, operating under
          SAE CET, in 2019 by a small team of student since then the team has
          seen rapid growth, with over 70 students from various branches
          including, EC, AE, EEE, CS. Though we started as a go karting team, we
          have expanded our field of focus and presently we also have an in
          house manufactured electric bike. We have also undertaken a social
          project under BFCC CET, to construct a lift in the Diamond Jubilee
          hall so that the differently abled may easily access the stage. We are
          planning to further extend our sphere of influence into other fields
          of engineering and social welfare.
        </p>
      </div>
    </>
  );
}
