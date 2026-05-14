"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = ["Inicio", "Sobre", "Servicos", "Contato"];
const WHATSAPP = "https://wa.me/5581988766461";

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
        borderBottom: "1px solid rgba(204,154,97,0.14)",
        backdropFilter: "blur(10px)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "96px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Link
          href="/#inicio"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <Image
  src="/logo-rafcon.png"
  alt="Rafcon Administração e Contabilidade"
  width={420}
  height={140}
  priority
  style={{
    width: "auto",
    height: "110px",
    objectFit: "contain",
    transform: "scale(2.2)",
    marginLeft: "35px",
  }}
/>
        </Link>

        {/* MENU DESKTOP */}
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
                  color: "rgba(245,242,238,0.72)",
                  textDecoration: "none",
                  fontSize: "14px",
                  letterSpacing: "0.3px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  display: "block",
                  transition: "0.2s",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (
                    e.currentTarget as HTMLAnchorElement
                  ).style.backgroundColor =
                    "rgba(204,154,97,0.10)";

                  (
                    e.currentTarget as HTMLAnchorElement
                  ).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (
                    e.currentTarget as HTMLAnchorElement
                  ).style.backgroundColor = "transparent";

                  (
                    e.currentTarget as HTMLAnchorElement
                  ).style.color =
                    "rgba(245,242,238,0.72)";
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-cta"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--primary)",
            padding: "12px 22px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 700,
            transition: "0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity =
              "0.85";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity =
              "1";
          }}
        >
          Falar no WhatsApp
        </a>

        {/* MOBILE BUTTON */}
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
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "var(--accent)",
              marginBottom: "5px",
            }}
          />

          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "var(--accent)",
              marginBottom: "5px",
            }}
          />

          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "var(--accent)",
            }}
          />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {aberto && (
        <div
          style={{
            backgroundColor: "var(--primary)",
            padding: "16px 24px 24px",
            borderTop: "1px solid rgba(204,154,97,0.12)",
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
                padding: "14px 0",
                borderBottom:
                  "1px solid rgba(204,154,97,0.08)",
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
              padding: "14px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 700,
              textAlign: "center",
              marginTop: "18px",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}