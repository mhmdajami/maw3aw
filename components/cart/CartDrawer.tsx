"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export function CartDrawer() {
  const { items, count, subtotal, open, setOpen, removeItem } = useCart();
  return <>
    <button aria-label="Close cart" className={`fixed inset-0 z-50 bg-[#3B3028]/35 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} />
    <aside aria-label="Shopping cart" aria-hidden={!open} className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#FCFAF6] p-6 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex items-center justify-between border-b border-[#3B3028]/10 pb-5"><div><p className="eyebrow text-[#B96D4A]">Your selection</p><h2 className="serif text-3xl">Cart <span className="text-base">({count})</span></h2></div><button aria-label="Close cart" className="text-2xl" onClick={() => setOpen(false)}>×</button></div>
      <div className="flex-1 overflow-y-auto py-5">
        {!items.length ? <div className="grid h-full place-content-center text-center"><span className="text-4xl">○</span><h3 className="mt-4 text-3xl">A little empty in here.</h3><p className="mt-2 text-sm opacity-65">Find something lovely for your favourite roommate.</p></div> : items.map(({ product, color, quantity }) => <div key={`${product.id}-${color}`} className="flex gap-4 border-b border-[#3B3028]/10 py-4"><img src={product.images[0]} alt="" className="h-24 w-20 rounded-xl object-cover"/><div className="flex flex-1 flex-col"><Link href={`/products/${product.slug}`} onClick={() => setOpen(false)} className="serif text-xl leading-tight">{product.name}</Link><p className="mt-1 text-xs opacity-60">{color} · Qty {quantity}</p><div className="mt-auto flex items-end justify-between"><strong>${(product.price * quantity).toFixed(2)}</strong><button className="text-xs underline opacity-60" onClick={() => removeItem(product.id, color)}>Remove</button></div></div></div>)}
      </div>
      {!!items.length && <div className="border-t border-[#3B3028]/10 pt-5"><div className="mb-4 flex justify-between"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div><Link href="/cart" onClick={() => setOpen(false)} className="btn btn-dark w-full">View cart & order</Link><p className="mt-3 text-center text-xs opacity-55">Delivery calculated when your order is confirmed.</p></div>}
    </aside>
  </>;
}
