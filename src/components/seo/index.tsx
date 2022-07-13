import { NextSeo } from "next-seo"
import pub from "../../assests/pub.png"

export function Seo() {
    return <NextSeo 
    title="Mão na Massa Tecnology"
    description="Nós somos a empresa Mão na Massa Technology uma empresa que veio para o mercado, para entregar soluções tecnológicas rapidas e eficientes para todos com preços maravilhosos."
    canonical="https://mao-na-massa-technology.vercel.app/"
    openGraph={{
        url: "https://mao-na-massa-technology.vercel.app/",
        title: "Mão na Massa Technology",
        description: "Nós somos a empresa Mão na Massa Technology uma empresa que veio para o mercado, para entregar soluções tecnológicas rapidas e eficientes para todos com preços maravilhosos.",
        images: [{
            url:pub.src,
            width: 800,
            height: 600,
            alt: 'image',
            type: 'image/jpeg',
        }],site_name: 'Mão na Massa Technology',
        }}
        twitter={{ 
            handle: '@oscarjeremias3', 
            site: "https://mao-na-massa-technology.vercel.app/",
            cardType: pub.src,
        }} />
}