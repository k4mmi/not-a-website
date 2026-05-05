import "./Background.scss"
import { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";

export function Background({ src = "none" }) {

    const root = useRef(null);
    const scope = useRef(null);

    let isChanged = false;

    useEffect(() => {

        const frame = root.current;

        const onMouseMove = e => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const X = event.clientX;
            const Y = event.clientY;
            const framePosX = frame.getBoundingClientRect().left;
            const framePosY = frame.getBoundingClientRect().top;
            const frameHeight = frame.offsetHeight;
            const frameWidth = frame.offsetWidth;

            const distanceY = (Y - (framePosY + (frameHeight / 2)));

            if (768 <= windowWidth && distanceY <= 800 && distanceY >= -800) {
                scope.current = createScope({ root }).add(self => {

                    const animation = animate(root.current, {
                        x: (X - (framePosX + (frameWidth / 2))) / 30,
                        y: (Y - (framePosY + (frameHeight / 2))) / 30,
                        duration: 2000,
                        ease: 'outElastic(3, 1)',
                        loop: false,
                        autoplay: true,
                        onComplete: self => isChanged = true,
                    });
                });
                return () => {
                    scope.current.revert();
                };
            } else if (isChanged === true) {
                scope.current = createScope({ root }).add(self => {
                    const animation = animate(root.current, {
                        x: 0,
                        y: 0,
                        duration: 2000,
                        ease: 'outElastic(3, 1)',
                        loop: false,
                        autoplay: true,
                    });
                });
                return () => {
                    scope.current.revert();
                };
                isChanged = false;
            }
        }


        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };

    }, []);

    return (
        <div className="background" ref={root}>
            <div id="backgroundImage" className="background__image" style={{backgroundImage: `url(${src})`}}></div>
        </div>
    );
}