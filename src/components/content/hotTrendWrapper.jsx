import React from 'react'
import Tag from './tag';

export default function HotTrendWrapper({ tags, type }) {
    return <div className={`content-right-side ${type}`}>
        <div className="hot-trend"></div>
        <div className="hot-tag-wrapper">
            {tags && tags.map((tagName, index) => {
                return <Tag key={index} tagName={tagName} index={index} />;
            })}
        </div>
    </div>;
}
