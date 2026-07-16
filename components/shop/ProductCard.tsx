"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { useCart } from "@/components/cart/CartProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return <article className="group"><Link href={`/products/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden rounded-[22px] bg-[#F5F0E8]"><img src={product.images[0]} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-3 top-3 rounded-full bg-[#FCFAF6]/90 px-3 py-1 text-[9px] font-bold uppercase tracking-wider">{product.category}</span></Link><div className="pt-4"><div className="flex items-start justify-between gap-3"><div><Link href={`/products/${product.slug}`} className="serif text-[1.35rem] leading-none hover:text-[#B96D4A]">{product.name}</Link><p className="mt-2 text-[11px] uppercase tracking-wider opacity-50">For {product.animal}s</p></div><strong className="text-sm">${product.price}</strong></div><div className="mt-4 flex items-center justify-between"><div className="flex gap-1.5" aria-label={`Colors: ${product.colors.join(", ")}`}>{product.colors.map(color => <span key={color} title={color} className="h-4 w-4 rounded-full border border-[#3B3028]/15" style={{ background: product.colorHex[color] }} />)}</div><button onClick={() => addItem(product, product.colors[0])} className="text-[10px] font-bold uppercase tracking-[.12em] underline underline-offset-4 hover:text-[#B96D4A]">Add to bag</button></div></div></article>;
}
