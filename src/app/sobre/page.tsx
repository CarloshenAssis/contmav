import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Differentials } from "@/components/Differentials";
import { FinalCta } from "@/components/FinalCta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a ContMav Contabilidade: mais de 11 anos de experiência contábil, fiscal, trabalhista e empresarial em São José dos Campos.",
};

export default function SobrePage() {
  return (
    <>
      <section className="bg-navy-dark py-16 sm:py-20">
        <Container>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
            Sobre a ContMav
          </p>
          <h1 className="balance max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Experiência contábil com atendimento próximo.
          </h1>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
              <Image
                src="/images/empenamesa.png"
                alt="Profissional da ContMav Contabilidade"
                fill
                quality={95}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-top"
              />
            </div>

            <div>
              <SectionHeading title="Uma contabilidade pensada para acompanhar o seu negócio de perto." />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-graphite/70 sm:text-lg">
                <p>
                  A ContMav atua há {siteConfig.experienceYears} anos no{" "}
                  {siteConfig.region}, oferecendo serviços contábeis, fiscais,
                  trabalhistas e empresariais para empresas e profissionais.
                </p>
                <p>
                  Com atendimento físico e online em São José dos Campos, a
                  ContMav acompanha empresas, MEIs, profissionais e pessoas
                  físicas em diferentes momentos do negócio — da abertura de
                  CNPJ à consultoria estratégica.
                </p>
                <p>
                  Esse cuidado se reflete na avaliação dos clientes: a
                  ContMav mantém {siteConfig.google.rating} estrelas no
                  Google com {siteConfig.google.reviews} avaliações, muitas
                  delas destacando a agilidade, a transparência e o
                  atendimento próximo da equipe.
                </p>
              </div>

              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-gray-50 p-5">
                  <p className="text-2xl font-bold text-navy-dark">
                    {siteConfig.experienceYears} anos
                  </p>
                  <p className="mt-1 text-xs text-graphite/60">
                    de atuação no {siteConfig.region}
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <p className="text-2xl font-bold text-navy-dark">
                    {siteConfig.google.rating}
                  </p>
                  <p className="mt-1 text-xs text-graphite/60">
                    {siteConfig.google.reviews} avaliações no Google
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5">
                  <p className="text-2xl font-bold text-navy-dark">
                    Físico e online
                  </p>
                  <p className="mt-1 text-xs text-graphite/60">
                    atendimento flexível
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Localização"
                title="Atendimento em São José dos Campos, físico e online."
                subtitle="A ContMav está localizada na Esplanada, em São José dos Campos, e atende clientes de toda a região do Vale do Paraíba presencialmente ou à distância."
              />
              <p className="mt-6 text-sm leading-relaxed text-graphite/70">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}
                <br />
                {siteConfig.address.zip}
              </p>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
              <Image
                src="/images/sentad0namesinha.png"
                alt="Profissional da ContMav Contabilidade em atendimento"
                fill
                quality={95}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Container>
      </section>

      <Differentials />
      <FinalCta />
    </>
  );
}
