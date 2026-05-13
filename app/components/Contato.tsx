const WHATSAPP = "https://wa.me/5581988766461";
const SUPERLOGICA = "https://superlogica.net/clients/?licenca=rafcon";
const MAPS = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.12!2d-34.9041!3d-8.0563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18b9da8b3b4f%3A0x1!2sR.+Guilherme+Pinto%2C+146+-+Gra%C3%A7as%2C+Recife+-+PE%2C+52011-210!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr";

export default function Contato() {
  return (
    <>
      <section
        id="contato"
        style={{ backgroundColor: "var(--primary)", padding: "80px 24px" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            className="contato-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "72px",
              alignItems: "start",
            }}
          >
            {/* Coluna esquerda */}
            <div>
              <span style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "2px",
                color: "var(--accent)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "14px",
              }}>
                Fale conosco
              </span>

              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 700,
                color: "var(--text-light)",
                lineHeight: 1.2,
                marginBottom: "20px",
                letterSpacing: "-0.3px",
              }}>
                Pronto para conhecer a Rafcon?
              </h2>

              <p style={{
                fontSize: "16px",
                color: "rgba(245,242,238,0.62)",
                lineHeight: 1.8,
                marginBottom: "36px",
                maxWidth: "420px",
              }}>
                Entre em contato e converse diretamente com nossa equipe.
                Atendemos síndicos de condomínios residenciais e comerciais
                em Recife e região metropolitana.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "var(--accent)",
                    color: "var(--primary)",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: 700,
                    width: "100%",
                    maxWidth: "320px",
                    boxSizing: "border-box",
                  }}
                >
                  Falar no WhatsApp
                </a>

                <a
                  href={SUPERLOGICA}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    color: "var(--text-light)",
                    padding: "14px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: 500,
                    border: "1px solid rgba(245,242,238,0.2)",
                    width: "100%",
                    maxWidth: "320px",
                    boxSizing: "border-box",
                  }}
                >
                  Acessar meu condomínio
                </a>
              </div>

              <div style={{
                borderTop: "1px solid rgba(204,154,97,0.15)",
                paddingTop: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--accent)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Endereço</p>
                  <p style={{ fontSize: "14px", color: "rgba(245,242,238,0.55)", lineHeight: 1.7 }}>
                    Galeria Capunga Center — R. Guilherme Pinto, 146 Sl 113/115<br />
                    Graças, Recife — PE · CEP 52011-210
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--accent)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Telefone fixo</p>
                  <p style={{ fontSize: "14px", color: "rgba(245,242,238,0.55)" }}>(81) 3129-9537</p>
                </div>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--accent)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>WhatsApp</p>
                  <p style={{ fontSize: "14px", color: "rgba(245,242,238,0.55)" }}>(81) 9 8876-6461</p>
                </div>
              </div>
            </div>

            {/* Coluna direita — mapa */}
            <div
              className="contato-mapa"
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(204,154,97,0.15)",
                height: "440px",
              }}
            >
              <iframe
                src={MAPS}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Rafcon"
              />
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        backgroundColor: "#0d1e30",
        padding: "28px 24px",
        borderTop: "1px solid rgba(204,154,97,0.1)",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ fontSize: "13px", color: "rgba(245,242,238,0.3)" }}>
            © {new Date().getFullYear()} Rafcon Administradora de Condomínios. Todos os direitos reservados.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(245,242,238,0.3)" }}>
            CNPJ 33.629.582/0001-29 · Recife, PE
          </p>
        </div>
      </footer>
    </>
  );
}
