import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Fadein() {
    return <div class="fadein">
        <img src="/assets/circle.svg" style={{ width: "10rem" }} />
    </div>;
}

function NavBar() {
    
    const links = [
        ["/", "home"],
        ["/product", "product"],
        ["/about", "about"],
        ["/contact", "contact"],
    ];

    return <section class="home-bottom" style={{ display: "grid", alignItems: "center", paddingBottom: "1rem", borderBottom: "2px solid var(--fg)" }}>
        <a href="/" style={{ textDecoration: "none", justifySelf: "start" }}>
            <div style={{ display: "grid", gridAutoFlow: "column", gap: "1rem", alignItems: "center" }}>
                    <img src="/assets/leaf2.svg" style={{ width: "1rem", marginLeft: "1rem" }} />
                    <p style={{ fontSize: "2rem" }}> fios </p>
            </div>
        </a>
        <p style={{ fontSize: "1rem", paddingTop: ".4rem" }}>
            /fʲɨsˠ/ <span style={{ fontSize: "0.7rem", fontWeight: 600 }}>IRISH</span> • <strong>m</strong> <em>(genitive singular feasa)</em> • knowledge, information
        </p>
        <nav style={{ display: "flex", gap: "0.6rem 2.4rem", justifySelf: "end", flexWrap: "wrap", justifyContent: "end" }}>
            { links.map( ([path, label]) =>
                window.location.pathname === path
                    ? <p style={{ color: "white" }}> { label } </p>
                    : <p><a href={ path }> { label } </a></p>
            ) }
        </nav>
    </section>
}

function Page({ children }) {
    return <main style={{ width: "100vw", minHeight: "100svh", display: "grid", padding: "3rem 3rem 2rem", gap: "1rem", gridTemplateRows: "1fr max-content" }}>
        <div style={{ gridRow: 1, gridColumn: 1, display: "grid" }}>
            { children }
        </div>
        <NavBar />
    </main>
}

export function Home() {
    return <>
        <Fadein />
        <Page>
            <div style={{ width: "100%", height: "100%", backgroundImage: 'url("/assets/background2x.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </Page>
    </>
}

export function Contact() {
    return <Page>
        <div style={{ display: "grid", justifyContent: "center", alignContent: "center", alignItems: "center", gap: "0.6rem", gridAutoFlow: "column" }}>
            <img src="/assets/envelope.svg" style={{ width: "1.7rem" }}/>
            <p style={{ fontSize: "1.5rem" }}><a href="mailto:oscar@boikot.xyz"> oscar@boikot.xyz </a></p>
        </div>
    </Page>;
}

export function Product() {
    return <Page>
        <div style={{ display: "grid", alignContent: "center", justifySelf: "center", maxWidth: "70rem" }}>
            <p> knowledgebase collation </p>
            <p> system design and evaluation </p>
            <p> deployment and maintenance </p>
            <p> integrations </p>
        </div>
    </Page>;
}

export function About() {
    return <Page>
        <div style={{ display: "grid", alignContent: "center", justifySelf: "center", maxWidth: "70rem", gap: "1rem" }}>
            <h1 style={{ marginBottom: "1rem" }}> We are a small team building tools and models to empower researchers in the present and future. </h1>
            <p> Discovering and communicating the truth is a uniquely human activity that will continue to be vital to our societies. As the volume and
                detail demanded from researchers continues to rise, alongside misinformation and noise, new tooling is needed to answer the
                toughest queries. </p>
            <p> We have deep experience in data mining, search, and AI systems. Having honed our techniques on our own problems, we are
                now opening our platform for general use. </p>
            <span style={{ height: "1rem" }} />
            <p style={{ marginBottom: "4rem" }}> <strong>Oscar Saharoy</strong> | <em> Cambridge, Five AI, Meta </em></p>
        </div>
    </Page>;
}

