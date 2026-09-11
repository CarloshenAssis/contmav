import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site-config";

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46c-.28 1.5-1.13 2.78-2.4 3.63v3.02h3.89c2.28-2.1 3.55-5.2 3.55-8.84Z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.9l-3.89-3.02c-1.08.72-2.46 1.15-4.05 1.15-3.11 0-5.74-2.1-6.68-4.92H1.3v3.09C3.28 21.3 7.31 24 12 24Z" />
        <path fill="#FBBC05" d="M5.32 14.31A7.2 7.2 0 0 1 4.94 12c0-.8.14-1.58.38-2.31V6.6H1.3A11.98 11.98 0 0 0 0 12c0 1.94.46 3.77 1.3 5.4l4.02-3.09Z" />
        <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0 7.31 0 3.28 2.7 1.3 6.6l4.02 3.09C6.26 6.87 8.89 4.77 12 4.77Z" />
      </svg>
    ),
    value: siteConfig.google.rating,
    label: "no Google",
  },
  {
    icon: <Icon name="star" />,
    value: String(siteConfig.google.reviews),
    label: "avaliações",
  },
  {
    icon: <Icon name="calendar" />,
    value: `${siteConfig.experienceYears} anos`,
    label: `de experiência no ${siteConfig.region}`,
  },
  {
    icon: <Icon name="pin" />,
    value: "São José dos Campos",
    label: "atendimento físico e online",
  },
];

function Icon({ name }: { name: "star" | "calendar" | "pin" }) {
  if (name === "star") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" fill="currentColor" aria-hidden="true">
        <path d="M12 2.5 15 9l7 1-5.1 4.9L18.2 22 12 18.4 5.8 22l1.3-7.1L2 10l7-1Z" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
        <path d="M8 3v4M16 3v4M3.5 10h17" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-6.6 7-12a7 7 0 0 0-14 0c0 5.4 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function StatsBar() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:py-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-50">
              {stat.icon}
            </div>
            <div>
              <p className="text-lg font-bold leading-tight text-navy-dark sm:text-xl">
                {stat.value}
              </p>
              <p className="text-xs leading-snug text-graphite/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
