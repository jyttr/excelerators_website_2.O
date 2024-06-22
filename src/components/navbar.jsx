import "../css/navbar.css"
import back_arrow from "../res/icons/back_arrow.png"
import logo from "../res/icons/logo.png"


import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Navbar() {


    const [navbarBackground, setNavbarBackground] = useState(false)
    const [linksBackground, setLinksBackground] = useState(false)
    const [navbarHidden, setnavbarHidden] = useState(true)



    function ScrollTo(event, dest) {

        console.log(window.location.href);
        // event.preventDefault()
        if(window.location.pathname == "/"){
            
            event.preventDefault();

            let link = event.target
    
            console.log(dest)
    
    
            var distance = document.getElementById(dest).getBoundingClientRect().top;
            console.log(distance)
            window.scroll({ top: window.scrollY + distance - window.innerHeight / 11, behavior: "smooth" })
    
            console.log(link.classList);
        }

    }


    useEffect(() => {



        if (window.innerHeight <= window.innerWidth) {
            console.log("transparent")
            // links.style.backgroundColor = "transparent";
            setNavbarBackground(false)
            setLinksBackground(false)
        } else {
            setNavbarBackground(false)
            setLinksBackground(true)
        }

        window.addEventListener("scroll", () => {


            if (window.innerHeight <= window.innerWidth) {
                console.log("transparent")
                // links.style.backgroundColor = "transparent";
                if (window.scrollY > window.innerHeight / 2) {
                    setNavbarBackground(true);
                    // setLinksBackground(true);
                } else {
                    setNavbarBackground(false)
                    // setLinksBackground(false)
                }

            } else {
                setNavbarBackground(false)
                setLinksBackground(true)
            }



        })



    }, [])




    return (
        <>

            <div id="navbar" style={{ backgroundColor: (navbarBackground) ? "black" : "transparent" }}>




                <div id="show_navbar" onClick={() => {
                    if (navbarHidden) {
                        setnavbarHidden(false);
                    } else {
                        setnavbarHidden(true)
                    }
                }} >

                    <span className="bar1 bar"></span>
                    <span className="bar2 bar"></span>
                    <span className="bar3 bar"></span>

                </div>

                <div className="empty"></div>

                <div id="navbar_logo"> <img src={logo} alt="logo" /> </div>

                <div className="empty"></div>

                <div id="links" style={{ backgroundColor: (linksBackground) ? "black" : "transparent", left: (navbarHidden) ? "-50vw" : "0vw" }}>



                    <ul>
                        <li  > <a className="link home_link" href="/" >HOME</a> </li>
                        <li> <a className="link about_us_link" href="/about_us" onClick={event=>{ScrollTo(event, "about_us")}}>ABOUT US</a> </li>
                        <li> <a className="link projects_link" href="/projects" onClick={event=>{ScrollTo(event, "projects")}}>PROJECTS</a> </li>
                        <li> <a className="link events_link" href="/events" onClick={event=>{ScrollTo(event, "events")}}>EVENTS</a> </li>
                        <li> <a className="link members_link" href="/members" onClick={event=>{ScrollTo(event, "members")}}>TEAM</a> </li>
                        <li> <a className="link sponsers_link" href="/sponsers" onClick={event=>{ScrollTo(event, "sponsers")}}>SPONSERS</a> </li>
                        <li> <a className="link gallery_link" href="/gallery" onClick={event=>{ScrollTo(event, "gallery")}}>GALLERY</a> </li>
                        {/* <li> <a className="link contacts_link" href="/contact">CONTACT</a> </li> */}
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Navbar;