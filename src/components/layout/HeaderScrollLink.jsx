import React, { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import styles from './css/headerScrollLink.module.css'
import Link from 'next/link';
import { useAppContext } from "@store/context";
import useInitial from '@services/useInitial';
const navMap = new Map([
  ['about', {
    name: {
      en: 'About',
      ch: '關於陌聲',
    },
  }],
  ['contact', {
    name: {
      en: 'Contact Us',
      ch: '聯絡我們',
    },
  }],
  ['contactUs', {
    name: {
      en: null,
      ch: null,
    },
  }],
  ['service', {
    name: {
      en: 'Service',
      ch: '服務項目',
    },
  }],
  ['marketing', {
    name: {
      en: 'Marketing',
      ch: '行銷趨勢',
    },
  }],
])

const HeaderScrollLink = React.forwardRef(({
  offset,
  to,
  name,
  className,
  disableScroll = false,
  callbackHandler = null
}, ref) => {
  const { state, dispatch } = useAppContext();
  useInitial({
    state,
    dispatch
  });
  const destRef = useRef(null)
  const [destTop, setDestTop] = useState(null);

  useEffect(() => {
    if (!disableScroll) {
      destRef.current = document.querySelector(to)
      if (((!ref || !ref.current) || !destRef.current)) {
        return
      } else {
        ref.current.addEventListener('click', scrollHandler)
      }
      const myLinkRef = ref.current
      return () => {
        myLinkRef && myLinkRef.removeEventListener('click', scrollHandler)
      }
    }
  }, [ref, destRef, disableScroll]);

  const scrollHandler = useCallback((e, destObject) => {
    console.log("🚀 ~ file: HeaderScrollLink.jsx:87 ~ scrollHandler ~ destObject:", destObject)
    if (!destObject) return
    if (!disableScroll) {
      e.preventDefault()
      const { top: destTop } = destObject && destObject.getBoundingClientRect()
      if (state.clientWidth <= 768) {
        window.scrollTo({
          top: destTop + offset,
          behavior: 'smooth',
        })
      } else {
        window.scrollBy({
          top: destTop + offset,
          behavior: 'smooth',
        })
      }
      callbackHandler && callbackHandler()
    }
  }, [callbackHandler, to, offset, destTop, state.clientWidth]);

  const color = name === 'marketing' ? 'blue' : 'orange'
  const mainClassName = className ? className : styles['nav-button']

  return (<Link
    ref={ref}
    alt={name}
    title={navMap.get(name).name.ch}
    onClick={(e) => scrollHandler(e, destRef.current)}
    href={`${to}`}
    className={mainClassName}
  >
    <div className={`${styles['bubble']} ${styles[color]}`} />
    <div className={styles['nav-text-wrapper']}>
      <div>{navMap.get(name).name.en}</div>
      <div>{navMap.get(name).name.ch}</div>
    </div>
  </Link>)
})

export default HeaderScrollLink