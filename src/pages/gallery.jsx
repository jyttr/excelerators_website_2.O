import React from 'react'
import "../css/gallery.css"

export default function Gallery() {

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
    return (
        <>
            <div id="all_black"></div>
            <div id="imageViewer">

                <button id="close">  <img src="{{ url_for('static' , filename = 'res/close.png') }}" alt=""/> </button>

                <button id="previous" class="imagechange"><img src="{{ url_for('static' , filename = 'res/left_arrow.png') }}" alt=""/></button>
                <img src="" alt="" id="imageViewerImage" />
                <button id="next" class="imagechange"><img src="{{ url_for('static' , filename = 'res/right_arrow.png') }}" alt=""/></button>


            </div>





            <h1>GALLERY</h1>

            <div id="image_grid">

                {
                    gallery_images.map((image) => {
                        return (

                            <div class="singleImage" className="singleMember" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">

                            <img src= {image} alt="image"/>

                        </div>
                        )
                    })
                }

            </div>


        </>
    )
}
