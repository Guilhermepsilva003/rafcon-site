"use client";

import { useState, useEffect } from "react";

const depoimentos = [
  {
    texto: "A Rafcon transformou a gestão do nosso condomínio. As prestações de contas chegam pontualmente todo mês e sempre que precisamos de suporte, somos atendidos com rapidez e clareza.",
    nome: "Carlos Mendonça",
    cargo: "Síndico — Condomínio Residencial, Boa Viagem",
  },
  {
    texto: "Depois de anos com problemas de inadimplência e desorganização financeira, contratamos a Rafcon e a diferença foi imediata. Profissionalismo e transparência em cada etapa.",
    nome: "Maria Lúcia Ferreira",
    cargo: "Síndica — Condomínio Empresarial, Graças",
  },
  {
    texto: "O que mais valorizo é o atendimento próximo. Não somos apenas mais um cliente — sentimos que a equipe realmente conhece o nosso condomínio e se preocupa com os resultados.",
    nome: "Roberto Alves",
    cargo: "Síndico — Condomínio Residencial, Paulista",
  },
  {
    texto: "O treinamento oferecido pela Rafcon foi excelente. Conteúdo claro, instrutores preparados e muito aplicável ao dia a dia. Uma empresa que investe nas pessoas.",
    nome: "Fernanda Lima",
    cargo: "Participante de treinamento — Equipe condominial",
  },
  {
    texto: "Administrar um condomínio comercial tem suas particularidades e a Rafcon entende isso. Sempre disponíveis e com respostas precisas quando precisamos.",
    nome: "André Souza",
    cargo: "Síndico — Condomínio Comercial, Camaragibe",
  },
  {
    texto: "A capacitação que recebi foi muito bem estruturada. Aprendi processos que aplico diretamente no trabalho. Fica claro que a Rafcon valoriza a qualificação das equipes.",
    nome: "Juliana Moraes",
    cargo: "Participante de treinamento — Gestão condominial",
  },
];

export default function Depoimentos() {
  const [atual, setAtual] = useState(0);
  const visiveis = 3;
  const total = depoimentos.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setAtual((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const indices = [atual, (atual + 1) % total, (atual + 2) % total];

  return (
    <section
      style={{
        backgroundColor: "var(--background)",
        padding: "80px 24px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "52px" }}>
          <span style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            color: "var(--accent)",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "14px",
          }}>
            O que dizem sobre a Rafcon
          </span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 700,
            color: "var(--primary)",
            lineHeight: 1.2,
            maxWidth: "480px",
            letterSpacing: "-0.3px",
          }}>
            A confiança de quem trabalha com a gente.
          </h2>
        </div>

        {/* Carrossel desktop — 3 visíveis */}
        <div className="depoimentos-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {indices.map((i) => {
            const d = depoimentos[i];
            return (
              <div key={i} style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(21,46,77,0.08)",
                borderRadius: "14px",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}>
                <div>
                  <div style={{ fontSize: "28px", color: "var(--accent)", lineHeight: 1, marginBottom: "16px", fontFamily: "Georgia,serif" }}>&ldquo;</div>
                  <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8 }}>{d.texto}</p>
                </div>
                <div style={{ borderTop: "1px solid rgba(21,46,77,0.08)", paddingTop: "18px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--primary)", marginBottom: "4px" }}>{d.nome}</p>
                  <p style={{ fontSize: "12px", color: "#888" }}>{d.cargo}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carrossel mobile — 1 visível */}
        <div className="depoimentos-mobile" style={{ display: "none" }}>
          {(() => {
            const d = depoimentos[atual];
            return (
              <div style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(21,46,77,0.08)",
                borderRadius: "14px",
                padding: "32px 24px",
              }}>
                <div style={{ fontSize: "28px", color: "var(--accent)", lineHeight: 1, marginBottom: "16px", fontFamily: "Georgia,serif" }}>&ldquo;</div>
                <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, marginBottom: "24px" }}>{d.texto}</p>
                <div style={{ borderTop: "1px solid rgba(21,46,77,0.08)", paddingTop: "18px" }}>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--primary)", marginBottom: "4px" }}>{d.nome}</p>
                  <p style={{ fontSize: "12px", color: "#888" }}>{d.cargo}</p>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Indicadores */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => setAtual(i)}
              aria-label={"Depoimento " + (i + 1)}
              style={{
                width: i === atual ? "24px" : "8px",
                height: "8px",
                borderRadius: "100px",
                backgroundColor: i === atual ? "var(--accent)" : "rgba(21,46,77,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
