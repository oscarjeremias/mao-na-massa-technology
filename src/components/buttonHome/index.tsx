import seta from "../../assests/seta.png"

export function ButtonHome() {
    return (
        <a href="#home" className="nav fixed bottom-10 right-5 p-4 rounded hover:bg-white hover:text-blue-900">
            <img src={seta.src} alt="seta" width={20}/>
        </a>
    )
}