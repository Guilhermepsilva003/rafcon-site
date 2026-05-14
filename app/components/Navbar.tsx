"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Servicos", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];
const WHATSAPP = "https://wa.me/5581988766461";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [aberto, setAberto] = useState(false);

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const id = href.replace("#", "");
    setAberto(false);
    scrollTo(id);
  }

  return (
    <header
      style={{
        backgroundColor: "var(--primary)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: "1px solid rgba(204,154,97,0.2)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo — apenas imagem, sem texto */}
        <a
          href="#inicio"
          onClick={(e) => handleNav(e, "#inicio")}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            cursor: "pointer",
            height: "56px",
          }}
        >
          <Image
            src="/logo-rafcon.PNG"
            alt="Rafcon Administração e Contabilidade"
            width={320}
            height={72}
            style={{ objectFit: "contain", height: "250px", width: "auto" }}
            priority
          />
        </a>

        {/* Links desktop */}
        <ul
          className="desktop-menu"
          style={{
            gap: "4px",
            listStyle: "none",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                style={{
                  color: "rgba(245,242,238,0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  letterSpacing: "0.3px",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  display: "block",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(204,154,97,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,242,238,0.7)";
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-cta"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--primary)",
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 600,
            alignItems: "center",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
        >
          Falar no WhatsApp
        </a>

        {/* Hamburguer mobile */}
        <button
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
          className="mobile-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "5px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "5px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "var(--accent)" }} />
        </button>
      </nav>

      {/* Menu mobile expandido */}
      {aberto && (
        <div
          style={{
            backgroundColor: "var(--primary)",
            padding: "16px 24px 24px",
            borderTop: "1px solid rgba(204,154,97,0.15)",
          }}
        >
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              style={{
                display: "block",
                color: "rgba(245,242,238,0.75)",
                textDecoration: "none",
                fontSize: "16px",
                padding: "12px 0",
                borderBottom: "1px solid rgba(204,154,97,0.1)",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              backgroundColor: "var(--accent)",
              color: "var(--primary)",
              padding: "12px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
