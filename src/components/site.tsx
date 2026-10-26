import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/button";
import { categories, company, type Product } from "@/lib/site-data";

export const navigation = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Vritika" },
  { to: "/products", label: "Our Products" },
  { to: "/approach", label: "Our Approach" },
  { to: "/contact", label: "Contact Us" },
] as const;

/** Delicate line-drawn botanical sprig used as a quiet brand motif. */
export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      className={className}
      aria-hidden="true"
    >
      <path d="M60 196C60 140 58 90 62 8" />
      {[30, 58, 86, 114, 142].map((y, i) => (
        <g key={y}>
          <path
            d={`M61 ${y + 12}C46 ${y + 4} 30 ${y - 6} 22 ${y - 22}C40 ${y - 20} 54 ${y - 6} 61 ${y + 12}Z`}
          />
          <path
            d={`M61 ${y + 26}C76 ${y + 18} 92 ${y + 8} 100 ${y - 8}C82 ${y - 6} 68 ${y + 8} 61 ${y + 26}Z`}
          />
          {i < 4 && <path d={`M61 ${y + 12}L36 ${y - 12}M61 ${y + 26}L88 ${y + 2}`} opacity=".5" />}
        </g>
      ))}
      <circle cx="62" cy="6" r="3" />
    </svg>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Vritika Herbotech home">
      <Sprig className={`h-10 w-6 shrink-0 ${light ? "text-accent" : "text-primary"}`} />
      <span className="min-w-0 leading-none">
        <strong className="block font-display text-[1.7rem] font-semibold tracking-tight">
          Vritika
        </strong>
        <small
          className={`mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.24em] ${light ? "text-deep-muted" : "text-muted-foreground"}`}
        >
          Herbotech · Jaipur
        </small>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-6">
        <Brand />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {navigation.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              activeProps={{ className: "is-active" }}
              activeOptions={{ exact: true }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu lg:hidden">
          <Button
            ref={menuButton}
            className="menu-toggle grid size-11 place-items-center border border-border"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
          {menuOpen && (
            <nav
              id="mobile-navigation"
              className="mobile-navigation fixed inset-x-0 z-[60] border-t border-border bg-background px-6 pb-8 pt-4"
              aria-label="Mobile navigation"
            >
              {navigation.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block border-b border-border py-4 font-display text-2xl"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: true }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell grid gap-12 pb-12 pt-20 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_1fr_1.2fr]">
        <div>
          <Brand light />
          <p className="mt-6 max-w-xs text-sm leading-7 text-deep-muted">
            Ayurvedic and herbal wellness products from Jaipur — herbal juices, classical
            preparations and personal care, rooted in herbal knowledge since{" "}
            {company.operatingSince}.
          </p>
          <a
            className="mt-6 inline-flex size-10 items-center justify-center rounded-full border border-deep-muted/30 text-deep-muted"
            href={company.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Vritika Herbotech on Facebook"
          >
            <Facebook size={17} />
          </a>
        </div>
        <div>
          <h3>Explore</h3>
          <ul className="mt-5 space-y-3 p-0 text-sm text-deep-muted">
            {navigation.map(({ to, label }) => (
              <li key={to} className="list-none">
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Product range</h3>
          <ul className="mt-5 space-y-3 p-0 text-sm text-deep-muted">
            {categories.map((c) => (
              <li key={c.name} className="list-none">
                <Link to="/products" search={{ category: c.name }}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul className="mt-5 space-y-4 p-0 text-sm text-deep-muted">
            <li className="flex list-none gap-3">
              <MapPin className="mt-1 shrink-0" size={15} />
              <span>{company.address}</span>
            </li>
            <li className="flex list-none gap-3">
              <Phone className="mt-1 shrink-0" size={15} />
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li className="flex list-none gap-3">
              <Mail className="mt-1 shrink-0" size={15} />
              <a href={`mailto:${company.email}`} className="break-all">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--deep-line)]">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-deep-muted sm:flex-row sm:justify-between">
          <span>
            © 2026 {company.legalName} · CIN {company.cin}
          </span>
          <span>Jaipur, Rajasthan, India</span>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro">
      <Sprig className="sprig" />
      <div className="shell reveal">
        <p className="label">{label}</p>
        <h1 className="display mt-6 max-w-4xl">{title}</h1>
        {children && <p className="lead mt-6 max-w-2xl">{children}</p>}
      </div>
    </section>
  );
}

export function ProductCard({ product, onOpen }: { product: Product; onOpen?: () => void }) {
  return (
    <Button
      className="p-card group"
      onClick={onOpen}
      aria-label={`View details for ${product.name}`}
    >
      <div className="product-stage w-full">
        <img
          src={product.image}
          alt={`${product.name} packaging`}
          loading="lazy"
          width={1024}
          height={1024}
        />
      </div>
      <div className="meta">
        <p className="p-cat">{product.category}</p>
        <h3 className="p-name">{product.name}</h3>
        <p className="p-sum">{product.summary}</p>
      </div>
    </Button>
  );
}

export function ProductSheet({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!product || !dialog) return;
    dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
    };
  }, [product]);
  if (!product) return null;
  return (
    <dialog
      ref={dialogRef}
      className="product-dialog"
      aria-labelledby="sheet-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="sheet">
        <div className="product-stage">
          <img src={product.image} alt={`${product.name} packaging`} width={1024} height={1024} />
        </div>
        <div className="relative flex flex-col p-8 md:p-10">
          <Button
            onClick={onClose}
            className="absolute right-4 top-4 grid size-11 place-items-center border border-border"
            aria-label="Close product details"
            autoFocus
          >
            <X size={18} />
          </Button>
          <p className="p-cat">{product.category}</p>
          <h2 id="sheet-title" className="h2 mt-3 !text-4xl">
            {product.name}
          </h2>
          <p className="mt-5 leading-7 text-muted-foreground">{product.summary}</p>
          <p className="mt-6 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">
            For ingredients, usage and specifications, please refer to the product label.
          </p>
          <Link to="/contact" className="link-arrow mt-auto self-start pt-8" onClick={onClose}>
            Company contact details
          </Link>
        </div>
      </div>
    </dialog>
  );
}
