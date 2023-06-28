import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import HeaderScrollLink from './HeaderScrollLink';

export default function NavWrapper({ active, pathname, unCheck, headerForceHide = null }) {

  const navRef = useRef(null);

  const navHandler = useCallback((e) => {
    console.log(e.type)
    e.preventDefault()
  }, [])
  const liHandler = (e) => {
    console.log(e);
    e.stopPropagation()
  }

  const serviceOffset = useMemo(() => {
    let offset = -150
    const clientWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    if (clientWidth <= 1200)
      offset = -100
    return offset;
  }, [])
  const contactUsOffset = useMemo(() => {
    let offset = -150
    const clientWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
    if (clientWidth <= 768)
      offset = -80
    return offset;
  }, [])
  console.log("🚀 ~ file: NavWrapper.jsx:39 ~ contactUsOffset ~ contactUsOffset:", contactUsOffset)

  useEffect(() => {
    if (navRef.current === null) {
      return
    } else {
      navRef.current.addEventListener("touchstart", navHandler)
      navRef.current.addEventListener("wheel", navHandler)
      navRef.current.addEventListener("scroll", navHandler)
      navRef.current.addEventListener("touchmove", navHandler)
      const liList = navRef.current.querySelectorAll("li")
      liList.forEach(li => {
        li.addEventListener("touchstart", liHandler)
      })
    }
  }, [navRef.current]);

  const callbackHandler = useCallback((e) => {
    unCheck()
    headerForceHide && headerForceHide()
  }, [unCheck, headerForceHide])

  return <nav ref={navRef} className={`${active ? 'active' : ''}`}>
    {pathname === '/' && (
      <ul>
        <li>
          {/* offset to the most top */}
          <HeaderScrollLink
            currentId="a-about"
            offset={-200}
            to='about'
            name='about'
            callbackHandler={callbackHandler} />
        </li>
        <li>
          <HeaderScrollLink
            currentId="a-service"
            offset={serviceOffset}
            to='service'
            name='service'
            callbackHandler={callbackHandler} />
        </li>
        <li>
          <HeaderScrollLink
            currentId="a-contactUs"
            offset={contactUsOffset}
            to='contact'
            name='contact'
            callbackHandler={callbackHandler} />
        </li>
        <li>
          <HeaderScrollLink
            currentId="a-marketing"
            offset={0}
            to='/marketing'
            name='marketing'
            disableScroll
            callbackHandler={callbackHandler} />
        </li>
      </ul>
    )}
    {(pathname === '/marketing' || pathname.startsWith('/content')) && (
      <ul>
        <li>
          <HeaderScrollLink
            currentId="a-about"
            offset={0}
            to='/'
            name='about'
            disableScroll
            callbackHandler={callbackHandler} />
        </li>
        <li>
          <HeaderScrollLink
            currentId="a-service"
            offset={-10}
            to='/'
            name='service'
            disableScroll
            callbackHandler={callbackHandler} />
        </li>
        <li>
          <HeaderScrollLink
            currentId="a-contactUs"
            offset={-10}
            to='/'
            name='contact'
            disableScroll
            callbackHandler={callbackHandler} />
        </li>
        <li

        >
          <HeaderScrollLink
            currentId="a-marketing"
            offset={-10}
            to='/marketing'
            name='marketing'
            disableScroll
            callbackHandler={callbackHandler} />
        </li>
      </ul>
    )}
  </nav>;
}
