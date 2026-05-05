import "./Boat.scss"
import { useRef, useEffect } from "react";
import { createScope, utils, animate } from "animejs";
import { NavigateWrapper } from "./NavigateWrapper";
import { useNavigate } from "react-router";

export function Boat() {

    const root = useRef(null);
    const scope = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {

        function click() {

            scope.current = createScope({ root }).add(self => {

                animate(root.current, {
                    y: "-300%",
                    x: "100%",
                    rotate: -30,
                    duration: 3200,
                    ease: 'in',
                    delay: 100,
                });


                return () => {
                    scope.current.revert();
                };

            });

            root.current.style.pointerEvents = "none";


            // Navigate to dream
            const timeout = setTimeout(() => {
                navigate("/dream");
            }, 4500);
        }

        root.current.addEventListener("click", click);

    }, []);

    return (
        <div className="boat" id="boat">
            <div className="boat__texture" cursor="pointer" ref={root}></div>
        </div>
    );
}