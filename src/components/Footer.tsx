import Image from "next/image";
import Link from "next/link";
import { footerLinks, siteConfig, whatsappLink } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logocontmav-transparent.png"
                alt="ContMav Contabilidade"
                width={144}
                height={137}
                quality={100}
                className="h-10 w-auto"
              />
              <span className="text-base font-bold text-white">CONTMAV</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {siteConfig.name}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Endereço</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}
              <br />
              {siteConfig.address.zip}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Redes</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink("Olá! Vim pelo site da ContMav e gostaria de mais informações.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} ContMav Contabilidade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
