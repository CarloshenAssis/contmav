"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site-config";

type FormData = {
  temEmpresa: "sim" | "nao" | "";
  tipoEmpresa: string;
  segmento: string;
  possuiContador: "sim" | "nao" | "";
  satisfacao: "sim" | "parcialmente" | "nao" | "";
  necessidades: string[];
  necessidadeOutro: string;
  nome: string;
  whatsapp: string;
  email: string;
};

const initialData: FormData = {
  temEmpresa: "",
  tipoEmpresa: "",
  segmento: "",
  possuiContador: "",
  satisfacao: "",
  necessidades: [],
  necessidadeOutro: "",
  nome: "",
  whatsapp: "",
  email: "",
};

const tipoEmpresaOptions = [
  "MEI",
  "Empresário Individual",
  "LTDA",
  "Outro",
  "Ainda não tenho empresa",
];

const necessidadeOptions = [
  "Contabilidade",
  "Fiscal",
  "Departamento Pessoal",
  "MEI",
  "Planejamento Tributário",
  "Regularização",
  "Gestão financeira",
  "Abertura/alteração de empresa",
  "Outro",
];

const totalSteps = 4;

function buildWhatsappMessage(data: FormData) {
  const lines = [
    "Olá! Gostaria do meu pré-diagnóstico gratuito. Seguem minhas respostas:",
    "",
    `• Já possui empresa: ${data.temEmpresa === "sim" ? "Sim" : "Não"}`,
  ];

  if (data.tipoEmpresa) lines.push(`• Tipo de empresa: ${data.tipoEmpresa}`);
  if (data.segmento) lines.push(`• Segmento: ${data.segmento}`);

  lines.push(
    `• Já possui contador: ${data.possuiContador === "sim" ? "Sim" : "Não"}`
  );
  if (data.possuiContador === "sim" && data.satisfacao) {
    const satisfacaoLabel =
      data.satisfacao === "sim"
        ? "Sim"
        : data.satisfacao === "parcialmente"
          ? "Parcialmente"
          : "Não";
    lines.push(`• Satisfeito com atendimento atual: ${satisfacaoLabel}`);
  }

  if (data.necessidades.length > 0) {
    lines.push(`• Necessidades: ${data.necessidades.join(", ")}`);
  }
  if (data.necessidadeOutro) {
    lines.push(`• Outro (necessidade): ${data.necessidadeOutro}`);
  }

  lines.push("", `Nome: ${data.nome}`, `WhatsApp: ${data.whatsapp}`);
  if (data.email) lines.push(`E-mail: ${data.email}`);

  return lines.join("\n");
}

export function PreDiagnosticoForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleNecessidade = (value: string) => {
    setData((prev) => {
      const has = prev.necessidades.includes(value);
      return {
        ...prev,
        necessidades: has
          ? prev.necessidades.filter((v) => v !== value)
          : [...prev.necessidades, value],
      };
    });
  };

  const canAdvanceFrom1 = data.temEmpresa !== "" && data.tipoEmpresa !== "";
  const canAdvanceFrom2 =
    data.possuiContador !== "" &&
    (data.possuiContador === "nao" || data.satisfacao !== "");
  const canAdvanceFrom3 = data.necessidades.length > 0;
  const canSubmit =
    data.nome.trim() !== "" && data.whatsapp.trim() !== "";

  const goNext = () => setStep((s) => Math.min(totalSteps, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
    const message = buildWhatsappMessage(data);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-5 text-xl font-bold text-navy-dark">
          Recebemos suas respostas!
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-graphite/65">
          Abrimos o WhatsApp com um resumo do seu pré-diagnóstico. Envie a
          mensagem para que a equipe da ContMav dê continuidade ao seu
          atendimento.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setData(initialData);
          }}
          className="mt-6 text-sm font-semibold text-blue hover:text-gold"
        >
          Preencher novamente
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-medium text-graphite/50">
          <span>
            Etapa {step} de {totalSteps}
          </span>
          <span>{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gold transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-9">
        {step === 1 && (
          <div className="animate-fade-in-up">
            <h2 className="text-lg font-bold text-navy-dark">Sua empresa</h2>
            <div className="mt-6">
              <p className="text-sm font-semibold text-graphite/80">
                Você já possui empresa?
              </p>
              <div className="mt-3 flex gap-3">
                {(["sim", "nao"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => update("temEmpresa", v)}
                    className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors ${
                      data.temEmpresa === v
                        ? "border-navy bg-navy text-white"
                        : "border-gray-300 text-graphite/70 hover:border-navy/40"
                    }`}
                  >
                    {v === "sim" ? "Sim" : "Não"}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="text-sm font-semibold text-graphite/80">
                Tipo de empresa
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {tipoEmpresaOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => update("tipoEmpresa", option)}
                    className={`rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      data.tipoEmpresa === option
                        ? "border-navy bg-navy text-white"
                        : "border-gray-300 text-graphite/70 hover:border-navy/40"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <label className="text-sm font-semibold text-graphite/80">
                Segmento
                <input
                  type="text"
                  value={data.segmento}
                  onChange={(e) => update("segmento", e.target.value)}
                  placeholder="Ex: comércio, serviços, indústria..."
                  className="mt-3 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-graphite outline-none placeholder:text-graphite/40 focus:border-blue"
                />
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in-up">
            <h2 className="text-lg font-bold text-navy-dark">Momento atual</h2>
            <div className="mt-6">
              <p className="text-sm font-semibold text-graphite/80">
                Você já possui contador?
              </p>
              <div className="mt-3 flex gap-3">
                {(["sim", "nao"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => update("possuiContador", v)}
                    className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors ${
                      data.possuiContador === v
                        ? "border-navy bg-navy text-white"
                        : "border-gray-300 text-graphite/70 hover:border-navy/40"
                    }`}
                  >
                    {v === "sim" ? "Sim" : "Não"}
                  </button>
                ))}
              </div>
            </div>

            {data.possuiContador === "sim" && (
              <div className="mt-7">
                <p className="text-sm font-semibold text-graphite/80">
                  Está satisfeito com o atendimento atual?
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {(["sim", "parcialmente", "nao"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => update("satisfacao", v)}
                      className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors ${
                        data.satisfacao === v
                          ? "border-navy bg-navy text-white"
                          : "border-gray-300 text-graphite/70 hover:border-navy/40"
                      }`}
                    >
                      {v === "sim"
                        ? "Sim"
                        : v === "parcialmente"
                          ? "Parcialmente"
                          : "Não"}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in-up">
            <h2 className="text-lg font-bold text-navy-dark">Necessidades</h2>
            <p className="mt-2 text-sm text-graphite/60">
              Selecione tudo o que for relevante para o seu momento.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {necessidadeOptions.map((option) => {
                const checked = data.necessidades.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleNecessidade(option)}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                      checked
                        ? "border-navy bg-navy/5 text-navy-dark"
                        : "border-gray-300 text-graphite/70 hover:border-navy/40"
                    }`}
                  >
                    <span
                      className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border ${
                        checked ? "border-navy bg-navy" : "border-gray-400"
                      }`}
                    >
                      {checked && (
                        <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 13 4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
            {data.necessidades.includes("Outro") && (
              <input
                type="text"
                value={data.necessidadeOutro}
                onChange={(e) => update("necessidadeOutro", e.target.value)}
                placeholder="Conte um pouco mais..."
                className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-graphite outline-none placeholder:text-graphite/40 focus:border-blue"
              />
            )}
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-in-up">
            <h2 className="text-lg font-bold text-navy-dark">Seus dados</h2>
            <p className="mt-2 text-sm text-graphite/60">
              Última etapa. Vamos enviar seu pré-diagnóstico pelo WhatsApp.
            </p>
            <div className="mt-6 space-y-4">
              <label className="block text-sm font-semibold text-graphite/80">
                Nome
                <input
                  type="text"
                  value={data.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  placeholder="Seu nome completo"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-normal text-graphite outline-none placeholder:text-graphite/40 focus:border-blue"
                />
              </label>
              <label className="block text-sm font-semibold text-graphite/80">
                WhatsApp
                <input
                  type="tel"
                  value={data.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  placeholder="(12) 90000-0000"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-normal text-graphite outline-none placeholder:text-graphite/40 focus:border-blue"
                />
              </label>
              <label className="block text-sm font-semibold text-graphite/80">
                E-mail
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="seu@email.com"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-normal text-graphite outline-none placeholder:text-graphite/40 focus:border-blue"
                />
              </label>
            </div>
          </div>
        )}

        <div className="mt-9 flex items-center justify-between border-t border-gray-100 pt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1}
            className="text-sm font-semibold text-graphite/60 transition-opacity hover:text-navy-dark disabled:opacity-0"
          >
            Voltar
          </button>

          {step < totalSteps ? (
            <button
              type="button"
              onClick={goNext}
              disabled={
                (step === 1 && !canAdvanceFrom1) ||
                (step === 2 && !canAdvanceFrom2) ||
                (step === 3 && !canAdvanceFrom3)
              }
              className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              Próximo
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              Quero meu pré-diagnóstico
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
