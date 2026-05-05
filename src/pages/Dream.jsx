import { Dots } from "../components/Dots";
import { Boat2 } from "../components/Boat2";
import { Hole } from "../components/Hole";
import "./Dream.scss"

export function Dream() {
    return (
        <div className="dream">
            <Dots top="10" left="85" />
            <Hole />
            <Boat2 />
            <Dots top="60" left="-5" />
        </div>
    );
}