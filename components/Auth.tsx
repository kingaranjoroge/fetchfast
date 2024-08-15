"use client"

import { useSession } from "next-auth/react"
import GoogleAuth from "./GoogleAuth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Auth() {
    const router = useRouter()
    const { status } = useSession()

    useEffect(() => {
        if (status === "authenticated") {
            router.push('/categories')
        }
    }, [status, router])

    if (status === "authenticated") {
        return null; // or a loading spinner if you prefer
    } else {
        return <GoogleAuth />
    }
}