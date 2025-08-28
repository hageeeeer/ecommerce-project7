'use server'

import { getTokenAuth } from "@/utlitis/getTokenAuth"

type shippingAddressType = {
    city: string,
    details: string,
    phone: string
}

export async function payment(cartId: string, shippingAddress: shippingAddressType) {

    const token = await getTokenAuth()
    if (!token)
        throw new Error('login first!')
    const res = await fetch(`${process.env.API}/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
        method: 'POST',
        body: JSON.stringify({ shippingAddress }),
        headers: {
            token,
            'Content-type': 'apllication/json'
        }
    })

    const payload = await res.json()
    return payload

}