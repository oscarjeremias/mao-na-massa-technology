import { Menu } from "../menu";

interface IMenuActiveProps {
    menuActive: boolean;
    setMenuActive: any
}

export function MenuActive({ menuActive, setMenuActive }: IMenuActiveProps) {
    return (
        <nav className="nav z-30 flex flex-col justify-center bg-blue-900 min-h-screen min-w-full text-white duration-300">
             <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
             <div className="w-[95%] absolute top-20 flex justify-center">
             <ol className="flex flex-col justify-center items-center gap-6">
                <li className="px-6 py-2 hover:bg-white hover:text-blue-900 rounded" onClick={() => setMenuActive(false)}>
                    <a href="#quem-nos-somos">
                    Quem nós somos
                    </a>
                </li>
                <li className="px-6 py-2 hover:bg-white hover:text-blue-900 rounded" onClick={() => setMenuActive(false)}>
                    <a href="#nossos-servicos">
                    Nossos serviços
                    </a>
                </li>
                <li className="px-6 py-2 hover:bg-white hover:text-blue-900 rounded" onClick={() => setMenuActive(false)}>
                     <a href="#o-que-queremos">
                        O quẽ queremos
                     </a>
                </li>
                <li className="px-6 py-2 hover:bg-white hover:text-blue-900 rounded" onClick={() => setMenuActive(false)}>
                    <a href="#contactos">
                    Contactos
                    </a>
                </li>
             </ol>
             </div>
        </nav>
    )

}