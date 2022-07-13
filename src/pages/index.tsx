import React from "react";
import { Layout } from "../components/layout"
import { Header } from "../components/header"
import { Main } from "../components/main"
import { Footer } from "../components/footer"
import Head from "next/head";
import logo from "../assests/logo.png"
import { Seo } from "../components/seo"

function App() {
    return (
        <>
        <Head>
            <meta name="description" content="Nós somos a empresa Mão na Massa Technology uma empresa que veio para o mercado, para entregar soluções tecnológicas rapidas e eficientes para todos com preços maravilhosos."/>
            <meta name="tag" content=""/>
            <link rel="icon" type="image/x-icon" href={logo.src}></link>
            <title>Mão na Massa Technology</title>
        </Head>
        <Seo />
        <Layout>
            <Header />
            <Main />
            <Footer />
        </Layout>
        </>
    )
}

export default App