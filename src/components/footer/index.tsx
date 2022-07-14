import phone from "../../assests/phone.png"
import email from "../../assests/email.png"
import instagram from "../../assests/instagram.png"
import facebook from "../../assests/facebook.png"
import linkden from "../../assests/linkden.png"

export function Footer() {
    return (
        <footer id="contactos" className="footer p-4">
            <ol className="my-4 flex flex-col gap-6">
                <li className="p-2 flex items-center gap-2 hover:bg-white hover:text-blue-900 rounded">
                    <img src={phone.src} alt="icone de telefone" width={30}/>
                    <span>946 703 116 / 937 764 011 / 944 757 305</span>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-white hover:text-blue-900 rounded">
                    <img src={email.src} alt="icone do email" width={30}/>
                    <a href="mailto:maonamassatechnology@gmail.com" rel="noreferrer" target="_blank">maonamassatechnology@gmail.com</a>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-white hover:text-blue-900 rounded">
                    <img src={instagram.src} alt="icone do instagram" width={30}/>
                    <a href="https://www.instagram.com/maonamassatechnology/" rel="noreferrer" target="_blank">Instagram</a>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-white hover:text-blue-900 rounded">
                    <img src={facebook.src} alt="icone do facebook" width={30}/>
                    <a href="https://web.facebook.com/M%C3%A3o-na-Massa-Technology-106680622114480" rel="noreferrer" target="_blank">Facebook</a>
                </li>
                <li className="p-4 flex items-center gap-2 hover:bg-white hover:text-blue-900 rounded">
                    
                    <img src={linkden.src} alt="icone do linkedin" width={30}/>
                    <a href="https://www.linkedin.com/company/m%C3%A3o-na-massa-tecnology/" rel="noreferrer" target="_blank">linkedin</a>
                </li>
            </ol>
            <p className="font-thin text-center my-4">
            © 2022 Mão na Massa Technology, OJ PROJECTS
            </p>
        </footer>
    )
}