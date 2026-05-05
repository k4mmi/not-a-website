import "./GlowOut.scss"

export function GlowOut({color = "#FFF", id = ""}) {
    return (
        <div className="glowOut" id={id}>
            <div className="glowOut__color" style={{background: color}}></div>
        </div>
    );
}