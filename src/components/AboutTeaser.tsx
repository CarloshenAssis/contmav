import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export function AboutTeaser() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl order-2 lg:order-1 lg:max-w-none">
            <Image
              src="/images/sentad0namesinha.png"
              alt="Profissional da ContMav Contabilidade em atendimento"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
              Sobre a ContMav
            </p>
            <h2 className="balance text-3xl font-bold tracking-tight text-navy-dark sm:text-4xl">
              Experiência contábil com atendimento próximo.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-graphite/70 sm:text-lg">
              A ContMav atua há {siteConfig.experienceYears} anos no{" "}
              {siteConfig.region}, oferecendo serviços contábeis, fiscais,
              trabalhistas e empresariais para empresas e profissionais.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xl font-bold text-navy-dark">
                  {siteConfig.experienceYears} anos
                </p>
                <p className="text-xs text-graphite/60">de experiência</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xl font-bold text-navy-dark">SJC</p>
                <p className="text-xs text-graphite/60">São José dos Campos</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xl font-bold text-navy-dark">Físico e online</p>
                <p className="text-xs text-graphite/60">atendimento flexível</p>
              </div>
            </div>

            <div className="mt-9">
              <Button href="/sobre" variant="secondary">
                Conheça a ContMav
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
