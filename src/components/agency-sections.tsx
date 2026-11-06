import { ArrowUpRight, BookOpen, Megaphone, PenLine, Search, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  ["First-time authors", "A first idea, a folder of notes or a manuscript ready for its next chapter. Find the writing, editorial and publishing support your book needs."],
  ["Experts & entrepreneurs", "Turn your experience into a business book, memoir or practical guide, with a clear voice and a considered author brand."],
  ["Independent authors", "Give an existing manuscript or published book a fresh direction through design, positioning and book marketing."],
];

const marketing = [
  { icon: Search, title: "Book discovery", text: "Category positioning, reader-focused descriptions and Amazon listings that clearly communicate what your book offers." },
  { icon: Target, title: "Paid campaigns", text: "Amazon advertising and campaign strategy shaped around your book, genre and intended reader." },
  { icon: Megaphone, title: "Publicity & outreach", text: "PR, podcast tours and launch outreach that bring your story into the conversations your readers follow." },
  { icon: Users, title: "Author presence", text: "Author websites, media kits and BookTok campaigns that give readers more ways to discover your work." },
];

export function AuthorSections() {
  return (
    <>
      <section id="about" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div><p className="eyebrow">The agency</p><h2 className="mt-4 text-4xl font-light md:text-5xl">A literary mindset.<br /><em className="text-gold">A wider ambition.</em></h2></div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>Blaq Ink brings writing, editorial, design, publishing and marketing into one conversation. The book matters. So does the author behind it.</p>
            <p>From finding the right words to finding the right readers, our focus is a coherent book and a considered presence in the world.</p>
            <Button asChild variant="link" className="h-auto px-0"><a href="#contact">Let’s talk about your book <ArrowUpRight /></a></Button>
          </div>
        </div>
      </section>
      <section id="authors" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-xs uppercase">Who we work with</p>
          <h2 className="mt-4 text-4xl font-light md:text-5xl">Different starting points.<br /><em>The same care for the story.</em></h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {audiences.map(([title, text], i) => <article key={title} className="border-t border-secondary-foreground/25 pt-6"><span className="font-display text-3xl opacity-50">0{i + 1}</span><h3 className="mt-5 text-2xl">{title}</h3><p className="mt-4 leading-relaxed opacity-75">{text}</p></article>)}
          </div>
          <div className="mt-14 border-t border-secondary-foreground/25 pt-8"><p className="mb-5 text-xs uppercase opacity-60">Across the bookshelf</p><p className="font-display text-2xl leading-relaxed md:text-3xl">Memoir · Business · Self-help · Faith · Children’s · Thriller · Romance · Literary fiction</p></div>
        </div>
      </section>
    </>
  );
}

export function MarketingSection() {
  return (
    <section id="marketing" className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 md:items-end"><div><p className="eyebrow">Beyond publication</p><h2 className="mt-4 text-4xl font-light md:text-6xl">A book needs<br /><em className="text-gold">its readers.</em></h2></div><p className="max-w-lg leading-relaxed text-muted-foreground">Publication is a milestone, not the whole journey. Connect the launch, the listings and the author’s presence with a marketing strategy built around the book.</p></div>
        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {marketing.map(({ icon: Icon, title, text }) => <article key={title} className="flex gap-5 border-t border-border py-8"><Icon className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="text-2xl">{title}</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{text}</p></div></article>)}
        </div>
        <Button asChild variant="outline" size="lg" className="mt-6 h-auto whitespace-normal py-4"><a href="#contact">Discuss your book marketing <ArrowUpRight /></a></Button>
      </div>
    </section>
  );
}

export function AuthorGuidance() {
  return (
    <section id="guidance" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="eyebrow">Before the first conversation</p><h2 className="mt-4 text-4xl font-light md:text-5xl">Bring your ambition.<br /><em className="text-gold">Start where you are.</em></h2>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          <article><PenLine className="size-7 text-primary" aria-hidden="true" /><h3 className="mt-6 text-2xl">Know your starting point</h3><p className="mt-4 leading-relaxed text-muted-foreground">An idea, a draft or a published title: share what you have, what still needs work and the kind of support you’re looking for.</p></article>
          <article><BookOpen className="size-7 text-primary" aria-hidden="true" /><h3 className="mt-6 text-2xl">Picture your reader</h3><p className="mt-4 leading-relaxed text-muted-foreground">Think about who the book is for and what you want them to take away. That clarity helps shape the writing, design and positioning.</p></article>
          <article><Megaphone className="size-7 text-primary" aria-hidden="true" /><h3 className="mt-6 text-2xl">Plan before publication</h3><p className="mt-4 leading-relaxed text-muted-foreground">Start the marketing conversation early. Your launch date, existing audience and promotional materials are useful context for a considered plan.</p></article>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center"><p className="max-w-xl text-muted-foreground">Have a manuscript excerpt, a book link or a target publication date? Include it when you get in touch.</p><Button asChild variant="link" className="h-auto shrink-0 px-0"><a href="mailto:hello@blaqachraf.com">hello@blaqachraf.com <ArrowUpRight /></a></Button></div>
      </div>
    </section>
  );
}