import "./ContainerFrame.scss"
import { useEffect, useState } from "react";

export function ContainerFrame({ children }) {

    let noiseSeed = 0;
    const [noise, setNoise] = useState(noiseSeed)

    useEffect(() => {
        setInterval(()=>{
            ++noiseSeed;            
            setNoise(noiseSeed);
        }, 100)

    }, []);

    return (
        <div className="containerFrame" id="container">
            {children}
            <svg className="containerFrame__filter">
                <defs>
                    <filter id="effect">
                        <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="3" result="noise" seed={noise}></feTurbulence>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
                    </filter>
                </defs>
            </svg>
        </div>
    );
}