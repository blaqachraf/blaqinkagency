import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero-books.jpg";
import covers from "@/assets/covers.jpg";
import author from "@/assets/author.jpg";

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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="font-display text-2xl tracking-tight">
            Blaq<span className="text-gold italic"> Ink</span>
          </a>
          <nav className="hidden gap-10 text-sm text-muted-foreground md:flex">
            {["Services", "Work", "Process", "Stories", "FAQ"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="transition-colors hover:text-foreground">{n}</a>
            ))}
          </nav>
          <a href="#contact" className="bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Start your book
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-36 pb-24 lg:grid-cols-12 lg:pt-44">
        <div className="animate-rise lg:col-span-7">
          <p className="eyebrow">Publishing · Ghostwriting · Marketing</p>
          <h1 className="mt-6 text-5xl leading-[1.02] font-light md:text-7xl lg:text-8xl">
            Stories worth<br />writing in <em className="text-gold font-normal">permanent</em> ink.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Blaq Ink is a boutique agency for authors who want more than a listing. We write, publish and market books that earn readers, rankings and a legacy.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="bg-gold px-8 py-4 font-semibold text-primary-foreground">Book a strategy call</a>
            <a href="#work" className="border border-border px-8 py-4 font-medium transition-colors hover:border-primary">See our work →</a>
          </div>
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[["1,200+", "Books published"], ["340", "Bestseller tags"], ["4.9★", "Author rating"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-gold">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="absolute -inset-6 bg-gold opacity-10 blur-3xl" />
          <img src={hero} alt="Gold-foiled black hardcover books beside a fountain pen and ink" width={1280} height={1536} className="relative aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-6 -left-6 border border-border bg-card px-6 py-4">
            <p className="eyebrow">Est. 2019</p>
            <p className="font-display text-lg italic">Lagos · London · New York</p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-border py-6">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-display text-2xl text-muted-foreground italic">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Amazon", "Barnes & Noble", "Apple Books", "Audible", "IngramSpark", "Kobo", "Goodreads", "Spotify Audiobooks"].map((b) => (
              <span key={b + k} className="flex items-center gap-16">{b}<span className="text-primary">✦</span></span>
            )),
          )}
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center">
        <p className="eyebrow">Why Blaq Ink</p>
        <p className="mt-8 font-display text-3xl leading-snug font-light md:text-5xl">
          Most agencies publish books. <span className="text-muted-foreground">We build authors</span> — with the craft of a literary house and the instincts of a <em className="text-gold">growth studio.</em>
        </p>
      </section>

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

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 pb-32">
        <p className="eyebrow text-center">Questions</p>
        <h2 className="mt-4 text-center text-4xl font-light md:text-5xl">Before you <em className="text-gold">begin.</em></h2>
        <div className="mt-14 border-t border-border">
          {faqs.map(([q, a], i) => (
            <div key={q} className="border-b border-border">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-6 text-left text-lg">
                {q}
                <span className="font-display text-2xl text-primary">{open === i ? "−" : "+"}</span>
              </button>
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
            <button className="w-full bg-background py-4 font-semibold text-foreground transition-opacity hover:opacity-90">Request a consultation</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="font-display text-6xl md:text-8xl">Blaq<span className="text-gold italic"> Ink</span></div>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>hello@blaqink.com</p>
            <p className="mt-1">© {new Date().getFullYear()} Blaq Ink Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
