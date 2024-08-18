interface ArchiveLayoutType {
    children: any,
    archive: any,
    latest: any,
}

export default function ArchiveLayout(archiveLayoutType: ArchiveLayoutType) {

    return (
        <>
            <div>
                <h1>News Archive</h1>
                <section id="archive-filter">
                    {archiveLayoutType.archive}
                </section>
                <section id="archive-latest">
                    {archiveLayoutType.latest}
                </section>
            </div>
        </>
    )

}
