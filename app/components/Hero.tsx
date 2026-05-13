const WHATSAPP = "https://wa.me/5581988766461";
const SUPERLOGICA = "https://superlogica.net/clients/?licenca=rafcon";

const stats = [
  { numero: "50+", label: "Condomínios administrados" },
  { numero: "+7 anos", label: "De experiência no mercado" },
  { numero: "98%", label: "Taxa de retenção de clientes" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        backgroundColor: "var(--primary)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "55%",
          height: "100%",
          background: "radial-gradient(ellipse at top right, rgba(204,154,97,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
        }}
      >
        {/* Layout principal: texto + imagem + stats verticais */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: "40px",
            alignItems: "center",
          }}
          className="hero-layout"
        >
          {/* Coluna 1 — Texto */}
          <div style={{ maxWidth: "520px" }}>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(32px, 4.5vw, 54px)",
                fontWeight: 700,
                color: "var(--text-light)",
                lineHeight: 1.15,
                marginBottom: "24px",
                letterSpacing: "-0.5px",
              }}
            >
              Administração de condomínios com{" "}
              <span style={{ color: "var(--accent)" }}>
                qualidade e proximidade.
              </span>
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(245,242,238,0.65)",
                lineHeight: 1.8,
                marginBottom: "40px",
              }}
            >
              Atuante no mercado desde 2019, a Rafcon cuida da gestão financeira, operacional e
              documental de mais de 50 condomínios em Recife e região
              metropolitana com transparência e atendimento humano.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--primary)",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                Entre em contato
              </a>
              <a
                href={SUPERLOGICA}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--text-light)",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  border: "1px solid rgba(245,242,238,0.2)",
                }}
              >
                Acessar meu condomínio
              </a>
            </div>
          </div>

          {/* Coluna 2 — Imagem */}
          <div
            className="hero-image-col"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              width: "380px",
              height: "420px",
              flexShrink: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
              alt="Condomínio moderno administrado pela Rafcon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Coluna 3 — Stats verticais */}
          <div
            className="hero-stats-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              flexShrink: 0,
            }}
          >
            {stats.map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(204,154,97,0.2)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  textAlign: "center",
                  width: "160px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {item.numero}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(245,242,238,0.55)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats mobile — aparece só em telas pequenas, horizontal */}
        <div
          className="hero-stats-mobile"
          style={{
            display: "none",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {stats.map((item) => (
            <div
              key={item.label}
              style={{
                flex: 1,
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(204,154,97,0.2)",
                borderRadius: "10px",
                padding: "16px 8px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  marginBottom: "4px",
                }}
              >
                {item.numero}
              </div>
              <div style={{ fontSize: "10px", color: "rgba(245,242,238,0.55)", lineHeight: 1.4 }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
