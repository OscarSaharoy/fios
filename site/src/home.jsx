import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export function Home() {
    return <main style={{ width: "100vw", height: "100vh", display: "grid", padding: "2rem", gap: "1rem", gridTemplateRows: "1fr max-content" }}>
        <div style={{ justifySelf: "stretch", alignSelf: "stretch", gridRow: 1, gridColumn: 1, display: "grid" }}>
            <img src="/assets/background2x.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <section style={{ display: "grid", justifyContent: "space-between", gridAutoFlow: "column", alignItems: "center" }}>
            <div style={{ display: "grid", gridAutoFlow: "column", gap: "1rem", alignItems: "center" }}>
                <p style={{ fontSize: "2rem" }}> fios </p>
                <p style={{ fontSize: "1rem", paddingTop: ".4rem" }}> /fʲɨsˠ/ <strong>m</strong> <em>(genitive singular feasa)</em> • knowledge, information </p>
            </div>
            <div style={{ display: "grid", gridAutoFlow: "column", gap: "3rem" }}>
                <p><a href="/"> product </a></p>
                <p><a href="/"> about </a></p>
                <p><a href="/"> contact </a></p>
            </div>
        </section>
    </main>
}

