import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PreDiagnosticoForm } from "@/components/PreDiagnosticoForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pré-diagnóstico gratuito",
  description:
    "Faça o pré-diagnóstico gratuito da ContMav Contabilidade e descubra as principais necessidades contábeis, fiscais e trabalhistas do seu negócio.",
};

export default function PreDiagnosticoPage() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
            Pré-diagnóstico gratuito
          </p>
          <h1 className="balance text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
            Antes de falar sobre contabilidade, vamos entender o seu negócio.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-graphite/70 sm:text-lg">
            Responda algumas perguntas rápidas para identificarmos suas
            principais necessidades.
          </p>
        </div>

        <PreDiagnosticoForm />

        <p className="mx-auto mt-8 max-w-lg text-center text-xs text-graphite/50">
          Ao enviar, você será direcionado ao WhatsApp da {siteConfig.shortName}{" "}
          com um resumo das suas respostas para continuar o atendimento.
        </p>
      </Container>
    </section>
  );
}
