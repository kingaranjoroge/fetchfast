'use client'

import Image from "next/image"
import { signIn } from "next-auth/react";

export default function GoogleAuth() {
    return (
        <button 
        className="btn btn-wide normal-case"
        onClick={() => signIn("google")}
        >
            <Image src="/google-logo.png" alt="Google Logo" height={20} width={20} />
            Continue With GOOGLE
        </button>
    )
}