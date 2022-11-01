import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providrs: [
        Providers.Github({
            clientId: '',
            clientSecret:''
        })
    ]
})