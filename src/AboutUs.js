import React from 'react'
import './StylingAboutUs.css'
class AboutUs extends React.Component {
    render() {
        return (
            <div classNameName="mainCont">
                <div className="row about-cols" style={{ marginLeft: "25%" }}>

                    <div className="col-md-4 wow fadeInUp" >
                        <div className="about-col">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="https://cdn.discordapp.com/attachments/880434007140085811/882565569931517982/aboutus.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                        <div className="cardContant">
                                        <h1>Mohammad Alhanbali</h1>
                                        <p>Architectural Engineering</p>
                                        {/* <p>We love that guy</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="about-col">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="https://cdn.discordapp.com/attachments/880434007140085811/882564794194997288/87090765_2242164509426115_8345937203561496576_n.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                    <div className="cardContant">
                                        <h1>Ahmad Alrasheed</h1>
                                        <p>Biomedical Engineering</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* the second line */}
                <div className="row about-cols" style={{marginTop:"5%"}}>

                    <div className="col-md-4 wow fadeInUp" style={{ marginLeft: "25%" }}>
                        <div className="about-col">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="https://cdn.discordapp.com/attachments/880434007140085811/882567867885846568/me.PNG" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                    <div className="cardContant">
                                        <h1>Mona Al-obisat</h1>
                                        <p>Computer science</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="about-col">
                            <div class="flip-card" style={{ marginRight: "2rem",position:"absolute",left:"-105px" }}>
                                <div class="flip-card-inner" >
                                    <div class="flip-card-front">
                                        <img src="https://cdn.discordapp.com/attachments/880434007140085811/882567553824739378/125483005_3657107067674314_715457684775912472_n.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                    <div className="cardContant">
                                        <h1>Majed Alswaeer</h1>
                                        <p>Mechanical and Maintenance Engineering</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-4 wow fadeInUp" style={{marginTop:"5%"}}>
                        <div className="about-col">
                            <div class="flip-card" style={{ marginLeft: "115%" }}>
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="https://cdn.discordapp.com/attachments/880434007140085811/882565077453131816/khalid_hamedi.jpg" alt="Avatar" style={{ width: "300px", height: "300px" }} />
                                    </div>
                                    <div class="flip-card-back">
                                    <div className="cardContant">
                                        <h1>khalid_hamedi</h1>
                                        <p>Management Information Systems</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default AboutUs