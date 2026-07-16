import type { Metadata } from "next"; import { productsFor } from "@/lib/products"; import { CollectionPage } from "@/components/shop/CollectionPage";
export const metadata:Metadata={title:"Cats"};
export default function CatsPage(){return <CollectionPage title="Cats" description="Restful, playful and beautifully useful objects for the quieter rulers of the house." products={productsFor("cat")} filters={["Sleep","Scratch","Feed","Play"]} image="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=2200&q=90"/>}
