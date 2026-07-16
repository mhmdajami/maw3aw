import type { Metadata } from "next"; import { productsFor } from "@/lib/products"; import { CollectionPage } from "@/components/shop/CollectionPage";
export const metadata:Metadata={title:"Dogs"};
export default function DogsPage(){return <CollectionPage title="Dogs" description="Considered pieces for long walks, slow mornings and every adventure in between." products={productsFor("dog")} filters={["Walk","Home","Travel","Play"]} image="https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=2200&q=90"/>}
