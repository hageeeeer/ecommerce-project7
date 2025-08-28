import * as z from 'zod'

export const loginSchema=  z.object({
   
    email:z.string().nonempty('required').email('not valid'),
    password:z.string().nonempty('required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
   
})


export type loginSchemaForm = z.infer<typeof loginSchema>