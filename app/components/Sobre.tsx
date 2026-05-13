export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{
        backgroundColor: "var(--background)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="sobre-grid"
        >
          {/* Coluna esquerda */}
          <div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "2px",
                color: "var(--accent)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Sobre a Rafcon
            </span>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 700,
                color: "var(--primary)",
                lineHeight: 1.2,
                marginBottom: "24px",
                letterSpacing: "-0.3px",
              }}
            >
              Uma administradora construída sobre relacionamento e resultado.
            </h2>

            <p style={{ fontSize: "16px", color: "#4a4a4a", lineHeight: 1.85, marginBottom: "20px" }}>
              A Rafcon nasceu com um propósito claro: oferecer administração condominial com a atenção, a transparência e o comprometimento que muitos condomínios não encontram em grandes administradoras. Há mais de 7 anos no mercado, construímos uma carteira sólida de mais de 50 condomínios em Recife e região metropolitana, sempre priorizando qualidade, credibilidade e relações duradouras em vez de volume.
            </p>

            <p style={{ fontSize: "16px", color: "#4a4a4a", lineHeight: 1.85, marginBottom: "20px" }}>
              Nossa equipe acompanha cada condomínio de perto, atuando com responsabilidade, ética e eficiência em todas as etapas da gestão. Realizamos desde a administração financeira e emissão de boletos até suporte em assembleias, contratos e obrigações trabalhistas, sempre buscando soluções organizadas, seguras e alinhadas às necessidades de cada cliente. O síndico conta com atendimento próximo, suporte ágil e informações claras para uma gestão mais tranquila e eficaz.
            </p>

            <p style={{ fontSize: "16px", color: "#4a4a4a", lineHeight: 1.85 }}>
              Utilizamos a tecnologia como aliada para garantir praticidade, controle e transparência tanto para a administração quanto para os moradores, sem abrir mão do atendimento humano que faz diferença no dia a dia. Trabalhamos continuamente para aprimorar nossos processos e gerar resultados consistentes, mantendo como base valores como legalidade, pontualidade, comprometimento e excelência na prestação dos serviços.
            </p>
          </div>

          {/* Coluna direita — diferenciais */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--primary)",
                marginBottom: "32px",
              }}
            >
              Como trabalhamos
            </h3>

            {[
              {
                titulo: "Prestação de contas mensal",
                descricao: "Balancete detalhado entregue todo mês, sem necessidade de solicitação. O síndico acompanha cada movimentação com clareza.",
              },
              {
                titulo: "Gestão financeira completa",
                descricao: "Emissão de boletos, controle de inadimplência, previsão orçamentária e gestão de contratos em um único lugar.",
              },
              {
                titulo: "Suporte em assembleias e documentos",
                descricao: "Elaboração de editais, atas e comunicados. Apoio direto nas assembleias ordinárias e extraordinárias.",
              },
              {
                titulo: "Equipe especializada em RH condominial",
                descricao: "Gestão de folha de pagamento, encargos e obrigações dos funcionários do condomínio, dentro da legislação vigente.",
              },
              {
                titulo: "Acesso digital para síndicos e moradores",
                descricao: "Documentos, boletos e comunicados acessíveis a qualquer hora, pelo portal ou pelo aplicativo.",
              },
              {
                titulo: "Gestão operacional e fornecedores",
                descricao: "Acompanhamos contratos, cotações, fornecedores e manutenções preventivas para garantir mais organização, economia e eficiência na rotina do condomínio.",
              },
            ].map((item, index, arr) => (
              <div
                key={item.titulo}
                style={{
                  padding: "24px 0",
                  borderTop: "1px solid rgba(21,46,77,0.1)",
                  borderBottom: index === arr.length - 1 ? "1px solid rgba(21,46,77,0.1)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--primary)", marginBottom: "6px", lineHeight: 1.4 }}>
                      {item.titulo}
                    </p>
                    <p style={{ fontSize: "14px", color: "#5a5a5a", lineHeight: 1.7, margin: 0 }}>
                      {item.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
