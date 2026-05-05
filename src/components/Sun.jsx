import "./Sun.scss"
import { useRef, useEffect } from "react";
import { createScope, utils, animate, createTimeline } from "animejs";
import { NavigateWrapper } from "./NavigateWrapper";

export function Sun() {

    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {

        function click() {

            const $boat = document.getElementById("boat");

            scope.current = createScope({ root }).add(self => {

                animate(root.current, {
                    y: "500%",
                    duration: 3000,
                    ease: 'in',
                    delay: 100,
                });

                root.current.style.pointerEvents = "none";

                return () => {
                    scope.current.revert();
                };

            });

            $boat.style.display = "flex"
        }

        root.current.addEventListener("click", click);

        return () => {
            // root.current.removeEventListener("click", click);
        };

    }, []);

    return (
        <div className="sun" ref={root}>
            <div className="sun__shape" cursor="pointer"></div>
        </div>
    );
}