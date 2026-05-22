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
    <div className="relative z-10 max-w-[1120px]">
      {eyebrow && (
        <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.32em] text-[#D0A85C]/92">
          {eyebrow}
        </p>
      )}

      <h2 className="max-w-[980px] text-[54px] font-light leading-[1.02] tracking-[-0.06em] text-[#F3F1EA]">
        {title}
      </h2>

      {description && (
        <p className="mt-8 max-w-[760px] text-[17px] leading-[2.05] text-[#D7DCE2]/72">
          {description}
        </p>
      )}
    </div>
  );
}