import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { audiences } from "@/lib/data";

export function Audience() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Para quem atendemos"
              title="Contabilidade para diferentes momentos do seu negócio."
            />

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {audiences.map((audience) => (
                <div
                  key={audience.label}
                  className="flex flex-col items-start gap-3 rounded-xl border border-gray-200 bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <Icon name={audience.icon} className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-navy-dark">
                    {audience.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-md">
            <Image
              src="/images/empenamesa.png"
              alt="Profissional da ContMav Contabilidade"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
