const servicos = [
  {
    titulo: "Gestão Financeira",
    itens: [
      "Emissão de boletos e cobrança de taxas condominiais",
      "Controle de pagamentos e inadimplências",
      "Previsão orçamentária anual detalhada",
      "Prestação de contas mensal ao síndico",
      "Contabilidade condominial completa",
      "Balancete mensal com demonstrativo claro",
    ],
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <line x1="2" y1="10" x2="22" y2="10"/>
      </svg>
    ),
  },
  {
    titulo: "Gestão Operacional",
    itens: [
      "Inspeção predial administrativa mensal",
      "Gestão e renovação de contratos",
      "Relacionamento com fornecedores",
      "Cotações e contratações especializadas",
      "Organização e arquivamento de documentos",
      "Controle de manutenções preventivas",
    ],
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
  {
    titulo: "Gestão de Pessoas",
    itens: [
      "Gestão completa de RH condominial",
      "Folha de pagamento e encargos sociais",
      "Admissão e demissão de funcionários",
      "Envio de obrigações — RAIS e DIRF",
      "Suporte trabalhista especializado",
      "Controle de férias e benefícios",
    ],
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    titulo: "Assembleias e Comunicação",
    itens: [
      "Elaboração e envio de editais",
      "Convocação formal de assembleias",
      "Apoio em assembleias ordinárias",
      "Apoio em assembleias extraordinárias",
      "Redação de atas e comunicados",
      "Gestão online via portal e aplicativo",
    ],
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    titulo: "Certificação Digital",
    itens: [
      "Emissão de e-CPF para síndicos",
      "Emissão de e-CNPJ para condomínios",
      "Certificado digital em nuvem",
      "Conectividade social ICP-Brasil",
      "Renovação de certificados vencidos",
      "Suporte técnico no processo de emissão",
    ],
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    titulo: "Suporte e Compliance",
    itens: [
      "Assessoria para cumprimento da convenção",
      "Orientação jurídica condominial básica",
      "Apoio em autuações e notificações",
      "Arquivo digital de documentos legais",
      "Suporte em fiscalizações e vistorias",
      "Atendimento direto ao síndico",
    ],
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      style={{
        backgroundColor: "var(--primary)",
        padding: "80px 24px",
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
            O que oferecemos
          </span>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 700,
            color: "var(--text-light)",
            lineHeight: 1.2,
            maxWidth: "520px",
            letterSpacing: "-0.3px",
          }}>
            Serviços completos para a gestão do seu condomínio.
          </h2>
        </div>

        <div
          className="servicos-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "rgba(204,154,97,0.12)",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          {servicos.map((s) => (
            <div
              key={s.titulo}
              style={{
                backgroundColor: "var(--primary)",
                padding: "32px 28px",
              }}
            >
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                backgroundColor: "rgba(204,154,97,0.1)",
                border: "1px solid rgba(204,154,97,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px",
                color: "var(--accent)",
              }}>
                {s.svg}
              </div>

              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--text-light)",
                marginBottom: "18px",
                lineHeight: 1.3,
              }}>
                {s.titulo}
              </h3>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.itens.map((item) => (
                  <li key={item} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "10px",
                  }}>
                    <span style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent)",
                      marginTop: "8px",
                      flexShrink: 0,
                    }}/>
                    <span style={{
                      fontSize: "13.5px",
                      color: "rgba(245,242,238,0.62)",
                      lineHeight: 1.6,
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
