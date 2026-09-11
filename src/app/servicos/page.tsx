import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Serviços Contábeis",
  description:
    "Conheça os serviços contábeis, fiscais, trabalhistas e empresariais da ContMav Contabilidade em São José dos Campos.",
};

export default function ServicosPage() {
  return (
    <>
      <section className="bg-navy-dark py-16 sm:py-20">
        <Container>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
            Serviços
          </p>
          <h1 className="balance max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contabilidade completa para o seu negócio
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Serviços contábeis e empresariais para acompanhar cada etapa da
            sua empresa, do MEI à consultoria estratégica.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Icon name={service.icon} className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-base font-semibold text-navy-dark">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-graphite/65">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-gray-50 p-10 text-center sm:p-12">
            <h2 className="balance max-w-lg text-2xl font-bold text-navy-dark sm:text-3xl">
              Não sabe por onde começar?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-graphite/65 sm:text-base">
              Faça o pré-diagnóstico gratuito e receba uma orientação
              personalizada para o seu momento.
            </p>
            <Button href="/pre-diagnostico" variant="primary" className="mt-2">
              Fazer pré-diagnóstico gratuito
            </Button>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
