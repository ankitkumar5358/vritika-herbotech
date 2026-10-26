import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/site";
import { certifications, company, founders, images, partners } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vritika — Ayurvedic Heritage from Jaipur" },
      {
        name: "description",
        content:
          "The story of Vritika Herbotech: agricultural science, an Ayurvedic family lineage, and herbal products from Jaipur since 2007.",
      },
      { property: "og:title", content: "About Vritika Herbotech" },
      {
        property: "og:description",
        content: "Agricultural science and Ayurvedic heritage, in Jaipur since 2007.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageIntro
        label="About Vritika"
        title={
          <>
            Rooted in science. <em className="text-primary">Guided by tradition.</em>
          </>
        }
      >
        Working with herbs since {company.operatingSince} and incorporated in {company.incorporated}
        , Vritika Herbotech is a Jaipur-based maker of Ayurvedic and herbal products.
      </PageIntro>

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
          </figure>
          <div>
            <p className="label">Our story</p>
            <h2 className="h2 mt-6">Two lineages, one purpose.</h2>
            <p className="lead mt-6">
              Vritika was founded by an agricultural scientist and a member of a family of Ayurvedic
              physicians. That pairing — field knowledge of medicinal plants and inherited
              understanding of Ayurveda — still shapes every product family we make.
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
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="label">Our heritage</p>
            <h2 className="h2 mt-6">A story that continues to grow.</h2>
          </div>
          <ol className="history-list">
            <li>
              <time dateTime="2007">2007</time>
              <div>
                <h3 className="h3">Working with herbs</h3>
                <p className="lead mt-3">
                  Vritika's work in herbal products begins, bringing agricultural knowledge together
                  with an Ayurvedic family heritage.
                </p>
              </div>
            </li>
            <li>
              <time dateTime="2017-05-01">2017</time>
              <div>
                <h3 className="h3">Vritika Herbotech Private Limited</h3>
                <p className="lead mt-3">Incorporated on 1 May 2017 in Jaipur, Rajasthan.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="partners section">
        <div className="shell">
          <p className="label">Relationships</p>
          <h2 className="h2 mt-6 max-w-2xl">Trusted by respected Ayurvedic names.</h2>
          <ul className="partner-grid p-0">
            {partners.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="label">Company credentials</p>
          <h2 className="h2 mt-6 max-w-2xl">Standards behind the range.</h2>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-y border-border py-8 pl-0">
            {certifications.map((name) => (
              <li key={name} className="list-none font-display text-2xl">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            Credentials and relationships are listed as stated in Vritika's company materials.
          </p>
        </div>
      </section>

      <section className="closing section">
        <div className="shell max-w-2xl">
          <h2 className="h2">See how we work.</h2>
          <p className="lead mt-5">
            From cultivation to testing, discover the craft behind the Vritikas range.
          </p>
          <Link to="/approach" className="btn btn-dark mt-8">
            Our Approach
          </Link>
        </div>
      </section>
    </>
  );
}
