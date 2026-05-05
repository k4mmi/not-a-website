import { Background } from "../components/Background";
import { Door } from "../components/Door";
import { Dots } from "../components/Dots";
import "./DoorPortal.scss"
import { GlowOut } from "../components/GlowOut";

export function DoorPortal() {
    return (
        <div className="doorPortal">
            <Dots top="23" left="-5" />
            <Background src="/not-a-website/landscape.webp"/>
            <Dots top="55" left="85" />
            <Door />
            <GlowOut color="#8f8c89" />
        </div>
    );
}