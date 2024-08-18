import {DUMMY_NEWS} from "@/constants/dummy-news";
import NewsList from "@/components/NewsList";

export default function NewsPage() {
    return (
        <>
            <h2>News Page</h2>
            <NewsList news={DUMMY_NEWS}/>
        </>
    )
}
