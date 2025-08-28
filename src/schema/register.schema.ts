import * as z from 'zod'

export const regsiterSchema=  z.object({
    name:z.string().nonempty('required').min(2).max(10),
    email:z.string().nonempty('required').email('not valid'),
    password:z.string().nonempty('required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
    rePassword:z.string(),
    phone:z.string().nonempty('required').regex(/^(002)?(01)[0-25]\d{8}$/)
}).refine((data)=>data.rePassword==data.password,{
    path:['rePassword'],
    message:'not the same'
})

export type registerSchemaForm = z.infer<typeof regsiterSchema>