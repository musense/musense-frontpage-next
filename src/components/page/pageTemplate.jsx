import React, { useState, useEffect, useRef, useCallback } from 'react'
import styles from './pageTemplate.module.css'

const PageTemplate = ({
    lastSelectedPageRef,
    setCurrPage,
    currentPage: currentPageProp,
    totalPage,
    __MAX_SHOW_NUMBERS__ = 5
}) => {
    lastSelectedPageRef.current = currentPageProp
    const prevPage = useCallback(() => {
        setCurrPage(page => page - 1)
    }, [setCurrPage])
    const nextPage = useCallback(() => {
        setCurrPage(page => page + 1)
    }, [setCurrPage])
    const setPage = useCallback((page) => {
        setCurrPage(page)
    }, [setCurrPage])

    const [showArray, setShowArray] = useState(null);
    console.log("🚀 ~ file: pageTemplate.jsx:22 ~ showArray:", showArray)
    const currentPage = currentPageProp
    const middleRightPoint = Math.ceil(__MAX_SHOW_NUMBERS__ / 2)
    const middleLeftPoint = Math.floor(__MAX_SHOW_NUMBERS__ / 2)

    const anchorButton = ({ cb, styles, label, index = null, setSelectedPage }) => {
        setSelectedPage
        if (index === null) {
            return (<a onClick={cb} value="<"
                // href={`${localStorage.getItem('pathname')}`}
                className={styles}>{decodeURIComponent(label)}</a>)
        }
        return (<a onClick={cb} value="<" key={index}
            // href={`${localStorage.getItem('pathname')}`}
            className={styles}>{decodeURIComponent(label)}</a>)
    }

    useEffect(() => {
        if (!currentPage) return
        if (!__MAX_SHOW_NUMBERS__) return
        console.log("🚀 ~ file pageTemplate.jsx:16 ~ totalPage:", totalPage)
        console.log("🚀 ~ file pageTemplate.jsx:16 ~ currentPage:", currentPage)
        console.log("🚀 ~ file pageTemplate.jsx:16 ~ middlePoint:", middleRightPoint)
        const array = Array.from(Array(__MAX_SHOW_NUMBERS__), (_, index) => index - middleLeftPoint)
            .map(item => item + currentPage);
        setShowArray(array);
        // currentPageRef.current = currentPage
    }, [__MAX_SHOW_NUMBERS__, currentPage]);


    return (
        <div className={styles['page-wrapper']}>
            <div>
                {
                    anchorButton({
                        cb: () => { prevPage() },
                        styles: currentPage === 1 ? styles.displayNone : "",
                        label: encodeURIComponent('<')
                    })
                }
                {totalPage - currentPage < middleLeftPoint && totalPage > __MAX_SHOW_NUMBERS__ && (
                    <p>···</p>
                )}
                {showArray && showArray
                    .map((item, index) => {
                        if (item <= 0)
                            return;
                        if (item > totalPage)
                            return;
                        // console.log(`🚀 ~ file pageTemplate.jsx: item `, item);
                        return anchorButton({
                            index: index,
                            cb: () => setPage(item),
                            styles: currentPage === item ? styles.active : "",
                            label: encodeURIComponent(item)
                        })
                    })}
                {currentPage < middleRightPoint && totalPage > __MAX_SHOW_NUMBERS__ && (
                    <p>···</p>
                )}
                {
                    anchorButton({
                        cb: () => nextPage(),
                        styles: currentPage === totalPage || totalPage === 0 ? styles.displayNone : "",
                        label: encodeURIComponent('>')
                    })
                }
            </div>
        </div>
    );
}


export default PageTemplate