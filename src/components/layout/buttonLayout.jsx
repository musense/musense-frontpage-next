import Link from 'next/link';
import HeaderScrollLink from './HeaderScrollLink';
import { useAppContext } from "@store/context";
import React from "react";

export default function ButtonLayout({ path }) {
    const { state, dispatch } = useAppContext();
    // console.log("🚀 ~ file: buttonLayout.jsx:4 ~ ButtonLayout ~ path:", path)
    const disable = path === '/' ? false : true
    const contactUsOffset = React.useMemo(() => {
        let offset = -150
        const clientWidth = state.clientWidth
        if (clientWidth <= 768)
          offset = -80
        return offset;
      }, [state.clientWidth])
    return (
        <div className='btn-wrapper'>
            <Link href="https://www.facebook.com/musense.marketing" target="_blank" className="fixedBtn fb-btn"></Link>
            <Link href="https://www.instagram.com/musense.marketing/" target="_blank" className="fixedBtn ig-btn"></Link>
            <HeaderScrollLink
                offset={contactUsOffset}
                className={`fixedBtn email-btn`}
                to={disable ? '/' : '#contact'}
                name='contactUs'
                disableScroll={disable}
            />
        </div>
    )
}
