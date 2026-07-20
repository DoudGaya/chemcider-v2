import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`brand${inverse ? " brand-inverse" : ""}`} href="/" aria-label="Chemcider home">
      <span className="brand-mark" aria-hidden="true">C<span>+</span></span>
      <span className="brand-copy">
        <strong>CHEMCIDER</strong>
        <small>Applied research &amp; sustainable systems</small>
      </span>
    </Link>
  );
}
