export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>{eyebrow && <p className="eyebrow mb-4 text-[#B96D4A]">{eyebrow}</p>}<h2 className="section-title">{title}</h2>{text && <p className="mt-5 text-sm leading-7 opacity-65 md:text-base">{text}</p>}</div>;
}
