import React from "react";
import { useProduct } from 'vtex.product-context'
import {ProductSummaryTypes, ProductSummaryContext} from 'vtex.product-summary-context'
import {useProductSummary} from 'vtex.product-summary-context/ProductSummaryContext'

const useProductExample = () => {
    const PST = ProductSummaryTypes
    const PSC = ProductSummaryContext
    const productSummary = useProductSummary()
    const product = productSummary
    const productContext = useProduct()
    console.log("🚀 ~ file: useProductExample.tsx:8 ~ useProductExample ~ PST:", PST)
    console.log("🚀 ~ file: useProductExample.tsx:10 ~ useProductExample ~ PSC:", PSC)
    console.log("🚀 ~ file: ButtonAddToCart.tsx:18 ~ ButtonAddToCart ~ useProdSummary:", product)
    console.log("🚀 ~ file: useProductExample.tsx:14 ~ useProductExample ~ productContext:", productContext)
    console.log("🚀 ~ file: useProductExample.tsx:26 ~ useProductExample ~ product?.product?.items[0]?.name:", product?.product?.items[0]?.name)
    
    return <>
    {
                !product?
                 null :
                <span>{product?.product?.items[0]?.name}</span>
    }
        </>
}

export default useProductExample