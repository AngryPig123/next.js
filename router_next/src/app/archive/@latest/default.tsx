import {getLatestNews} from "@/lib/news";
import NewsList from "@/components/NewsList";

export default function LatestDefault() {
    const latestNews = getLatestNews();
    return (
        <>
            <h2>Latest News Page Page</h2>
            <NewsList news={latestNews} />
        </>
    )
}