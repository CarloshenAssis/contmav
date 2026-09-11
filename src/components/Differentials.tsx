import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { differentials } from "@/lib/data";

const icons = ["⚡", "🤝", "🎯", "📈"];

export function Differentials() {
  return (
    <section className="bg-navy-dark py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Diferenciais"
          title="Mais do que cumprir obrigações."
          align="center"
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-xl">
                <span aria-hidden="true">{icons[i]}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
