import React, { useState, useEffect } from "react";
import MarketingButtonList from '@components/marketing/marketingButtonList';
import CardWrapper from '@components/marketing/cardWrapper';
import MiscButtonList from '@components/marketing/miscButtonList';
import HotContent from '@components/marketing/hotContent';
import { getTitleContents } from "@services/titleContents";

export default function Page({
    contents = null,
    apiUrl = null
}) {
    const [titleContents, setTitleContents] = useState(null);

    useEffect(() => {
        const payload = {
            apiUrl: apiUrl
        };
        getTitleContents(payload)
            .then(res => {
                console.log("🚀 ~ file: index.jsx:22 ~ useEffect ~ res:", res)
                setTitleContents(res)
            })
    }, [apiUrl]);
    return (<>
        <MarketingButtonList />
        {titleContents && <CardWrapper contents={titleContents} />}
        <MiscButtonList />
        <HotContent />
    </>);
}
