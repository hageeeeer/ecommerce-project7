'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchemaForm, regsiterSchema } from '@/schema/register.schema'
export default function Register() {

    const form = useForm<registerSchemaForm>({
        resolver: zodResolver(regsiterSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        }
    })

    function OnSubmit(data: registerSchemaForm) {
        console.log(data);
    }

    return (
        <div className='py-10'>
            <h2>Register Now:</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(OnSubmit)} className='my-5 mx-auto w-2/3'>
                    <FormField
                        name='name'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <Label>name:</Label>
                                <FormControl>
                                        <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <Label>email:</Label>
                                <FormControl>
                                    <Input type='email' {...field} />
                                </FormControl>
                                <FormMessage/>
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
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name='rePassword'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <Label>rePassword:</Label>
                                <FormControl>
                                    
                                        <Input type="password" {...field} autoComplete='off' />
                                       
                                    
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name='phone'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <Label>phone:</Label>
                                <FormControl>
                                    <Input type='phone' {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button className='my-5 block ml-auto hover:bg-main cursor-pointer bg-main text-white'>Register</Button>
                </form>
            </Form>
        </div>
    )
}
