import { useRef, useEffect, useState } from "react";
import "./Cursor.scss"

export function Cursor() {

    const root = useRef(null);

    const [CursorX, setCursorX] = useState()
    const [CursorY, setCursorY] = useState()

    useEffect(() => {

        const $cursor = root.current;

        document.addEventListener("mousemove", mousemove);

        function mousemove() {

            navigator.userAgent.includes("iPad")
            navigator.userAgent.includes("iPhone")
            navigator.userAgent.includes("Android")

            function isItTouchScreen() {
                return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))
            }

            if (!isItTouchScreen()) {
                const x = event.clientX;
                const y = event.clientY;

                let handTexture;
                let handSize;
                let handMove;

                setCursorX(x);
                setCursorY(y);

                switch (document.elementFromPoint(x, y).getAttribute('cursor')) {
                    case "pointer":
                        handSize = "125px 125px"
                        handTexture = "/not-a-website/hand/pointer.webp";
                        handMove = "0 0"
                        break;
                    default:
                        handSize = "125px 145px"
                        handTexture = "/not-a-website/hand/default_-40px.webp"
                        handMove = "0 -20px"
                }

                root.current.style.backgroundImage = `url("${handTexture}")`;
                root.current.style.backgroundSize = `${handSize}`;
                root.current.style.translate = `${handMove}`;
            }

        }

        // Hide cursor
        document.addEventListener("mouseout", mouseout)

        function mouseout() {
            root.current.style.visibility = "hidden";
        }

        // Show cursor
        document.addEventListener("mouseover", mouseover)

        function mouseover() {
            root.current.style.visibility = "visible";
        }

        return () => {
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseout", mouseout);
            document.removeEventListener("mouseover", mouseover);
        };

    }, []);

    return (
        <div className="cursor" ref={root} style={{ top: CursorY, left: CursorX }}>
        </div>
    );
}