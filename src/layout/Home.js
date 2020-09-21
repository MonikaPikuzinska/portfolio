import React from 'react';

const Home = () => {
    return ( 
        <div className="container">
            <nav className="menu">
                <ul className="menu__items">
                    <li className="menu__items__item"><a className="menu__items__item">About me</a></li>
                    <li className="menu__items__item"><a className="menu__items__item">Skills</a></li>
                    <li className="menu__items__item"><a className="menu__items__item">Projects</a></li>
                    <li className="menu__items__item"><a className="menu__items__item">Contact</a></li>
                </ul>
            </nav>
            <div className="about">
                <img className="about__img"/>
                <p className="about__text"></p>
            </div>
            <div className="skills">
                <div className="skills__skill1">html</div>
                <div className="skills__skill2">css</div>
                <div className="skills__skill3">sass</div>
                <div className="skills__skill4">git</div>
                <div className="skills__skill5">js</div>
                <div className="skills__skill6">react</div>
            </div>
            <div className="projects">
                <div className="projects__project">
                    <div className="projects__project__img"></div>
                    <a className="projects__project__link">Live</a>
                    <a className="projects__project__link">Code</a>
                </div>
                <div className="projects__project">
                    <div className="projects__project__img"></div>
                    <a className="projects__project__link">Live</a>
                    <a className="projects__project__link">Code</a>
                </div>
                <div className="projects__project">
                    <div className="projects__project__img"></div>
                    <a className="projects__project__link">Live</a>
                    <a className="projects__project__link">Code</a>
                </div>
                <div className="projects__project">
                    <div className="projects__project__img"></div>
                    <a className="projects__project__link">Live</a>
                    <a className="projects__project__link">Code</a>
                </div>
            </div>
            <div className="contact">
                <h2 className="contact__title">Contact me</h2>
                <div className="contact__link">git</div>
                <div className="contact__link">linked</div>
                <div className="contact__link">mail</div>
                <footer className="footer">&copy; Copyright 2020 Monika Pikuzińska</footer>
            </div>
        </div>
     );
}
 
export default Home;