interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-[980px]">
      {eyebrow && (
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#D0A85C]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-[42px] font-medium leading-[1.08] tracking-[-0.04em] text-[#F3F1EA]">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-[16px] leading-8 text-[#D7DCE2]">
          {description}
        </p>
      )}
    </div>
  );
}