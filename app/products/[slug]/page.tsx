import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products } from "@/lib/products";
import { ProductDetail } from "@/components/shop/ProductDetail";
import { ProductGrid } from "@/components/shop/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const product=getProduct(slug);return product?{title:product.name,description:product.description}:{} }
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=getProduct(slug);if(!product)notFound();const related=products.filter(p=>p.animal===product.animal&&p.id!==product.id).slice(0,4);return <><ProductDetail product={product}/><section className="section bg-[#F5F0E8]"><div className="container-site"><SectionHeading eyebrow="You may also like" title="Keep exploring."/><div className="mt-10"><ProductGrid products={related}/></div></div></section></>}
