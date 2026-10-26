import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site";
import { approachPoints, certifications, images } from "@/lib/site-data";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — Herbal Knowledge & Craft | Vritika Herbotech" },
      {
        name: "description",
        content:
          "How Vritika Herbotech works: organic medicinal plant cultivation, laboratory testing and Ayurvedic heritage in Jaipur.",
      },
      { property: "og:title", content: "Our Approach — Vritika Herbotech" },
      { property: "og:description", content: "Where herbal knowledge meets thoughtful craft." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Approach,
});

function Approach() {
  return (
    <>
      <PageIntro
        label="Our Approach"
        title={
          <>
            Where herbal knowledge meets <em className="text-primary">thoughtful craft.</em>
          </>
        }
      />

      <section className="section">
        <div className="shell approach">
          <div className="approach-img">
            <img
              src={images.craft}
              alt="Hands sorting dried herbs in brass bowls"
              loading="lazy"
              width={1440}
              height={1808}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="lead">
              Our products begin with the plant. Captive organic cultivation, automated production
              infrastructure and in-house laboratory testing connect each stage — from raw herb to
              finished pack.
            </p>
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
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="label">Standards</p>
            <h2 className="h2 mt-6">Certifications listed in our materials.</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Credentials as stated in Vritika's supplied company materials.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 border-y border-border p-0">
            {certifications.map((c) => (
              <li key={c} className="list-none border-b border-border py-6 font-display text-xl">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="label">The product journey</p>
          <h2 className="h2 mt-6 max-w-2xl">From the plant to the finished pack.</h2>
          <ol className="journey">
            {[
              [
                "Cultivation",
                "Captive organic cultivation of medicinal plants connects the work to its botanical source.",
              ],
              [
                "Development",
                "Research and formulation bring herbal ingredients into Ayurvedic and personal-care formats.",
              ],
              [
                "Production",
                "Automated production infrastructure supports the preparation of the product range in Jaipur.",
              ],
              [
                "Quality",
                "Microbiology and heavy-metal laboratory testing are part of the production process.",
              ],
            ].map(([title, copy], index) => (
              <li key={title}>
                <span className="journey-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="closing section">
        <div className="shell max-w-2xl">
          <h2 className="h2">Explore what we make.</h2>
          <Link to="/products" className="btn btn-dark mt-8">
            View Products
          </Link>
        </div>
      </section>
    </>
  );
}
