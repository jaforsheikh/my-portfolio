export default function PrimaryButton({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="inline-block rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
    >
      {children}
    </a>
  );
}