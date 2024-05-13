import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
export const Slicksider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Fragment>
            <div>
                <Slider {...settings}>
                    <div>
                        <img alt="web1" src={require("../../assets/landing/web/1.png")} />
                        <h5 className="mt-3 text-white">Fresh</h5>
                    </div>
                    <div>
                        <img alt="web2" src={require("../../assets/landing/web/2.png")} />
                        <h5 className="mt-3 text-white">Seed</h5>
                    </div>
                    <div>
                        <img alt="web3" src={require("../../assets/landing/web/3.png")} />
                        <h5 className="mt-3 text-white">Clean</h5>
                    </div>
                    <div>
                        <img alt="web4" src={require("../../assets/landing/web/4.png")} />
                        <h5 className="mt-3 text-white">Trackable</h5>
                    </div>
                    <div>
                        <img alt="web5" src={require("../../assets/landing/web/5.png")} />
                        <h5 className="mt-3 text-white">Ready to Eat</h5>
                    </div>
                    <div>
                        {/* <img alt="web6" src={require("../../assets/landing/web/6.png")} /> */}
                        {/* <h5 className="mt-3 text-white">Monitored Items</h5> */}
                    </div>
                    <div>
                        <img alt="web6" src={require("../../assets/landing/web/6.png")} />
                        <h5 className="mt-3 text-white">Monitored Items</h5>
                    </div>
                </Slider>
            </div>
        </Fragment>
    )
}
export const Slicksiderwithdata = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        arrows: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear"
    };
    return (
        <Fragment>
            <div>
                <div>
                    <Slider {...settings}>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className="d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80">
                                            <i className="fa fa-quote-left fs-20 text-white-80"></i>
                                            Ever since I became a member of the farmer support platform, my entire approach to agriculture has
                                            undergone a remarkable evolution. What sets this platform apart is its unwavering commitment to
                                            providing comprehensive assistance tailored to farmers of all scales. From novices seeking
                                            guidance on basic crop care to seasoned veterans exploring cutting-edge technologies, there's
                                            something here for everyone. Personally, I've benefited immensely from the wealth of resources
                                            available, from informative articles and video tutorials to interactive webinars and one-on-one
                                            consultations with industry experts. But perhaps the most invaluable aspect of this platform is
                                            the sense of community it fosters. Through engaging in discussions, sharing experiences, and
                                            exchanging ideas with fellow farmers, I've not only expanded my knowledge base but also forged
                                            meaningful connections with like-minded individuals who understand the unique challenges and
                                            joys of agriculture. In short, the farmer support platform isn't just a tool—it's a lifeline
                                            for anyone passionate about farming and committed to continuous improvement.
                                        </p>
                                        <h3 className="title">Elizabeth</h3>
                                        <span className="post">Farmer</span>
                                        <div className="rating-stars block my-rating-5 mb-5"
                                            data-rating="4"></div>
                                        <div className="slick-controls clickable">
                                            <div className="slick-pagination">
                                                <div className="slick-page mx-1">
                                                    <span className=""></span>
                                                </div>
                                                <div className="slick-page mx-1 ">
                                                    <span className=""></span>
                                                </div>
                                                <div className="slick-page mx-1">
                                                    <span className=""></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className="d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80"><i
                                            className="fa fa-quote-left fs-20"></i> My journey with the farmer support platform began
                                            at a time when I was feeling overwhelmed and uncertain about the future of my farm. However,
                                            from the moment I signed up, I was greeted with a wealth of resources, guidance, and
                                            encouragement that reignited my passion for agriculture and instilled in me a newfound
                                            sense of confidence. What I appreciate most about this platform is its user-centric approach,
                                            which prioritizes the needs and concerns of farmers above all else. Whether I'm grappling with
                                            pest infestations, exploring organic farming methods, or navigating the complexities of
                                            marketing my produce, I know that I can always turn to the platform for reliable information,
                                            practical advice, and unwavering support. Furthermore, the platform's commitment to inclusivity
                                            and accessibility ensures that farmers from all backgrounds and regions can benefit from its
                                            offerings, fostering a sense of solidarity and camaraderie that transcends geographic boundaries.
                                            In short, the farmer support platform isn't just a resource—it's a beacon of hope for farmers
                                            everywhere, empowering us to overcome challenges, seize opportunities, and thrive in an
                                            ever-changing agricultural landscape.
                                        </p>
                                        <div className="testimonia-data">
                                            <h3 className="title">williamson</h3>
                                            <span className="post">Trader</span>
                                            <div className="rating-stars">
                                                <div className="rating-stars block my-rating-5 mb-5"
                                                    data-rating="5"></div>
                                                <div className="slick-controls clickable">
                                                    <div className="slick-pagination">
                                                        <div className="slick-page ">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="slide text-center">
                            <Row>
                                <Col xl={8} md={12} className=" d-block mx-auto">
                                    <div className="testimonia">
                                        <p className="text-white-80"><i
                                            className="fa fa-quote-left fs-20"></i> As a lifelong farmer, I've weathered my fair share
                                            of challenges, from unpredictable weather patterns to fluctuating market prices. However,
                                            nothing could have prepared me for the unprecedented disruptions brought about by the global
                                            pandemic. In the face of such uncertainty, the farmer support platform emerged as a lifeline,
                                            offering guidance, reassurance, and practical solutions to help me navigate these turbulent
                                            times. Whether I needed advice on implementing safety protocols, accessing financial
                                            assistance, or transitioning to online sales channels, the platform was there every step of
                                            the way, providing timely updates, expert insights, and a sense of solidarity that proved
                                            invaluable during moments of doubt and despair. What truly sets this platform apart is its
                                            unwavering commitment to meeting the evolving needs of farmers in an ever-changing world.
                                            From embracing digital technologies to promoting sustainable practices, the platform equips
                                            farmers with the tools, knowledge, and support they need to not only survive but thrive in
                                            the face of adversity. In short, the farmer support platform isn't just a resource—it's a 
                                            lifeline for farmers everywhere, offering hope, guidance, and community when we need it most.
                                        </p>
                                        <div className="testimonia-data">
                                            <h3 className="title">Sophie Carr</h3>
                                            <span className="post">Farmer</span>
                                            <div className="rating-stars">
                                                <div className="rating-stars block my-rating-5 mb-5"
                                                    data-rating="5"></div>
                                                <div className="slick-controls clickable">
                                                    <div className="slick-pagination">
                                                        <div className="slick-page ">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                        <div className="slick-page">
                                                            <span className=""></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </div>
            </div>
        </Fragment>
    )
}

//Scroll To Top

export const Topup = () => {
    if (window.scrollY > 30 && document.querySelector(".landing-page")) {
        let Scolls = document.querySelectorAll(".top", ".sticky");
        Scolls.forEach((e) => {
            e.classList.add("sticky-pin");
        });
    } else {
        let Scolls = document.querySelectorAll(".top", ".sticky");
        Scolls.forEach((e) => {
            e.classList.remove("sticky-pin");
        });
    }
};

window.addEventListener("scroll", Topup);