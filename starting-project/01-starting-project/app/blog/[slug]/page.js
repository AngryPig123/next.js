import Link from "next/link";



export default function BlogPostPage({ params }) {

    console.log(params);

    return (
        <>
            <main>
                <h1>Blog Post</h1>
                <p><Link href="/blog/post-1">Post 1</Link></p>
                <p><Link href="/blog/post-2">Post 2</Link></p>
            </main>
        </>
    );

}