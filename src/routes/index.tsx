import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ProductCard, ProductSheet, Sprig } from "@/components/site";
import { Button } from "@/components/button";
import {
  approachPoints,
  categories,
  certifications,
  company,
  founders,
  images,
  partners,
  products,
  type Product,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vritika Herbotech — The Wisdom of Ayurveda, Beautifully Brought to Life" },
      {
        name: "description",
        content:
          "Herbal juices, classical Ayurvedic preparations and personal care products from Vritika Herbotech, Jaipur — rooted in herbal knowledge since 2007.",
      },
      { property: "og:title", content: "Vritika Herbotech — Ayurvedic & Herbal Products, Jaipur" },
      {
        property: "og:description",
        content:
          "Discover the Vritika collection of herbal juices, Ayurvedic preparations and personal care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [open, setOpen] = useState<Product | null>(null);
  const [feature, ...rest] = products;

  return (
    <>
      {/* Hero — campaign photograph */}
      <section className="hero">
        <img
          src={images.hero}
          alt="Herbal syrup bottles with tulsi, amla, turmeric and ashwagandha on cream stone"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="shell">
          <div className="hero-copy reveal">
            <p className="label">Vritika Herbotech · Est. {company.operatingSince}</p>
            <h1 className="display mt-7">
              The Wisdom of Ayurveda. <em className="text-primary">Beautifully</em> Brought to Life.
            </h1>
            <p className="lead mt-7 max-w-xl">
              Discover Vritika Herbotech's collection of herbal juices, traditional Ayurvedic
              preparations, and personal care products, inspired by nature and rooted in herbal
              knowledge.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link to="/products" className="btn btn-dark">
                Explore the Collection <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="link-arrow">
                Our story
              </Link>
            </div>
            <div className="hero-meta">
              <div>
                <strong>{company.operatingSince}</strong>
                <span>Working with herbs since</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Product families</span>
              </div>
              <div>
                <strong>Jaipur</strong>
                <span>Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <div className="cred-strip" aria-label="Certifications listed in company materials">
        <div className="shell">
          <ul>
            {certifications.slice(0, 7).map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Heritage */}
      <section className="section">
        <div className="shell heritage">
          <figure className="heritage-figure m-0">
            <img
              src={images.heritage}
              alt="Botanical ingredients prepared for Ayurvedic formulation"
              loading="lazy"
              width={1408}
              height={1008}
            />
            <figcaption>
              <strong>{company.operatingSince}</strong>Rooted in agricultural science and an
              Ayurvedic family lineage.
            </figcaption>
          </figure>
          <div>
            <p className="label">About Vritika</p>
            <h2 className="h2 mt-6">A family of herbal knowledge, grown in Jaipur.</h2>
            <p className="lead mt-6">
              Vritika Herbotech brings together botanical science and traditional Ayurvedic
              understanding. Our range spans herbal juices, classical preparations and personal care
              — each made with attention from herb to finished pack.
            </p>
            <div className="founder-row">
              {founders.map((f) => (
                <div key={f.name}>
                  <h4>{f.name}</h4>
                  <small>{f.role}</small>
                  <p>{f.note}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="link-arrow mt-9">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial collection */}
      <section className="section collection-section pt-0 md:pt-0">
        <div className="shell">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 pt-24">
            <div className="max-w-2xl">
              <p className="label">The Vritikas Collection</p>
              <h2 className="h2 mt-6">Products made to be trusted, and remembered.</h2>
            </div>
            <Link to="/products" className="link-arrow">
              View all products
            </Link>
          </div>
          <div className="collection">
            {feature && (
              <article className="collection-feature group">
                <div className="product-stage">
                  <img
                    src={feature.image}
                    alt={`${feature.name} packaging`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="body">
                  <div className="max-w-md">
                    <p className="p-cat">Featured · {feature.category}</p>
                    <h3 className="p-name !text-3xl">{feature.name}</h3>
                    <p className="p-sum">{feature.summary}</p>
                  </div>
                  <Button className="btn btn-dark" onClick={() => setOpen(feature)}>
                    View details
                  </Button>
                </div>
              </article>
            )}
            <div className="collection-side">
              {rest.map((p) => (
                <ProductCard key={p.slug} product={p} onOpen={() => setOpen(p)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners section">
        <Sprig className="partners-sprig" />
        <div className="shell relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="label">Trusted relationships</p>
              <h2 className="h2 mt-6">A Legacy Built on Trusted Relationships.</h2>
            </div>
            <p className="lead max-w-lg">
              Over the years, Vritika has worked alongside some of India's most respected Ayurvedic
              names.
            </p>
          </div>
          <ul className="partner-grid p-0">
            {partners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-deep-muted">
            Names listed as described in Vritika's company materials. Trademarks belong to their
            respective owners.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="shell approach">
          <div className="approach-img">
            <img
              src={images.craft}
              alt="Hands sorting dried tulsi, giloy, amla and turmeric in brass bowls"
              loading="lazy"
              width={1440}
              height={1808}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="label">Our approach</p>
            <h2 className="h2 mt-6">Where Herbal Knowledge Meets Thoughtful Craft.</h2>
            <ol className="approach-list">
              {approachPoints.map((a) => (
                <li key={a.title}>
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/approach" className="link-arrow mt-4 self-start">
              Discover our approach
            </Link>
          </div>
        </div>
      </section>

      {/* Category gallery */}
      <section className="section bg-cream">
        <div className="shell">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="label justify-center">The range</p>
            <h2 className="h2 mt-6">Four families of herbal care.</h2>
          </div>
          <div className="cat-grid">
            {categories.map((c) => (
              <Link key={c.name} to="/products" search={{ category: c.name }} className="cat-card">
                <img
                  src={c.image}
                  alt={`Illustrative image for ${c.name}`}
                  loading="lazy"
                  width={1200}
                  height={1504}
                />
                <div className="cap">
                  <h3>{c.name}</h3>
                  <p>{c.note}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Campaign and category photography is illustrative; named products show supplied Vritikas
            packaging.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="closing section">
        <div className="shell max-w-3xl">
          <Sprig className="closing-sprig" />
          <h2 className="h2">Nature's wisdom, carefully kept.</h2>
          <p className="lead mx-auto mt-6 max-w-xl">
            Explore the Vritika range — herbal juices, classical preparations and personal care from
            Jaipur.
          </p>
          <Link to="/products" className="btn btn-dark mt-9">
            Explore Products <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <ProductSheet product={open} onClose={() => setOpen(null)} />
    </>
  );
}
