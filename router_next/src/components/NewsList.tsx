import Link from "next/link";

export default function NewsList({news}: { news: any[] }) {

    return (
        <>
            <ul className="news-list">
                {news.map(data =>
                    (<li key={data.id}>
                        <Link href={`/news/${data.slug}`}>
                            {/* todo img => Image */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={`/images/news/${data.image}`} alt={data.title}/>
                            <span>{data.title}</span>
                        </Link>
                    </li>)
                )}
            </ul>
        </>
    )

}