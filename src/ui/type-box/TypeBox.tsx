import "./type-box.css";

export default function TypeBox({ image, text, isActive }: TypeBoxProp) {
    return (
        <>
            <div className={`type-box-base ${isActive ? "active" : ""}`}>
                <div className="img-wrapper">
                    {image}
                </div>
                <div className="type-box-title">{text}</div>
            </div>
        </>
    )
}

interface TypeBoxProp {
    text: string,
    image: React.ReactNode,
    isActive: boolean
}