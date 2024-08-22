'use client'

import {
    Button,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input
} from '@ui'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from '@libs'

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.'
    })
})

export default function Home() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: ''
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // console.log(values)

        api.index.get()
    }

    return (
        <main className="flex flex-col w-full min-h-screen">
            <Form {...form}>
                <form
                    data-testid="form"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="max-w-xs w-full mx-auto my-auto space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            data-testid="input-username"
                                            placeholder="shadcn"
                                            {...field}
                                            onChange={(event) => {
                                                console.log(event)
                                                field.onChange(event)
                                            }}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </main>
    )
}
