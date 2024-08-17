import {DUMMY_NEWS} from "@/constants/dummy-news";
import {notFound} from "next/navigation";
import Link from "next/link";

export default function NewsDetailPage({params}: { params: any }) {

    const newsSlug = params.slug;
    const detailData =
        DUMMY_NEWS.find(data => data.slug === newsSlug)

    if (!detailData) {
        notFound();
    }

    return (
        <>
            <article className="news-article">
                <header>
                    <Link href={`/news/${detailData.slug}/image`}>
                        <img
                            src={`/images/news/${detailData?.image}`}
                            alt={detailData?.title}
                        />
                    </Link>
                    <h1>{detailData?.title}</h1>
                    <time dateTime={detailData?.date}>{detailData?.date}</time>
                </header>
                <p>{detailData?.content}</p>
            </article>
        </>
    )

}
