/*

Warning: This component is too glitchy.
         Cat component was moved to NormalCat.jsx.
         A testing of drag of the cat was terrible.
         (Doesn't works on mobile)

*/

import "./Cat.scss"
import { createDraggable } from "animejs";
import { createScope, utils, animate } from "animejs";
import { useRef, useEffect, useState } from "react";


export function Cat() {

    const root = useRef(null);
    const scope = useRef(null);
    // const navigate = useNavigate();
    let grab = false;

    const [image, setImage] = useState("url(/not-a-website/cat/cat_normal.webp)")
    const [top, setTop] = useState("0%")
    const [left, setLeft] = useState("0%")

    useEffect(() => {


        const $frame = document.getElementById("container");


        // Mouse move

        function mousemove() {
            // console.log("move");
            if (grab) {

                // X is left/right
                // Y is top/bottom

                const framePosX = $frame.getBoundingClientRect().left;
                const framePosY = $frame.getBoundingClientRect().top;
                const frameHeight = $frame.offsetHeight;
                const frameWidth = $frame.offsetWidth;
                const x = event.clientX;
                const y = event.clientY;

                // console.log(frameWidth / (y - framePosY));
                // console.log(frameHeight / (x - framePosX));
                
                const countX = (x - framePosX + -100) / frameHeight * 100;
                setLeft(`${countX}%`)

                const countY = (y - framePosY + -100) / frameWidth * 100;
                setTop(`${countY}%`)
            }
        }

        document.addEventListener("mousemove", mousemove);
        //////////////////

        // Mouse down

        function mousedown() {
            setImage("url(/not-a-website/cat/cat_grab.webp)");
            console.log("down");
            grab = true;
        }

        //////////////////

        // Mouse up

        root.current.addEventListener("mousedown", mousedown);
        root.current.addEventListener("ontouchstart", mousedown);


        function mouseup() {
            console.log("up");
            setImage("url(/not-a-website/cat/cat_normal.webp)")
            grab = false;
        }

        document.addEventListener("mouseup", mouseup);
        document.addEventListener("ontouchcancel", mouseup);

        //////////////////

    }, []);

    return (
        <div className="cat" style={{ backgroundImage: image, top: top, left: left }} cursor="pointer" ref={root}></div>
    );
}
