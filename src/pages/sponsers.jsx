import React from 'react'

import "../css/sponsers.css"

export default function Sponsers() {

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
    return (
        <>
        
        <div id="sponsers_grid">


           

            {
                sponsers.map((sponser) => {
                    return (
                        <>

                            <div class="singleSponser">

                                <div class="singleSponser">

                                    <div class="imageDiv">
                                        <img src={require(`../res/all_images/sponsers_logo/${sponser[1]}`)} alt=""/>
                                    </div>
                                    <h3 class="sponser_title">{sponser[0]}</h3>

                                </div>

                            </div>
                        </>
                    )
                })
            }



        </div>
        </>
    )
}
