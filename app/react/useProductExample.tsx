import React from "react";
import { useProduct } from 'vtex.product-context'
// import { ProductSummaryTypes, ProductSummaryContext } from 'vtex.product-summary-context'
import { useProductSummary } from 'vtex.product-summary-context/ProductSummaryContext'

const useProductExample = () => {
    // const PST = ProductSummaryTypes
    // const PSC = ProductSummaryContext
    const productSummary = useProductSummary()
    // const dispatch = useProductDispatch()
    const product = productSummary
    const productContext = useProduct()
    // console.log("🚀 ~ file: useProductExample.tsx:8 ~ useProductExample ~ PST:", PST)
    // console.log("🚀 ~ file: useProductExample.tsx:10 ~ useProductExample ~ PSC:", PSC)
    // console.log("🚀 ~ file: useProductExample.tsx:26 ~ useProductExample ~ product?.product?.items[0]?.name:", product?.product?.items[0]?.name)
    
    console.log("useProdSummary:", product)
    console.log("productContext:", productContext)

    // const changeProductBuyButton = () => {
    //     return (
    //         dispatch?.({
    //             type: "SET_BUY_BUTTON_CLICKED",
    //             args: { args: { clicked: true } }
    //         })
    //     )
    // }

    return <>
        {/* {!product? null : <p>{product?.product?.items[0]?.name}</p>} */}
        {/* {product?.isHovering == true && productContext?.buyButton?.clicked == false && productContext?.buyButton?.clicked == undefined ? <p>{changeProductBuyButton()}</p> : null} */}
        {/* {!productContext? null : <p>{productContext?.product?.productName}</p>} */}
    </>
}

export default useProductExample