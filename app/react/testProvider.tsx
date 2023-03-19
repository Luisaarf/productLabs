import React from "react";
// import { ProductSummaryContext } from 'vtex.product-summary-context'
import { useProduct } from 'vtex.product-context'
// import ProductImage from './ProductSummaryImage'

const testProvider = () => {

    const productContext = useProduct()
    console.log(productContext)
    // const imgSrc = productContext?.product?.items[0]?.images[0]?.imageUrl

    return <>
    {/* <Image src={imgSrc} width={"20px"}/>  */}
    </>
}

export default testProvider