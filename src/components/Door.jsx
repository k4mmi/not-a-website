import "./Door.scss"
import { useRef, useEffect } from "react";
import { createScope, utils, animate, createTimeline } from "animejs";
import { NavigateWrapper } from "./NavigateWrapper";

export function Door() {

    const root = useRef(null);
    const scope = useRef(null);

    let doorAnimationStatus = false;

    useEffect(() => {

        if (doorAnimationStatus === false) {

            doorAnimationStatus = true;
            root.current.addEventListener("mouseover", hover);
        }

        function hover() {

            const $doorTexture = document.getElementById("doorTexture");

            setTimeout(() => {
                $doorTexture.src = "/not-a-website/door/door_stage2.webp"
                setTimeout(() => {
                    $doorTexture.src = "/not-a-website/door/door_stage3.webp"
                    setTimeout(() => {
                        $doorTexture.src = "/not-a-website/door/door_stage4.webp"
                    }, 200);
                }, 200);
            }, 200);

            root.current.removeEventListener("mouseover", hover);

            scope.current = createScope({ root }).add(self => {

                animate(root.current, {
                    scale: 1.15,
                    duration: 250,
                    ease: 'out',
                    delay: 100,
                });


                return () => {
                    scope.current.revert();
                };

            });
        }

        root.current.addEventListener("click", click);

        function click() {
            const $doorGlow = document.getElementById("doorGlow");
            $doorGlow.style.display = "flex";
        }

    }, []);

    return (
        <div className="door" ref={root}>
            <div id="doorGlow" className="door__glow"></div>
            <NavigateWrapper delay={"1000"} page={"/sky"}>
                <img className="door__texture" id="doorTexture" src="/not-a-website/door/door_stage1.webp" alt="Door" draggable="false" />
                <div className="door__background"></div>
            </NavigateWrapper>
        </div>
    );
}