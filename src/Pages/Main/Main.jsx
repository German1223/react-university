import React from "react";
import Layout from "../../Components/Layout/Layout";

import "./Main.css";

const Main = () => {
    return (
        <Layout>
            <div className="main_page_cont">
                <div className="photo_main_cont">
                    <h1 className="h1_text">National IT University of Ukraine</h1>
                    <img width={"100%"} src="/img/bg.jpg" />
                </div>
            </div>
        </Layout>
    );
};

export default Main;
