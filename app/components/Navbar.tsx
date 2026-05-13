"use client";

import { useState } from "react";
import Link from "next/link";

const links = ["Inicio", "Sobre", "Servicos", "Contato"];
const WHATSAPP = "https://wa.me/5581988766461";

function LogoRafcon() {
  return (
    <svg
      width="44"
      height="38"
      viewBox="0 0 44 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Rafcon"
    >
      <rect x="0" y="0" width="44" height="10" rx="2" fill="#CC9A61" />
      <rect x="4" y="2" width="36" height="6" rx="1" fill="#152E4D" />

      <rect x="0" y="14" width="44" height="10" rx="2" fill="#CC9A61" />
      <rect x="4" y="16" width="36" height="6" rx="1" fill="#152E4D" />

      <rect x="0" y="28" width="44" height="10" rx="2" fill="#CC9A61" />
      <rect x="4" y="30" width="36" height="6" rx="1" fill="#152E4D" />
    </svg>
  );
}

export default function Navbar() {
  const [aberto, setAberto] = useState(false);

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
        <Link
          href="/#inicio"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
          }}
        >
          <LogoRafcon />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                color: "var(--text-light)",
                fontSize: "18px",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                letterSpacing: "2px",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              Rafcon
            </span>
            <span
              style={{
                color: "rgba(204,154,97,0.8)",
                fontSize: "9px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                lineHeight: 1,
                fontWeight: 500,
              }}
            >
              Administradora de Condomínios
            </span>
          </div>
        </Link>

        <ul
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "4px",
            listStyle: "none",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((item) => (
            <li key={item}>
              <a
                href={"#" + item.toLowerCase()}
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
                {item}
              </a>
            </li>
          ))}
        </ul>

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
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
        >
          Falar no WhatsApp
        </a>

        <button
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
          className="mobile-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "none",
          }}
        >
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "5px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "5px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "var(--accent)" }} />
        </button>
      </nav>

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
              key={item}
              href={"#" + item.toLowerCase()}
              onClick={() => setAberto(false)}
              style={{
                display: "block",
                color: "rgba(245,242,238,0.75)",
                textDecoration: "none",
                fontSize: "16px",
                padding: "12px 0",
                borderBottom: "1px solid rgba(204,154,97,0.1)",
              }}
            >
              {item}
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
