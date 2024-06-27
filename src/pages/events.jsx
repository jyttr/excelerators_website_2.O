import React from "react";
import "../css/events.css";

export default function Events() {
  const events = [
    [
      "proteus",
      "Proteus",
      "proteus.png",

      "Learning is like rowing upstream: not to advance is a drop back It's more than  fun to design some freaky electrical circuits.Proteus is a proprietary software tool suite used primarily for electronic design automation. The software is used mainly by electronic design engineers and technicians to create schematics and electronic prints for manufacturing printed circuit boards.Let's master the art of circuit designing ✨",
    ],
    ["stock_market", "STOCK MARKET", "stock_market.jpeg"],
    ["blender", "Blender", "blender.jpg"],
    ["inventor", "AutoDesk Inventor", "inventor.jpg", ""],
    ["linux_commands", "Basics of Linux Commands", "linux_commands.jpg", ""],
    ["premier_pro", "Premier Pro", "premier_pro.jpg", ""],
    ["ansys", "Ansys", "ansys.jpg", ""],
  ];
  return (
    <>
      <h1 id="mainHeading">EVENTS</h1>

      <div class="eventsGrid">
        {events.map((event) => {
          return (
            <>
              <a href={`${event[0]}/`}>
                <div class="eventContainer">
                  <div class="singleEvent">
                    <img
                      src={require(`../res/all_images/event_posters/${event[2]}`)}
                      alt="image"
                    />
                  </div>
                </div>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
}
