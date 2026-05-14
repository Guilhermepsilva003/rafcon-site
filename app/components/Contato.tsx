// Contato.tsx

import { Mail } from "lucide-react";

const WHATSAPP = "https://wa.me/5581988766461";

const EMAIL = "mailto:rafcon@rafcon.com.br";

const MAPS =
  "https://maps.google.com/maps?q=R.%20Guilherme%20Pinto,%20146,%20Recife&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function Contato() {
  return (
    <>
      <section
        id="contato"
        style={{
          backgroundColor: "var(--primary)",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            className="contato-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "56px",
              alignItems: "start",
            }}
          >
            {/* ESQUERDA */}
            <div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "14px",
                }}
              >
                Fale conosco
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 700,
                  color: "var(--text-light)",
                  lineHeight: 1.2,
                  marginBottom: "22px",
                  letterSpacing: "-0.3px",
                  maxWidth: "480px",
                }}
              >
                Pronto para conhecer a{" "}
                <span style={{ color: "var(--accent)" }}>
                  Rafcon?
                </span>
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(245,242,238,0.62)",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                  maxWidth: "480px",
                }}
              >
                Entre em contato e converse diretamente com nossa equipe.
              </p>

              {/* BOTÕES */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "42px",
                  maxWidth: "420px",
                }}
              >
                {/* WHATS */}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "var(--accent)",
                    color: "var(--primary)",
                    padding: "16px 22px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  Falar no WhatsApp
                </a>

                {/* EMAIL */}
                <a
                  href={EMAIL}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    backgroundColor: "transparent",
                    color: "var(--text-light)",
                    padding: "16px 22px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: 600,
                    border: "1px solid rgba(245,242,238,0.16)",
                  }}
                >
                  <Mail size={18} />
                  Nos envie um e-mail
                </a>
              </div>

              {/* INFOS */}
              <div
                style={{
                  borderTop: "1px solid rgba(204,154,97,0.12)",
                  paddingTop: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "26px",
                }}
              >
                {/* ENDEREÇO */}
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Endereço
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(245,242,238,0.58)",
                      lineHeight: 1.8,
                    }}
                  >
                    Galeria Capunga Center — R. Guilherme Pinto, 146 Sl 113/115
                    <br />
                    Graças, Recife — PE · CEP 52011-210
                  </p>
                </div>

                {/* FIXO */}
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Telefone fixo
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(245,242,238,0.58)",
                    }}
                  >
                    (81) 3129-9537
                  </p>
                </div>

                {/* WHATS */}
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    WhatsApp
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(245,242,238,0.58)",
                    }}
                  >
                    (81) 9 8876-6461
                  </p>
                </div>
              </div>
            </div>

            {/* DIREITA */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {/* MAPA */}
              <div
                className="contato-mapa"
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid rgba(204,154,97,0.12)",
                  height: "300px",
                }}
              >
                <iframe
                  src={MAPS}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display: "block",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Rafcon"
                />
              </div>

              {/* CARD INFERIOR */}
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(204,154,97,0.12)",
                  borderRadius: "14px",
                  padding: "28px",
                }}
              >
                {/* REDES */}
                <div style={{ marginBottom: "28px" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "18px",
                      textAlign: "center",
                    }}
                  >
                    Redes sociais
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href="https://www.instagram.com/rafconadm"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "12px 18px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "rgba(245,242,238,0.82)",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Instagram
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rafconadm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "12px 18px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "rgba(245,242,238,0.82)",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      LinkedIn
                    </a>

                    <a
                      href="https://www.facebook.com/rafconadm"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "12px 18px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "rgba(245,242,238,0.82)",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                {/* DIVISOR */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "rgba(204,154,97,0.12)",
                    marginBottom: "28px",
                  }}
                />

                {/* HORÁRIO */}
                <div>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    Horário de atendimento
                  </p>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(245,242,238,0.58)",
                      lineHeight: 1.8,
                      textAlign: "center",
                    }}
                  >
                    Segunda a Sexta-feira
                    <br />
                    de 09:00h às 17:00h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#0d1e30",
          padding: "28px 24px",
          borderTop: "1px solid rgba(204,154,97,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(245,242,238,0.3)",
            }}
          >
            © {new Date().getFullYear()} Rafcon Administração &
            Contabilidade. Todos os direitos reservados.
          </p>

          <p
            style={{
              fontSize: "13px",
              color: "rgba(245,242,238,0.3)",
            }}
          >
            CNPJ 33.629.582/0001-29 · Recife, PE
          </p>
        </div>
      </footer>
    </>
  );
}