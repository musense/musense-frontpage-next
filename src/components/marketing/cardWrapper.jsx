import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Card from './card';
import PageTemplate from "@components/page/pageTemplate";



export default function CardWrapper({ contents }) {

    const cardWrapperRef = useRef(null)
    const lastSelectedPageRef = useRef(1)
    const __MAX_VIEW_COUNT__ = 6

    const [__ALL_CONTENTS__, setAllContents] = useState(null);
    const [viewContents, setViewContents] = useState(null);
    const state = {
        clientWidth: 1920
    }
    const [totalPage, setTotalPage] = useState(null);
    const [currPage, setCurrPage] = useState(1);

    useEffect(() => {
        if (!contents) return
        const data = [
            ...contents,
            ...contents,
            ...contents,
            ...contents,
            ...contents,
        ]
        console.log("🚀 ~ file: cardWrapper.jsx:30 ~ useEffect ~ data:", data)
        setTotalPage(Math.ceil(data.length / __MAX_VIEW_COUNT__));
        setAllContents(data)
    }, [contents]);

    useMemo(() => {
        if (!__ALL_CONTENTS__) return
        console.log("🚀 ~ file: cardWrapper.jsx:36 ~ useMemo ~ lastSelectedPageRef.current:", lastSelectedPageRef.current)
        console.log("🚀 ~ file: cardWrapper.jsx:36 ~ useMemo ~ currPage:", currPage)
        const start = (currPage - 1) * __MAX_VIEW_COUNT__
        const end = start + __MAX_VIEW_COUNT__
        const slicedContents = __ALL_CONTENTS__.slice(start, end)
        if (lastSelectedPageRef.current > currPage) {
            setViewContents(contents => contents ? [...contents, ...slicedContents] : slicedContents)
            cardWrapperRef.current.classList.add("toRight")
        } else if (lastSelectedPageRef.current < currPage) {
            setViewContents(contents => contents ? [...slicedContents, ...contents] : slicedContents)
            cardWrapperRef.current.classList.add("toLeft")
        } else if (lastSelectedPageRef.current === currPage && currPage === 1) {
            setViewContents(slicedContents)
        }
        setTimeout(() => {
            if (cardWrapperRef.current.classList.contains("toRight")) {
                setViewContents(contents => contents.length > 6 ? contents.slice(__MAX_VIEW_COUNT__, __MAX_VIEW_COUNT__ * 2) : contents)
                cardWrapperRef.current.classList.remove("toRight")
            } else if (cardWrapperRef.current.classList.contains("toLeft")) {
                setViewContents(contents => contents.length > 6 ? contents.slice(0, __MAX_VIEW_COUNT__) : contents)
                cardWrapperRef.current.classList.remove("toLeft")
            }
        }, 500)
    }, [__ALL_CONTENTS__, currPage]);


    const Page = useCallback(() => {
        if (state.clientWidth < 400) {
            return <PageTemplate
                lastSelectedPageRef={lastSelectedPageRef}
                setCurrPage={setCurrPage}
                currentPage={currPage}
                totalPage={totalPage}
                __MAX_SHOW_NUMBERS__={3}
            />
        } else {
            return <PageTemplate
                lastSelectedPageRef={lastSelectedPageRef}
                setCurrPage={setCurrPage}
                currentPage={currPage}
                totalPage={totalPage}
                __MAX_SHOW_NUMBERS__={5}
            />
        }
    }, [setCurrPage, currPage, state.clientWidth, totalPage])

    return <>
        <div ref={cardWrapperRef} className='card-wrapper'>

            {viewContents && viewContents.map((content, index) => {
                return (
                    <Card
                        key={index}
                        tag={content.tag}
                        imgSrc={content.img.src}
                        imgAltText={content.img.altText}
                        id={index}
                        content={content.content}
                        createDate={content.createDate} />
                );
            })}
        </div>
        <Page />
    </>
}