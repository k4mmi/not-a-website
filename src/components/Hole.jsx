import "./Hole.scss"
import { GlowIn } from "./GlowIn";
import { useRef, useEffect } from "react";
import { createScope, utils, animate, createTimeline } from "animejs";
import { NavigateWrapper } from "./NavigateWrapper";
import { useNavigate } from "react-router";

export function Hole() {

    const root = useRef(null);
    const scope = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {

        root.current.addEventListener("click", click);

        function click() {
            const $glow = document.getElementById("dreamRedGlow");
            $glow.style.display = "flex";

            const timeout = setTimeout(() => {
                navigate("/yellow");
            }, 1000);
        }

    }, []);

    return (
        <>
            <GlowIn color="#FFFF00" id="dreamRedGlow" />
            <div className="hole" ref={root} cursor="pointer" ref={root}>
                <div id="hole" className="hole__door" cursor="pointer"></div>
            </div>
        </>
    );
}