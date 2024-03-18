import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import bill from "../assets/bill.png";
// import ai1 from "../assets/ai1.jpg";
// import home from "../assets/home.png";

const Banner = () => {
    return (
        <div id="asosiy" className="mx-auto ">
            {/* nimagadur shu banner navni orqasida turib qoldi keyin py-32 berilib pastga tushurildi shu joyiga tushunmadim??/ */}

            {/* bootstrap carousel */}
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img
                            className="d-block carousel_st w-100 "
                            src="https://it-park.uz/storage/images/news/normal/NnjGuwOaDOXZLXIMcG8VJHC4HV7QPhGlscPDTQij.png"
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block carousel_st w-100 "
                            src="https://it-park.uz/storage/images/news/normal/zjffRsXJhZbI5POlbDAK58x5LYHNNlOLMsy19wcE.png"
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block carousel_st w-100   "
                            src="https://it-park.uz/storage/images/news/normal/59TH1yLK6B95wZQBORP3p66DzrH0A6fyeEm2Uu68.png"
                            alt="Responsive image"
                        />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                ></a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                ></a>
            </div>
            {/* bootstrap carousel */}

            <div className="text-center ">
                <h1 className="text-5xl lg:text-5xl leading-snug font-bold pb-2 bg-slate-200">
                    Welcome to Our Blog
                </h1>
                {/* <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
                    Start your blog today and joing a community of writers and
                    readers who are passionate about sharing their stories and
                    idias. We offer everything you need to get started, from
                    helpful tips and tutorials.
                </p> */}
                <div>
                    <Link
                        to="/us"
                        className="fw-medium hover:text-orange-500 inline-flex items-center"
                    >
                        Learn more <FaArrowRight className="mt-1 ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
