"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { useCart } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";

const links = [["Home", "/"], ["Dogs", "/dogs"], ["Cats", "/cats"], ["Our Story", "/about"], ["Contact", "/contact"]];

export function Header() {
  const [menu, setMenu] = useState(false);
  const { count, setOpen } = useCart();
  return <>
    <div className="bg-[#3B3028] px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[.16em] text-[#FCFAF6]">Thoughtfully selected · Delivered across Lebanon</div>
    <header className="sticky top-0 z-40 border-b border-[#3B3028]/10 bg-[#FCFAF6]/95 backdrop-blur-md">
      <div className="container-site flex h-[76px] items-center justify-between">
        <button className="grid h-10 w-10 place-content-center md:hidden" aria-label="Open menu" onClick={() => setMenu(true)}><span className="block h-px w-6 bg-current"/><span className="mt-1.5 block h-px w-6 bg-current"/></button>
        <Link href="/" className="leading-none"><strong className="serif block text-3xl tracking-[.06em]">{siteConfig.name}</strong><span className="block text-[8px] font-bold uppercase tracking-[.25em] opacity-60">{siteConfig.tagline}</span></Link>
        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[.1em] md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="transition-colors hover:text-[#B96D4A]">{label}</Link>)}</nav>
        <div className="flex items-center gap-1"><button className="hidden h-10 px-3 text-xs font-bold uppercase tracking-wider md:block" aria-label="Search">Search</button><button className="relative h-10 px-2 text-xs font-bold uppercase tracking-wider" aria-label={`Open cart with ${count} items`} onClick={() => setOpen(true)}>Bag <span className="ml-1 inline-grid h-5 min-w-5 place-content-center rounded-full bg-[#B96D4A] px-1 text-[10px] text-white">{count}</span></button></div>
      </div>
    </header>
    <div className={`fixed inset-0 z-50 bg-[#F5F0E8] p-6 transition-transform duration-300 md:hidden ${menu ? "translate-x-0" : "-translate-x-full"}`}><div className="flex justify-between"><span className="serif text-3xl">{siteConfig.name}</span><button className="text-3xl" onClick={() => setMenu(false)} aria-label="Close menu">×</button></div><nav className="mt-16 flex flex-col">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenu(false)} className="border-b border-[#3B3028]/10 py-4 serif text-4xl">{label}</Link>)}</nav><p className="absolute bottom-8 text-sm opacity-60">Made with care for pets and their people in Lebanon.</p></div>
    <CartDrawer />
  </>;
}
