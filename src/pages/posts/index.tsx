import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

type Props = {
    tags: string[]
    posts: [{}]
}


const Posts: NextPage<Props> = (props) => {
    const router = useRouter()
    const pushToPost = () => {
        router.push("posts/post")
    }

    return (
        <>
        <Head>
            
        </Head>
        </>
    )
}