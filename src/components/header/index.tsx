import { useState } from "react"
import { Menu } from "../menu"
import { MenuActive } from "../menuActive"
import { MenuDesktop } from "../menuDesktop"
import logo from "../../assests/logo.png"

export function Header() {
    const [menuActive, setMenuActive] = useState<boolean>(false)
    return (
        <header id="home" className="header z-30 flex justify-between items-center p-4">
            <div>
                <img src={logo.src} width="170px" className="mb-4" alt="logo Mão na Massa Technology"/>
            </div>
                <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
                {
                    menuActive && <MenuActive menuActive={menuActive} setMenuActive={setMenuActive} />
                }
                <MenuDesktop />
                
        </header>
    )
}