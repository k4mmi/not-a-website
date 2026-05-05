import "./ButtonAgain.scss"
import { GlowIn } from "./GlowIn";
import { useRef, useEffect } from "react";
import { NavigateWrapper } from "./NavigateWrapper";
import { useNavigate } from "react-router";
import { Paragraph } from "./Paragraph";

export function ButtonAgain() {

    const root = useRef(null);
    const scope = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {

        root.current.addEventListener("click", click);

        function click() {
            const $glow = document.getElementById("endGlow");
            $glow.style.display = "flex";

            const timeout = setTimeout(() => {
                navigate("/");
            }, 3000);
        }

    }, []);

    return (
        <div className="buttonAgain" ref={root} cursor="pointer">
            Play again
        </div>
    );
}