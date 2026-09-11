import Image from "next/image";
import { Button } from "@/components/Button";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(29,111,165,0.35),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-0 lg:pt-16">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-gold" fill="currentColor">
              <path d="M12 2 2 7l10 5 10-5-10-5Z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
            Contabilidade em São José dos Campos
          </span>

          <h1 className="balance mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Sua empresa organizada, impostos no lugar e{" "}
            <span className="text-gold">gestão segura</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Assessoria contábil, fiscal, trabalhista e empresarial para empresas e
            profissionais que buscam mais organização, segurança e agilidade.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/pre-diagnostico" variant="primary">
              Fazer pré-diagnóstico gratuito
            </Button>
            <Button
              href={whatsappLink("Olá! Gostaria de falar com a ContMav.")}
              variant="outline-light"
            >
              Falar com a ContMav
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46c-.28 1.5-1.13 2.78-2.4 3.63v3.02h3.89c2.28-2.1 3.55-5.2 3.55-8.84Z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.07 7.94-2.9l-3.89-3.02c-1.08.72-2.46 1.15-4.05 1.15-3.11 0-5.74-2.1-6.68-4.92H1.3v3.09C3.28 21.3 7.31 24 12 24Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.32 14.31A7.2 7.2 0 0 1 4.94 12c0-.8.14-1.58.38-2.31V6.6H1.3A11.98 11.98 0 0 0 0 12c0 1.94.46 3.77 1.3 5.4l4.02-3.09Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0 7.31 0 3.28 2.7 1.3 6.6l4.02 3.09C6.26 6.87 8.89 4.77 12 4.77Z"
                />
              </svg>
              <span className="flex text-gold">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </span>
              <span className="text-xs font-medium text-white/75">
                {siteConfig.google.rating} no Google • {siteConfig.google.reviews} avaliações
              </span>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up lg:h-[560px]">
          <div className="relative mx-auto h-[420px] w-full max-w-md overflow-hidden rounded-2xl sm:h-[500px] lg:h-full lg:max-w-none lg:rounded-none">
            <Image
              src="/images/sentdonapoltrona.png"
              alt="Profissional da ContMav Contabilidade, contador em São José dos Campos"
              fill
              priority
              quality={95}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
