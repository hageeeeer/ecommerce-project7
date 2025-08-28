import * as z from 'zod'

export const adressSchema=  z.object({
   
    city:z.string(),
    phone:z.string(),
    details:z.string(),
   
   
})


export type adressSchemaForm = z.infer<typeof adressSchema>