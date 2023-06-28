import React from "react";
// import './css/mainContent.css'
import MiscButtonContentList from "./miscButtonContentList";
import Tag from "./tag";
import HotTrendWrapper from "./hotTrendWrapper";


export default function MainContent({ id, content, tags }) {

    return (
        <div className="main-content-wrapper">
            <div className="content-left-side">
                <h1 className="content-title">{content.title}</h1>
                <div className="content-misc">
                    <div className="content-tags">{
                        content.tag.split(',').map((tagName, index) => {
                            return <Tag key={index} tagName={tagName} index={index} />
                        })}
                    </div>
                    <div className="content-create-date">
                        {/* {`${new Date(content.createDate).toLocaleDateString()} ${new Date(content.createDate).toLocaleTimeString()}`} */}
                        {`${new Date(content.createDate).toLocaleDateString('en-ZA')}`}
                    </div>
                </div>
                <div
                    className="content-main-content"
                    dangerouslySetInnerHTML={{ __html: content.content }}
                />
                <MiscButtonContentList id={id} />
            </div>
            <HotTrendWrapper
                type={'desktop'}
                tags={tags}
            />
        </div>
    );


}
