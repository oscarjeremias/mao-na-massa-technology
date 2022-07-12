export function MenuDesktop() {
    return (
        <ol className="hidden w-3/4 text-xs lg:w-1/2 lg:text-sm md:flex justify-center items-center gap-3">
        <li className="px-6 py-2 hover:bg-white hover:text-blue-900 rounded">
            <a href="#quem-nos-somos">
            Quem nós somos
            </a>
        </li>
        <li className="px-6 py-2 hover:bg-white hover:text-blue-900 rounded">
            <a href="#nossos-servicos">
            Nossos serviços
            </a>
        </li>
        <li className="px-6 py-2 hover:bg-white hover:text-blue-900 rounded">
             <a href="#o-que-queremos">
                O quẽ queremos
             </a>
        </li>
        <li className="px-6 py-2 hover:bg-white hover:text-blue-900 rounded">
            <a href="#contactos">
            Contactos
            </a>
        </li>
     </ol>
    )
}