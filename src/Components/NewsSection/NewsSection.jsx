import React from "react";

import "./NewsSection.css";

const NewsSection = () => {
    return (
        <div className="news_section_cont">
            <h3 className="news_section_title">Lorem ipsum dolor sit amet</h3>
            <div className="news_section_content_cont">
                <div className="news_section_img">
                    <img src="img/bg.jpg"/>
                </div>
                <div className="news_section_text">
                    Phasellus in mi semper, luctus elit ac, vestibulum elit.
                    Nunc ut ligula blandit, suscipit quam et, luctus ante. Nam
                    pharetra metus tellus, tempus pretium lorem ultricies at.
                    Praesent rutrum, nunc at posuere ornare, augue nulla rutrum
                    purus, eget placerat erat dolor sed purus. Morbi at
                    dignissim leo, at finibus sem. Vestibulum viverra accumsan
                    turpis nec pharetra. Phasellus risus lorem, pulvinar ut elit
                    sed, tristique mollis odio. Duis ut neque congue, blandit
                    magna ut, rhoncus tortor.
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
