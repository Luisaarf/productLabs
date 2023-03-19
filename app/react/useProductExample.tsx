import React from "react";
import { useProduct } from 'vtex.product-context'
import { useProductSummary, useProductSummaryDispatch } from 'vtex.product-summary-context/ProductSummaryContext'
import { useOrderItems } from 'vtex.order-items/OrderItems';


const useProductExample = () => {
    const productSummary = useProductSummary()
    const product = productSummary
    const dispatch = useProductSummaryDispatch()
    const productContext = useProduct()
    const { addItems } = useOrderItems()

    console.log("useProdSummary:", product)
    console.log("productContext:", productContext)

    const changeProductHovering = () => {
        return (
            <p>{product?.product?.productName}</p>
        )
    }

    const handleAddToCart = async () => {
        const data: any = product?.product
        addItems([{
            id: data?.sku?.itemId,
            quantity: product?.selectedQuantity,
            seller: "1"
        }]);
    }

    const handleBuyButton = (e: React.MouseEvent) => {
        const newName = product.product.productName + " selecionado"
        console.log(newName)
        const newProduct = {
            ...product.product,
            productName: newName
        }
        dispatch?.({
            type: "SET_PRODUCT",
            args: { product: newProduct }
        })

        e.preventDefault()
        e.stopPropagation()
        handleAddToCart()
    }

    return <>
        {product?.isHovering == true ? changeProductHovering() : null}
        <div>
            <button onClick={handleBuyButton}>Adicionar ao carrinho</button>
        </div>
    </>
}

export default useProductExample