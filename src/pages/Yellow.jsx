
import "./Yellow.scss"
import { NormalCat } from "../components/NormalCat";
import { Dots } from "../components/Dots";
import { Background } from "../components/Background";
import { GlowOut } from "../components/GlowOut"
import { GlowIn } from "../components/GlowIn";

export function Yellow() {
    return (
        <div className="yellow" id="yellow">
            <Dots top="30" left="-5" />
            <Background src="/not-a-website/landscape2.webp" />
            <NormalCat />
            <GlowOut color="#FFFF00" />
            <Dots top="50" left="85" />
            <GlowIn id="catGlow" color="#FFF" />
        </div>
    );
}