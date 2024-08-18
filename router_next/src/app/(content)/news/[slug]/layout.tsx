import React from "react";

export default function NewsDetailLayout(
    {children, modal}: { children: React.ReactNode, modal: any }
) {

    return (
        <>
            {modal}
            {children}
        </>
    )

}