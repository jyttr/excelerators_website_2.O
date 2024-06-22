import React from "react";
import "../css/home.css"
import "../css/events.css"
import back_arrow from "../res/icons/back_arrow.png"



import { useEffect, useState } from "react";

import Navbar from "../components/navbar";


function Home() {

    const projects = [

        [1, "ebike 2021", "ebike20221.jpg",


            "Zephyr, our E - bike is like a pleasant breeze but built to last.Our e - bike is meticulously crafted for safety, durability, and affordability through ethical engineering practices.It had achieved overall AIR - 7 at ETWDC 2022."
        ],

        [2, "Fuego F-15", "image3.jpg",


            "ith unwavering enthusiasm, our team produced the Fuego F - 15, aimed to be unbeatable in the track, as its name says. with a compact and driver friendly design, our newest Go - Kart was indeed, majestic in the events, achieving an overall of AIR - 7 in FKDC Season 5, followed by an AIR - 1 in Cost, and AIR - 5 in Acceleration and Autocross."
        ],

        [3, "Fuego 2.O", "gokart20211.jpg",


            "The fire was unleashed again, with a bigger and better force, as we launched our new Go - kart, the Fuego 2.0, 2 years after its predecessor. With its ergonomic design, our Go - Kart did a fantastic feat in IKC Virtuals'22 achieving a score of AIR - 10 and Kerala - 1. "
        ],

        [

            4, "Satva", "satva.jpg",


            "Sathva, a project dedicated to the betterment of society, it is lifting platform that empowers individuals with disabilities to access and exit the stage with ease"



        ]

    ]

    const events = [


        [

            "proteus",
            "Proteus",
            "proteus.png",

            "Learning is like rowing upstream: not to advance is a drop back It's more than  fun to design some freaky electrical circuits.Proteus is a proprietary software tool suite used primarily for electronic design automation. The software is used mainly by electronic design engineers and technicians to create schematics and electronic prints for manufacturing printed circuit boards.Let's master the art of circuit designing ✨"

        ]
        ,
        [

            "stock_market",
            "STOCK MARKET",
            "stock_market.jpeg",


        ],
        [
            "blender",
            "Blender",
            "blender.jpg",


        ],
        [
            "inventor",
            "AutoDesk Inventor",
            "inventor.jpg",
            ""

        ],
        [
            "linux_commands",
            "Basics of Linux Commands",
            "linux_commands.jpg",
            ""

        ],
        [
            "premier_pro",
            "Premier Pro",
            "premier_pro.jpg",
            ""
        ],
        [
            "ansys",
            "Ansys",
            "ansys.jpg",
            ""
        ]
    ]


    const sponsers = [

        ["GBRI", "gbri1.png"],
        ["Aves constructions", "aves_construction.jpeg"],
        ["UST Global", "ust_global.jpeg"],
        ["Accubits", "accubits.jpg"],
        ["CubicSpace", "cubic_spaces.png"],
        ["Dassault systems", "dassualt_systems.jpg"],
        ["Ansys", "ansys.jpg"],
        ["AutoDesk", "autodesk.png"]
    ]

    const gallery_images = [
        "https://i.postimg.cc/gjw5CrhF/IMG-5519.jpg",
        "https://i.postimg.cc/2SpRfdTH/IMG-5530.jpg",
        "https://i.postimg.cc/jSzVqWFR/IMG-6101.jpg",
        "https://i.postimg.cc/WzCRz0V1/IMG-6934.jpg",
        "https://i.postimg.cc/pX5b7cQh/IMG-6945.jpg",
        "https://i.postimg.cc/FRC8C07V/IMG-7113.jpg",
        "https://i.postimg.cc/KYNdL6bV/IMG-8393.jpg",
        "https://i.postimg.cc/wBQd2tXw/MG-9040.jpg"
    ]


    useEffect(()=>{
        // document.getElementById('video').play();
    } ,[])



    return (
        <>
            <Navbar />

            <div id="loader">

                <h3>AIM ASPIRE ACHIEVE</h3>

                <div id="progressBarBg">
                    <div id="progressbar"></div>
                </div>




            </div>

            <div id="top_portion" class="section">




                <div id="image_slide_show">


                    <div id="images">

                        {/* <div id="image1" class="image_slide_show_image"></div> */}
                        {/* <div id="image2" class="image_slide_show_image"></div> */}
                        {/* <div id="image3" class="image_slide_show_image"></div> */}
                        {/* <div id="image4" class="image_slide_show_image"></div> */}
                        {/* <div id="image1" class="image_slide_show_image"></div> */}
                        <video controls  autoPlay id = "video" muted loop>
                            <source src={require("../res/videos/gokart_drift.mp4")} type="video/mp4" />

                        </video>
                    </div>


                </div>
                <div id="black_overlay"></div>

                <div id="above_image_box">

                    <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">EXCELERATORS CET</h1>
                    <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">Aim Aspire Achieve</h3>
                    <a href="/projects" id="view_projects">VIEW PROJECTS</a>

                </div>


            </div>


            <div id="about_us" class="section">

                <h3 class="title">ABOUT US</h3>

                <div class="about_us_inner">

                    <p data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">

                        Excelerators CET a motor sports team of College of Engineering Trivandrum.
                        We focus on building gokarts and ebikes for various events and competitions
                        and other projects for the welfare the college and society.The team is
                        powers by group of young minds inspired to reach great heights
                    </p>

                    <img src={require("../res/all_images/practice.jpg")} alt="about_us" />
                </div>

                <a href="/about_us" class="show_more more_about_us">SHOW MORE</a>

            </div>

            <div id="projects" class="section">

                <h2>PROJECTS</h2>

                <div class="projectGrid">
                    {
                        projects.map((project) => {
                            return (
                                <div class="singleProject" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                                    <div class="project_black_ovelay"></div>
                                    <img src={require(`../res/all_images/${project[2]}`)} alt="" />
                                    <h3 class="title">{project[1]}</h3>
                                </div>
                            )
                        })

                    }




                </div>

                <a href="/projects" class="show_more more_projects">SHOW MORE</a>

            </div>


            <div id="events" class="section">
                <h2>EVENTS</h2>

                <div class="eventGrid">

                    {
                        events.map((event) => {
                            return (
                                <div class="singleEventContainer">

                                    <div class="singleEvent" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">



                                        <img src={require(`../res/all_images/event_posters/${event[2]}`)} alt="image" />
                                    </div>
                                </div>
                            )
                        })}

                </div>

                <a href="/events" class="show_more more_events">SHOW MORE</a>

            </div>


            {/*  
            <div id="members" class="section">

                <h2 class="title">TEAM</h2>

                <div class="members_grid">

                    {% for member in members[:8] %}

                    <div class="singleMember" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">

                        <div class="profile_pic">
                            <img src="{{member[5]}}" alt="">

                        </div>

                        <div class="details">
                            <h3>{{ member[1]}} {{ member[3]}} {{ member[2]}}</h3>
                            <h3>position</h3>

                        </div>


                    </div>

                    {% endfor %}


                </div>

                <a href="/members" class="show_more more_members">SHOW MORE</a>
            </div>

            */}

            <div id="sponsers" class="section">

                <h2 class="title">SPONSERS</h2>

                <div id="sponsers_grid">

                    {
                        sponsers.map((sponser) => {

                            return (
                                <div class="singleSponser" data-aos="fade-up" duration="1500" data-aos-once="true">


                                    <div class="singleSponser">
                                        <div class="imageDiv">
                                            <img src={require(`../res/all_images/sponsers_logo/${sponser[1]}`)} alt="" />
                                        </div>
                                        <h3 class="sponser_title">{sponser[0]}</h3>
                                    </div>


                                </div>
                            )

                        })
                    }





                </div>

                <a href="/sponsers" class="show_more more_sponsers">SHOW MORE</a>
            </div>



            <div id="gallery" class="section">

                <h2 class="title">GALLERY</h2>

                <div id="image_grid">

                    {
                        gallery_images.map((image) => {

                            return (
                                <div class="singleImage">
                                    <img src={image} alt="image" />
                                </div>
                            )
                        })
                    }





                </div>

                <a href="/gallery" class="show_more more_pictures">SHOW MORE</a>

            </div>

            <div id="contacts" class="section">


                <div class="contact_container">


                    <h2>CONTACTS</h2>

                    <table>

                        <tr>
                            <td>email</td>
                            <td>excelerators@cet.ac.in</td>
                        </tr>

                        <tr>
                            <td>phone</td>
                            <td> +91 77366 99463 +91 92072 78035</td>

                        </tr>


                        <tr>
                            <td>linkdin</td>
                            <td> <a href="www.linkedin.com/company/excelerators">@excelerators</a></td>
                        </tr>




                        <tr>

                            <td>address </td>
                            <td>Engineering College, Sreekaryam - Kulathoor Rd, P.O, Sreekariyam, Thiruvananthapuram, Kerala 695016
                            </td>


                        </tr>


                    </table>
                </div>

            </div>


            <div id="footer" class="section">

                <span class="footer_logo"> <img src={require("../res/icons/logo.png")} alt="" /> </span>
                <span class="footer_title">EXCELERATORS CET</span>

            </div>


            {/* <script src="https://cdn.tailwindcss.com"></script> */}
            {/* <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script> */}
            {/* <script src="{{ url_for('static' , filename = 'js/home.js')  }}"></script> */}


            {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script> */}

            {/* AOS.init(); */}


        </>
    )
};

export default Home;