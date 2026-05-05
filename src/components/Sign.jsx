import "./Sign.scss"
import { useRef, useEffect } from "react";
import { createScope, utils, animate, createTimeline } from "animejs";
import { useNavigate } from "react-router";
import { NavigateWrapper } from "./NavigateWrapper";

export function Sign() {

    const root = useRef(null);
    const scope = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {

        function click() {

            const $cat = document.getElementById("normalCat2");

            scope.current = createScope({ root }).add(self => {

                animate(root.current, {
                    y: "500%",
                    duration: 3000,
                    ease: 'in',
                    delay: 100,
                });

                root.current.style.pointerEvents = "none";

                setTimeout(() => {
                    document.getElementById("signGlow").style.display = "flex";
                }, 11000);

                setTimeout(() => {
                    navigate("/end");
                }, 15000);

                return () => {
                    scope.current.revert();
                };

            });

            $cat.style.display = "flex"
        }

        root.current.addEventListener("click", click);

        return () => {
            // root.current.removeEventListener("click", click);
        };

    }, []);

    return (
        <div className="sign" ref={root} cursor="pointer"></div>
    );
}