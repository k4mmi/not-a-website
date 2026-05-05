
import "./Blue.scss"
import { NormalCat2 } from "../components/NormalCat2";
import { Background } from "../components/Background";
import { GlowOut } from "../components/GlowOut"
import { Dots } from "../components/Dots";
import { Sign } from "../components/Sign";
import { GlowIn } from "../components/GlowIn";

export function Blue() {
    return (
        <div className="blue">
            <Dots top="23" left="80" />
            <Background src="/not-a-website/landscape2.webp" />
            <NormalCat2 />
            <Sign />
            <Dots top="80" left="-0" />
            <GlowIn id="signGlow" color="#4b99da" />
            <GlowOut color="#ffffff" />
        </div >
    );
}