

export async function getProductsInCat(cartId:string)
{
    const res = await fetch(`${process.env.API}/products?category[in]=${cartId}`)
    const {data} = await res.json()
    return data
}