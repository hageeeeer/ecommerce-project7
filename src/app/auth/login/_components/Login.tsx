'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchemaForm, loginSchema } from '@/schema/login.schema'
import { signIn } from 'next-auth/react'
export default function Login() {

    const form = useForm<loginSchemaForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {

            email: '',
            password: '',

        }
    })

    function signInGitHub() {
        signIn('github', {
            callbackUrl: '/'
        })
    }
    async function OnSubmit(data: loginSchemaForm) {
        const payload = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
            callbackUrl: '/'
        })

        if (payload?.ok) {
            window.location.href = payload.url || ''
        }
        else {
            console.log(payload?.error)
        }
    }

    return (
        <div>
            <h2>Login Now:</h2>

            <Form {...form} >
                <form onSubmit={form.handleSubmit(OnSubmit)} className="my-5 mx-auto w-2/3">

                    <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <Label>email:</Label>
                                <FormControl>
                                    <Input type='email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name='password'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <Label>password:</Label>
                                <FormControl>
                                    <Input type='password' autoComplete='off' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button className='my-5 bg-main w-full text-white'>Login</Button>
                </form>
            </Form>
            <Button className="mx-auto block  w-2/3" onClick={signInGitHub}>Login with github <i className='fa-brands fa-github'></i>  </Button>
        </div>
    )
}
