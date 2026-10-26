import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/site";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vritika Herbotech, Jaipur" },
      {
        name: "description",
        content:
          "Address, phone and email for Vritika Herbotech Pvt. Ltd., New Sanganer Road, Jaipur, Rajasthan.",
      },
      { property: "og:title", content: "Contact Vritika Herbotech" },
      { property: "og:description", content: "Company details for Vritika Herbotech, Jaipur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: MapPin, label: "Address", value: company.address },
  { icon: Phone, label: "Telephone", value: company.phone, href: company.phoneHref },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/vritikaherbotech",
    href: company.facebook,
  },
];

function Contact() {
  return (
    <>
      <PageIntro
        label="Contact Us"
        title={
          <>
            Visit us in <em className="text-primary">Jaipur.</em>
          </>
        }
      >
        {company.legalName} · CIN {company.cin}
      </PageIntro>
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <ul className="min-w-0 p-0">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li
                key={label}
                className="flex list-none gap-5 border-b border-border py-7 first:pt-0"
              >
                <Icon className="mt-1 shrink-0 text-accent" size={20} />
                <div className="min-w-0">
                  <p className="p-cat">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="mt-2 block [overflow-wrap:anywhere] font-display text-2xl hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-2 font-display text-2xl leading-snug">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <iframe
            title="Vritika Herbotech location map"
            src="https://www.google.com/maps?q=Katewa+Nagar+New+Sanganer+Road+Jaipur&output=embed"
            className="min-h-[26rem] w-full border border-border grayscale-[40%]"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
