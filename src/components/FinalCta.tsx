import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { whatsappLink } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section id="contato" className="scroll-mt-20 bg-navy py-20 sm:py-24">
      <Container className="text-center">
        <h2 className="balance mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Vamos colocar sua contabilidade em ordem?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Conte com a ContMav para ter mais clareza, organização e segurança
          nas decisões do seu negócio.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/pre-diagnostico" variant="primary">
            Fazer pré-diagnóstico
          </Button>
          <Button
            href={whatsappLink("Olá! Gostaria de falar com a ContMav.")}
            variant="outline-light"
          >
            Falar no WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
