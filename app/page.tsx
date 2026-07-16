import Link from "next/link";
import { products } from "@/lib/products";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const gallery = [
  "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80",
];

export default function Home() {
  return <>
    <section className="relative min-h-[78svh] overflow-hidden bg-[#6F7654]">
      <img src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=2200&q=90" alt="A dog relaxing in a warm, stylish home" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3B3028]/75 via-[#3B3028]/30 to-transparent"/>
      <div className="container-site relative flex min-h-[78svh] items-end py-14 md:items-center md:py-20"><div className="fade-up max-w-2xl text-[#FCFAF6]"><p className="eyebrow mb-5 text-[#E6D8C4]">Curated in Lebanon · Loved at home</p><h1 className="text-[clamp(3.2rem,7vw,6.4rem)] leading-[.88] tracking-[-.04em]">Accessories made for the pets who make your house a home.</h1><p className="mt-6 max-w-xl text-sm leading-7 text-white/80 md:text-base">A curated collection of thoughtful, stylish and practical accessories for dogs and cats in Lebanon.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/dogs" className="btn btn-light">Shop Dogs</Link><Link href="/cats" className="btn border-white/50 text-white hover:bg-white hover:text-[#3B3028]">Shop Cats</Link></div></div></div>
    </section>

    <section className="section bg-[#F5F0E8]"><div className="container-site text-center"><p className="eyebrow text-[#B96D4A]">The MAW3AW way</p><h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5rem)] leading-none">We choose fewer products, but better ones.</h2><p className="mx-auto mt-6 max-w-2xl text-sm leading-7 opacity-65 md:text-base">Every MAW3AW piece is selected for its design, quality and ability to fit beautifully into your everyday life.</p></div></section>

    <section className="section"><div className="container-site"><SectionHeading eyebrow="Shop by companion" title="For every kind of homebody."/><div className="mt-10 grid gap-5 md:grid-cols-2"><CollectionCard href="/dogs" title="Dogs" text="For walks, playtime and everyday adventures." image="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=85" /><CollectionCard href="/cats" title="Cats" text="For climbing, resting and ruling the house." image="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1400&q=85" /></div></div></section>

    <section className="section bg-[#F5F0E8]"><div className="container-site"><div className="flex items-end justify-between"><SectionHeading eyebrow="The first drop" title="Objects worth living with."/><Link href="/dogs" className="hidden text-xs font-bold uppercase tracking-wider underline underline-offset-4 md:block">Shop all</Link></div><div className="mt-10"><ProductGrid products={products.filter(p => p.featured).slice(0,4)} /></div></div></section>

    <section className="section"><div className="container-site"><SectionHeading eyebrow="Why MAW3AW" title="A small shop with standards." align="center"/><div className="mt-12 grid gap-4 md:grid-cols-3"><ValueCard number="01" title="Curated, not crowded" text="We select only products we genuinely believe are worth bringing into your home."/><ValueCard number="02" title="Made for real life" text="Beautiful accessories that are also practical, comfortable and durable."/><ValueCard number="03" title="Delivered across Lebanon" text="Simple ordering and local delivery directly to your door."/></div></div></section>

    <section className="container-site relative min-h-[600px] overflow-hidden rounded-[28px] text-white"><img src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=2000&q=85" alt="Cat at home in a calm interior" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-[#3B3028]/45"/><div className="relative flex min-h-[600px] max-w-xl flex-col items-start justify-end p-8 md:p-14"><p className="eyebrow text-[#D8C5A5]">Home is shared</p><h2 className="mt-4 text-5xl leading-none md:text-7xl">Their world is part of yours.</h2><p className="mt-5 text-sm leading-7 text-white/80">Pet accessories should feel just as considered as the rest of your home.</p><Link href="/about" className="btn btn-light mt-7">Discover Our Story</Link></div></section>

    <section className="section"><div className="container-site grid items-center gap-8 rounded-[28px] bg-[#D8C5A5] p-8 md:grid-cols-2 md:p-14"><div><p className="eyebrow text-[#B96D4A]">Notes from the pack</p><h2 className="mt-4 text-5xl leading-none">Join the pack.</h2><p className="mt-4 max-w-md text-sm leading-7 opacity-65">Receive new drop announcements, pet stories and special offers.</p></div><NewsletterForm /></div></section>

    <section className="pb-20 md:pb-28"><div className="container-site"><SectionHeading eyebrow="@maw3aw" title="Follow the beautiful chaos." text="Dogs, cats, beautiful spaces and the occasional chaos."/><div className="mt-8 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">{gallery.map((src,i)=><a href="#" key={src} aria-label={`Instagram post ${i+1}`} className="group aspect-square overflow-hidden rounded-xl"><img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110"/></a>)}</div></div></section>
  </>;
}

function CollectionCard({ href,title,text,image }: { href:string;title:string;text:string;image:string }) { return <Link href={href} className="group relative aspect-[4/5] overflow-hidden rounded-[26px] md:aspect-[5/4]"><img src={image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#3B3028]/75 via-transparent"/><div className="absolute bottom-0 p-7 text-white md:p-10"><h3 className="text-5xl">{title}</h3><p className="mt-2 text-sm text-white/75">{text}</p><span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[.14em] underline underline-offset-4">Explore {title}</span></div></Link> }
function ValueCard({number,title,text}:{number:string;title:string;text:string}) { return <article className="rounded-[22px] bg-[#F5F0E8] p-7 md:p-9"><span className="serif text-2xl text-[#B96D4A]">{number}</span><h3 className="mt-10 text-3xl leading-none">{title}</h3><p className="mt-4 text-sm leading-7 opacity-60">{text}</p></article> }
