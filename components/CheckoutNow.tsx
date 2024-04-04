'use client';
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/app/lib/sanity";
import { ProductCart } from "./AddToBag";




export default function CheckoutNow({currency, description,image, name, price,price_id}: ProductCart){

    function buyNow(priceId:string){
        checkoutSingleItem(priceId)
    }
    const {checkoutSingleItem} = useShoppingCart();

    const product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:urlFor(image).url(),
        id:"abcdefghijklmnop",
        price_id:price_id
    }
    return(
        <Button variant={"secondary"} onClick={()=>{
            buyNow(product.price_id)
        }}>
            Checkout now
        </Button>
    )
}