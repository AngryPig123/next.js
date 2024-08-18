import {DUMMY_NEWS} from "@/constants/dummy-news";
import {notFound} from "next/navigation";

export default function ImagePage({params}: { params: { slug: string } }) {

    const newsItemSlug = params.slug;
    const detailData =
        DUMMY_NEWS.find(data => data.slug === newsItemSlug)

    if (!detailData) {
        notFound();
    }

    return (
        <>
            <div className="fullscreen-image">
                <img src={`/images/news/${detailData.image}`} alt={detailData?.title}/>
            </div>
        </>
    )

}