import React from "react";
import Layout from "../../Components/Layout/Layout";
import Slider from "../../Components/Slider/Slider";

import "./Photos.css"

const Photos = () => {
    return (
        <Layout>
            <div className="photos_main_container">
                <Slider />
            </div>
        </Layout>
    );
};

export default Photos;
