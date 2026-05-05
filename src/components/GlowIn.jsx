import "./GlowIn.scss"

export function GlowIn({color = "#FFF", id = ""}) {
    return (
        <div className="glowIn" id={id}>
            <div className="glowIn__color" style={{background: color}}></div>
        </div>
    );
}