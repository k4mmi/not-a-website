import { Background } from "../components/Background";
import { Boat } from "../components/Boat";
import { GlowOut } from "../components/GlowOut";
import { Dots } from "../components/Dots";
import { Sun } from "../components/Sun";
import "./Sky.scss"

export function Sky() {
    return (
        <div className="sky">
            <GlowOut />
            <Sun />
            <Boat />
            <Dots top="30" left="85" />
            <Background src="/not-a-website/sea.webp" />
            <Dots top="80" left="20" />
            <Dots top="10" left="-5" />
        </div>
    );
}