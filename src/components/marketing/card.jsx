import Image from 'next/image';
import React from 'react';

export default function Card({ id, imgSrc, imgAltText, tag, content, createDate }) {

  tag ||= '';
  content ||= '';
  createDate ||= '';
  return (
    <>
      <a
        className='card'
        href={`/content/${id}`}
      >
        <Image className='card-img' src={imgSrc} alt={imgAltText} />
        <div className='card-content'>
          <span className='ellipsis'>
            {content}
          </span>
        </div>
        <div className='card-footer'>
          <div className='card-tag'>{tag}</div>
          <div className='card-create-date'>{createDate}</div>
        </div>
      </a>
    </>
  );
}
