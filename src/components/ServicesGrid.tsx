import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { services } from "@/lib/data";

export function ServicesGrid({
  showCta = true,
  limit,
}: {
  showCta?: boolean;
  limit?: number;
}) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Nossos serviços"
            title="Contabilidade completa para o seu negócio"
            subtitle="Serviços contábeis e empresariais para acompanhar cada etapa da sua empresa."
          />
          {showCta && (
            <Button href="/servicos" variant="primary" className="shrink-0">
              Conheça todos os serviços
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <div
              key={service.slug}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/30 hover:shadow-[0_8px_30px_-12px_rgba(6,48,79,0.18)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/65">
                {service.description}
              </p>
              <Link
                href={`/servicos#${service.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors group-hover:text-gold"
              >
                Saiba mais
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
