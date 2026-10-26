import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/button";
import { PageIntro, ProductCard, ProductSheet } from "@/components/site";
import { categories, products, type Product } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Vritika Herbotech Ayurvedic Collection" },
      {
        name: "description",
        content:
          "Explore Vritikas herbal juices, syrups, personal care and classical Ayurvedic product families from Vritika Herbotech, Jaipur.",
      },
      { property: "og:title", content: "The Vritikas Product Collection" },
      {
        property: "og:description",
        content: "Herbal juices, syrups, personal care and classical Ayurvedic preparations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
  validateSearch: (search: Record<string, unknown>): { category?: string | undefined } => {
    const category = search["category"];
    return {
      category:
        typeof category === "string" && categories.some((c) => c.name === category)
          ? category
          : undefined,
    };
  },
});

function ProductsPage() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();
  const tab = category ?? "All";
  const [open, setOpen] = useState<Product | null>(null);
  const list = tab === "All" ? products : products.filter((p) => p.category === tab);
  const activeCat = categories.find((c) => c.name === tab);

  return (
    <>
      <PageIntro
        label="Our Products"
        title={
          <>
            The Vritikas <em className="text-primary">collection.</em>
          </>
        }
      >
        Herbal juices, traditional preparations and personal care from Vritika Herbotech.
      </PageIntro>

      <section className="section">
        <div className="shell">
          <div className="tabs" role="tablist" aria-label="Product categories">
            {["All", ...categories.map((c) => c.name)].map((name, index, names) => (
              <Button
                key={name}
                id={`category-tab-${index}`}
                role="tab"
                aria-selected={tab === name}
                aria-controls="product-panel"
                tabIndex={tab === name ? 0 : -1}
                className="tab"
                onClick={() =>
                  navigate({
                    search: { category: name === "All" ? undefined : name },
                    resetScroll: false,
                  })
                }
                onKeyDown={(event) => {
                  const direction =
                    event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
                  if (!direction && event.key !== "Home" && event.key !== "End") return;
                  event.preventDefault();
                  const next =
                    event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? names.length - 1
                        : (index + direction + names.length) % names.length;
                  navigate({
                    search: { category: next === 0 ? undefined : names[next] },
                    resetScroll: false,
                  });
                  document.getElementById(`category-tab-${next}`)?.focus();
                }}
              >
                {name === "All" ? "All products" : name}
              </Button>
            ))}
          </div>

          <div
            id="product-panel"
            role="tabpanel"
            aria-labelledby={`category-tab-${["All", ...categories.map((c) => c.name)].indexOf(tab)}`}
            tabIndex={0}
          >
            {activeCat && (
              <div className="mt-10 grid items-center gap-8 border-y border-border py-8 md:grid-cols-[14rem_1fr]">
                <img
                  src={activeCat.image}
                  alt={`Illustrative image for ${activeCat.name}`}
                  className="aspect-[4/5] w-full max-w-56 object-cover"
                  width={1200}
                  height={1504}
                />
                <div>
                  <h2 className="h2 !text-4xl">{activeCat.name}</h2>
                  <p className="lead mt-3">{activeCat.note}</p>
                  <ul className="mt-5 flex flex-wrap gap-2 p-0">
                    {activeCat.items.map((i) => (
                      <li
                        key={i}
                        className="list-none rounded-full border border-border px-3 py-1 text-xs"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {list.length > 0 ? (
              <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => (
                  <ProductCard key={p.slug} product={p} onOpen={() => setOpen(p)} />
                ))}
              </div>
            ) : (
              <p className="mt-10 max-w-xl text-muted-foreground">{activeCat?.note}</p>
            )}
            <p className="mt-10 text-sm text-muted-foreground">
              Named products show supplied Vritikas packaging. Category photography is illustrative.
            </p>
          </div>
        </div>
      </section>
      <ProductSheet product={open} onClose={() => setOpen(null)} />
    </>
  );
}
