"use client"

import { useSession } from "next-auth/react"
import GoogleAuth from "./GoogleAuth"
import { useRouter } from "next/navigation"

export default function Auth() {
    const router = useRouter()
    const { status, data: session } = useSession()

    if (status === "authenticated") {
        router.push('/categories')
    } else {
        return <GoogleAuth />
    }
}