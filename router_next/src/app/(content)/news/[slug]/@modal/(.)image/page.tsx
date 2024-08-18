'use client'
import {DUMMY_NEWS} from "@/constants/dummy-news";
import {notFound, useRouter} from "next/navigation";

export default function interceptorImagePage({params}: { params: { slug: string } }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const newsItemSlug = params.slug;
    const detailData =
        DUMMY_NEWS.find(data => data.slug === newsItemSlug)

    if (!detailData) {
        notFound();
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back}/>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img
                        src={`/images/news/${detailData.image}`} alt={detailData?.title}
                    />
                </div>
            </dialog>
        </>
    )

}
