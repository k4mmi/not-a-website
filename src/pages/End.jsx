
import "./End.scss"
import { GlowOut } from "../components/GlowOut"
import { Dots } from "../components/Dots";
import { GlowIn } from "../components/GlowIn";
import { ButtonAgain } from "../components/ButtonAgain";

export function End() {
    return (
        <div className="end">
            <Dots top="30" left="0" />
            <Dots top="70" left="80" />
            <Dots top="10" left="70" />
            <ButtonAgain />
            <GlowOut color="#4b99da" />
            <GlowIn color="#8f8c89" id="endGlow" />
        </div>
    );
}