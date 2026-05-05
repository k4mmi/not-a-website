import "./NormalCat.scss"
import { createDraggable } from "animejs";
import { createScope, utils, animate } from "animejs";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router";


export function NormalCat() {

    const root = useRef(null);
    const scope = useRef(null);
    const navigate = useNavigate();

    const [texture, setTexture] = useState("/cat/cat.webp");

    useEffect(() => {

        root.current.addEventListener("click", click);

        function click() {

            scope.current = createScope({ root }).add(self => {

                animate(root.current, {
                    filter: "blur(100px)",
                    duration: 3200,
                    ease: 'in',
                    delay: 5000,
                });

                animate(".normalCat__yellow", {
                    opacity: 0,
                    duration: 2000,
                    ease: 'in',
                });

                root.current.style.pointerEvents = "none";

                setTimeout(() => {
                    document.getElementById("catGlow").style.display = "flex";
                }, 6500);

                setTimeout(() => {
                    navigate("/blue");
                }, 9000);

                return () => {
                    scope.current.revert();
                };

            });
        }
        
    }, []);


    return (
        <div className="normalCat" cursor="pointer" ref={root}>
            <div className="normalCat__sky" cursor="pointer"></div>
            <div className="normalCat__yellow" cursor="pointer"></div>
        </div>
    );
}
