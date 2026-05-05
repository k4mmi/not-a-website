import "./Dots.scss"
import { useRef, useEffect, useState } from "react";
import { createScope, utils, animate, createTimeline } from "animejs";
import { NavigateWrapper } from "./NavigateWrapper";

export function Dots({top = 0, left = 0}) {

    const [dotsTexture, setDotsTexture] = useState(1);

    useEffect(() => {

        const $dots = root.current;
        
        setInterval(() => {
            console.log("uwu");
            setDotsTexture(1);

            setTimeout(() => {
                setDotsTexture(2);
            console.log("uwu2");

                setTimeout(() => {
                    setDotsTexture(3);
                }, 100);
            }, 100);
        }, 300)
    }, []);

    return (
        <div className="dots" style={{ backgroundImage: `url(/not-a-website/dots/dots${dotsTexture}.svg)`, top: `${top}%`, left: `${left}%`}}></div>
    );
}