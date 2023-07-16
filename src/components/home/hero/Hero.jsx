import React from 'react';
import "./hero.css";
import Title from "../../common/title/Title";

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Title subtitle='Welcome To Academia' title="Best Online Education"/>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </p>
                        <div className="button btn">
                            <button className="primary-btn">
                                Get Started Now <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                            <button>
                                View Course <i className="fa fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="margin"></div>
        </>
    );
};

export default Hero;