export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-widest ${
            light ? "text-gold" : "text-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`balance text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/75" : "text-graphite/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
