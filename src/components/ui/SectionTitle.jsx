export default function SectionTitle({ subtitle, title, center = false }) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
    </div>
  );
}