import React from "react";

const Home = () => {
    return (
        <div className="hero">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/CB5C08B8-E196-4604-AFE5-2F1D93A25767.png" class="d-block w-100"/>
                    <div class="carousel-caption">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/CB5C08B8-E196-4604-AFE5-2F1D93A25767.png" class="d-block w-100"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/CB5C08B8-E196-4604-AFE5-2F1D93A25767.png" class="d-block w-100"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/1B87D60A-E56B-4366-95C8-E6D02E1B2CBC.svg" aria-hidden="true"/>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/292765E5-EC6B-4C0A-B916-4A7242FEBA2E.svg" aria-hidden="true"/>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className="card2">
                <div className="row">
                    <div className="col-sm-4">
                        <h4>Features</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/F25D4AEE-2A07-43CE-BD1C-9D71B8010C50.svg"/>
                            <span className="ms-3">Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="mt-5">
                            <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/CF5B0337-5AD2-4DED-93F7-1D0D4F1F431B.svg"/>
                            <span className="ms-3">Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/AB8B1F2A-57CD-4015-BB22-8526E4F2329F.svg"/>
                            <span className="ms-3">Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="mt-5">
                            <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B7FE2104-BA05-4ECD-9E70-8A65C9FDB158.svg"/>
                            <span className="ms-3">Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card3"></div>
            <div className="card4">
                <h2 className="text-white">On all your screens at home and on the go</h2>
                <div className="row">
                    <div className="col-sm-3 rectangle"></div>
                    <div className="col-sm-3 rectangle"></div>
                    <div className="col-sm-3 rectangle"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;