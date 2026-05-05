import "./Starting.scss"
import { useRef, useEffect } from "react";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph"

export function Starting() {

    const root = useRef(null);

    useEffect(() => {

        setTimeout(() => {
            root.current.style.pointerEvents = "none"
        }, 1300);

    }, []);

    return (
        <div className="startingContainer">
            <div className="starting" ref={root}>

                <Title>Not a website</Title>
                <Paragraph>Digital surrealism</Paragraph>
            </div>
        </div>
    );
}