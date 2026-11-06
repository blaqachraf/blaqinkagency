import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/ink_and_influential_reads.png.asset.json";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight, PenTool, Star, Trophy } from "lucide-react";
import { AuthorSections, MarketingSection, AuthorGuidance } from "@/components/agency-sections";
import covers from "@/assets/covers.jpg";
import author from "@/assets/author.jpg";
import amazonLogo from "@/assets/amazon-logo.asset.json";
import barnesNobleLogo from "@/assets/barnes-noble-logo.asset.json";
import appleBooksLogo from "@/assets/apple-books-logo.asset.json";
import audibleLogo from "@/assets/audible-logo.asset.json";
import ingramsparkLogo from "@/assets/ingramspark-logo.asset.json";
import koboLogo from "@/assets/kobo-logo.asset.json";
import goodreadsLogo from "@/assets/goodreads-logo.asset.json";
import spotifyLogo from "@/assets/spotify-logo.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blaq Ink — Premium Book Publishing & Marketing Agency" },
      { name: "description", content: "Blaq Ink writes, publishes and markets books that sell. Ghostwriting, editing, design, launch and author branding under one roof." },
      { property: "og:title", content: "Blaq Ink — Books Written in Permanent Ink" },
      { property: "og:description", content: "Ghostwriting, publishing and book marketing for authors who want a legacy, not just a listing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["01", "Ghostwriting", "Your voice, your story — shaped by award-winning writers across memoir, business, fiction and faith."],
  ["02", "Editorial", "Developmental edits, line edits and proofreading held to the standard of the Big Five houses."],
  ["03", "Cover & Interior Design", "Covers that stop the scroll and interiors that feel expensive in the hand."],
  ["04", "Publishing & Distribution", "Amazon KDP, IngramSpark, Barnes & Noble, Apple Books — print, ebook and audio, worldwide."],
  ["05", "Book Marketing", "Launch strategy, Amazon ads, PR, podcast tours and BookTok campaigns built to move copies."],
  ["06", "Author Branding", "Websites, media kits and positioning that turn a single book into a lasting platform."],
];

const platforms = [
  { name: "Amazon", logo: amazonLogo },
  { name: "Barnes & Noble", logo: barnesNobleLogo },
  { name: "Apple Books", logo: appleBooksLogo },
  { name: "Audible", logo: audibleLogo },
  { name: "IngramSpark", logo: ingramsparkLogo },
  { name: "Kobo", logo: koboLogo },
  { name: "Goodreads", logo: goodreadsLogo },
  { name: "Spotify Audiobooks", logo: spotifyLogo },
];

const process = [
  ["Discovery", "A private strategy call to map your book, reader and ambition."],
  ["Craft", "Writers, editors and designers build the manuscript and the look."],
  ["Publish", "We handle ISBNs, formatting, distribution and every listing detail."],
  ["Amplify", "A launch engineered for rankings, reviews and long-tail sales."],
];

const faqs = [
  ["Do I keep the rights and royalties?", "Always. You own 100% of your rights and 100% of your royalties. We work for you — never the other way around."],
  ["How long does it take to publish?", "A finished manuscript can be live in 6–10 weeks. Full ghostwriting projects typically run 4–7 months."],
  ["Will the book really sound like me?", "Yes. Every project starts with recorded interviews and voice studies so the final pages read like you on your best day."],
  ["What genres do you work with?", "Memoir, business, self-help, faith, children's, thriller, romance and literary fiction — our bench covers them all."],
];

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main className="grain min-h-screen overflow-hidden bg-background text-foreground">
      {/* Nav */}
      <header className="relative z-50 border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <a href="#" className="font-display text-2xl tracking-tight">
            Blaq<span className="text-gold italic"> Ink</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground lg:flex">
            {["About", "Services", "Work", "Marketing", "Process", "FAQ"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="transition-colors hover:text-foreground">{n}</a>
            ))}
          </nav>
          <Button asChild className="bg-gold font-semibold"><a href="#contact">Start your book</a></Button>
        </div>
      </header>

      {/* Hero */}
      <section aria-label="Blaq Ink publishing agency" className="opening-banner grid items-center">
        <img src={hero.url} alt="A full view of influential books, a globe, fountain pen and Blaq Ink bottle on a writing desk" width={1672} height={941} fetchPriority="high" className="col-start-1 row-start-1 block h-auto w-full" />
        <div aria-hidden="true" className="opening-shade pointer-events-none col-start-1 row-start-1 h-full w-full" />
        <div className="opening-copy relative col-start-1 row-start-1 mx-auto w-full max-w-7xl px-5 py-8 sm:px-10 lg:px-16 lg:py-14">
        <div className="animate-rise max-w-[40rem] text-center">
          <div aria-hidden="true" className="mx-auto flex max-w-sm items-center gap-3 text-champagne">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-champagne/70" /><PenTool className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.25} /><span className="h-px flex-1 bg-gradient-to-l from-transparent to-champagne/70" />
          </div>
          <h1 className="text-gold [text-shadow:none] drop-shadow-[0_2px_6px_var(--background)] mt-3 text-3xl leading-tight font-normal tracking-[0.06em] whitespace-nowrap sm:text-5xl lg:text-6xl">
            BLAQ INK AGENCY
          </h1>
          <div aria-hidden="true" className="mx-auto mt-3 flex max-w-sm items-center gap-3 text-champagne">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-champagne/70" /><span className="text-[0.6rem]">◆</span><span className="h-px flex-1 bg-gradient-to-l from-transparent to-champagne/70" />
          </div>
          <p className="mt-5 font-display text-lg leading-snug text-ivory sm:text-2xl">
            A boutique book marketing agency for authors who want <em className="text-champagne">more than</em> just a published book.
          </p>
          <p className="mt-4 text-[0.65rem] tracking-[0.3em] uppercase text-antique-gold sm:text-xs">Strategy <span className="mx-2">•</span> Visibility <span className="mx-2">•</span> Readers</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="outline" size="lg" className="h-auto rounded-full border-champagne/80 bg-transparent px-6 py-3 font-display tracking-wide text-ivory transition-colors hover:border-champagne hover:bg-champagne/10 hover:text-ivory"><a href="#contact">Book a Strategy Call <ChevronRight className="h-4 w-4" /></a></Button>
            <span aria-hidden="true" className="hidden h-7 w-px bg-champagne/50 sm:block" />
            <Button asChild variant="ghost" size="lg" className="h-auto bg-transparent px-2 py-3 font-display tracking-wide text-ivory hover:bg-transparent hover:text-champagne"><a href="#work">See Our Work <ChevronRight className="h-4 w-4" /></a></Button>
          </div>
          <div className="mx-auto mt-7 grid max-w-md grid-cols-3 divide-x divide-champagne/40">
            {([[BookOpen, "1,200+", "Books Published"], [Trophy, "340", "Bestseller Tags"], [Star, "4.9★", "Author Rating"]] as const).map(([Icon, n, l]) => (
              <div key={l} className="flex flex-col items-center px-2">
                <Icon aria-hidden="true" className="h-5 w-5 text-champagne" strokeWidth={1.5} />
                <div className="mt-1 font-display text-xl text-ivory sm:text-2xl">{n}</div>
                <div className="mt-0.5 font-display text-[0.7rem] text-champagne sm:text-xs">{l}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Marquee */}
      <section aria-label="Publishing platforms" className="overflow-hidden border-y border-border py-6">
        <div className="flex w-max animate-marquee">
          {Array.from({ length: 2 }, (_, k) => (
            <div key={k} aria-hidden={k === 1 ? true : undefined} className="flex shrink-0 items-center">
              {platforms.map(({ name, logo }) => (
                <div key={name} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16">
                  <img src={logo.url} alt={name} width={128} height={72} className="h-16 w-28 object-contain sm:h-20 sm:w-32" />
                  <span aria-hidden="true" className="font-display text-2xl text-primary">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <p className="eyebrow">Why Blaq Ink</p>
        <p className="mt-8 font-display text-3xl leading-snug font-light md:text-5xl">
          Most agencies publish books. <span className="text-muted-foreground">We build authors</span> — with the craft of a literary house and the instincts of a <em className="text-gold">growth studio.</em>
        </p>
      </section>

      <AuthorSections />

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 pb-32">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 text-4xl font-light md:text-6xl">The full stack of<br /><em className="text-gold">authorship.</em></h2>
          </div>
          <p className="max-w-sm text-muted-foreground">One team, one vision — from first sentence to final sale.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map(([n, t, d]) => (
            <article key={n} className="group border-b border-border p-8 transition-colors hover:bg-card md:border-r lg:[&:nth-child(3n)]:border-r-0">
              <span className="font-display text-sm text-primary">{n}</span>
              <h3 className="mt-6 text-2xl">{t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d}</p>
              <span className="mt-8 inline-block text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">Learn more →</span>
            </article>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-card py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-4 text-4xl font-light md:text-6xl">Covers that <em className="text-gold">sell</em> the story.</h2>
            </div>
            <p className="text-muted-foreground md:text-right">Thriller, memoir, fantasy, business, poetry and romance — every genre gets its own visual language.</p>
          </div>
          <img src={covers} alt="Six book covers designed by Blaq Ink" loading="lazy" width={1600} height={912} className="mt-14 w-full" />
        </div>
      </section>

      <MarketingSection />

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-32">
        <p className="eyebrow">Process</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-light md:text-6xl">Four chapters to a <em className="text-gold">finished</em> book.</h2>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-4">
          {process.map(([t, d], i) => (
            <div key={t} className="bg-background p-8">
              <div className="font-display text-6xl font-light text-gold">0{i + 1}</div>
              <h3 className="mt-8 text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-border bg-accent py-24 text-accent-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
          {[["+412%", "Average sales lift in the first 90 days of a Blaq Ink launch."], ["#1", "New Release placements earned across 60+ Amazon categories."], ["8.2×", "Average return on author ad spend across managed campaigns."]].map(([n, d]) => (
            <div key={n}>
              <div className="font-display text-7xl font-light">{n}</div>
              <p className="mt-4 max-w-xs opacity-80">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section id="stories" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-32 lg:grid-cols-2">
        <img src={author} alt="Author holding her published memoir" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
        <div>
          <p className="eyebrow">Author stories</p>
          <blockquote className="mt-8 font-display text-3xl leading-snug font-light md:text-4xl">
            “I came with voice notes and a dream. Blaq Ink handed me a bestseller — and a brand I'm proud to stand behind.”
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <div>
              <p className="font-semibold">Adaeze Morgan</p>
              <p className="text-sm text-muted-foreground">Author, <em>The Strength in Our Scars</em></p>
            </div>
          </div>
        </div>
      </section>

      <AuthorGuidance />

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 pb-32">
        <p className="eyebrow text-center">Questions</p>
        <h2 className="mt-4 text-center text-4xl font-light md:text-5xl">Before you <em className="text-gold">begin.</em></h2>
        <div className="mt-14 border-t border-border">
          {faqs.map(([q, a], i) => (
            <div key={q} className="border-b border-border">
              <Button variant="ghost" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} className="h-auto w-full justify-between gap-4 whitespace-normal rounded-none px-0 py-6 text-left text-lg hover:bg-transparent hover:text-primary">
                {q}
                <span className="shrink-0 font-display text-2xl text-primary">{open === i ? "−" : "+"}</span>
              </Button>
              {open === i && <p className="pb-6 text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-secondary py-32 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.28em] text-accent uppercase">Start your book</p>
            <h2 className="mt-6 text-5xl font-light md:text-7xl">Your story,<br /><em>finally</em> in print.</h2>
            <p className="mt-8 max-w-md opacity-70">Tell us about your book. A senior strategist will reply within one business day.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); alert("Thank you — we'll be in touch shortly."); }} className="space-y-6">
            {["Full name", "Email", "Tell us about your book"].map((l, i) => (
              <label key={l} className="block">
                <span className="text-xs tracking-widest uppercase opacity-60">{l}</span>
                {i === 2 ? (
                  <textarea required rows={4} className="mt-2 w-full border-b border-secondary-foreground/30 bg-transparent py-2 outline-none focus:border-accent" />
                ) : (
                  <input required type={i === 1 ? "email" : "text"} className="mt-2 w-full border-b border-secondary-foreground/30 bg-transparent py-2 outline-none focus:border-accent" />
                )}
              </label>
            ))}
            <Button type="submit" className="h-auto w-full whitespace-normal bg-background py-4 font-semibold text-foreground hover:bg-background/90">Request a consultation</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-16">
        <nav aria-label="Footer" className="mb-12 grid gap-6 border-b border-border pb-10 text-sm text-muted-foreground sm:grid-cols-2 md:grid-cols-4">
          <div><p className="mb-4 font-semibold text-foreground">The agency</p><a href="#about" className="block py-1 hover:text-primary">About Blaq Ink</a><a href="#authors" className="block py-1 hover:text-primary">Who we work with</a></div>
          <div><p className="mb-4 font-semibold text-foreground">Your book</p><a href="#services" className="block py-1 hover:text-primary">Publishing services</a><a href="#marketing" className="block py-1 hover:text-primary">Book marketing</a></div>
          <div><p className="mb-4 font-semibold text-foreground">Explore</p><a href="#work" className="block py-1 hover:text-primary">Selected work</a><a href="#guidance" className="block py-1 hover:text-primary">Author guidance</a></div>
          <div><p className="mb-4 font-semibold text-foreground">Let’s talk</p><a href="#contact" className="block py-1 hover:text-primary">Start your book</a><a href="mailto:hello@blaqachraf.com" className="block break-words py-1 hover:text-primary">hello@blaqachraf.com</a></div>
        </nav>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="font-display text-6xl md:text-8xl">Blaq<span className="text-gold italic"> Ink</span></div>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>hello@blaqachraf.com</p>
            <p className="mt-1">© {new Date().getFullYear()} Blaq Ink Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
