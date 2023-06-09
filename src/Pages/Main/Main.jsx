import React from "react";
import Layout from "../../Components/Layout/Layout";

import "./Main.css";

const Main = () => {
    return (
        <Layout>
            <div className="main_page_cont">
                <div className="h1_bg">
                    <h1 className="h1_text">
                        National IT University of Ukraine
                    </h1>
                </div>
                <div className="photo_main_cont">
                    <img width={"100%"} src="/img/bg.jpg" />
                </div>
                <div className="main_second_container">
                    <div>sadas</div>
                    <div>sadas</div>
                </div>
            </div>
        </Layout>
    );
};

export default Main;
