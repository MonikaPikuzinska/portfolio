import React from 'react';
import menu from "../icons/burger.svg";
import close from "../icons/close.svg";
import me from "../img/120090798_396326408430009_5887312141444674031_n.jpg";
import htmll from "../icons/html-5.svg";
import csss from "../icons/css-3.svg";
import sasss from "../icons/sass.svg";
import js from "../icons/javascript-1.svg";
import reactt from "../icons/react.svg";
import gitt from "../icons/github.svg";
import bookstore from "../img/bookstore.JPG";
import quiz from "../img/quiz.JPG";
import game from "../img/game.JPG";
import marathon from "../img/marathon.JPG";
import linkedin from "../icons/linkedin.svg";
import mail from "../icons/email.svg";

const Home = () => {
    const handleShowMenu = () => {
        document.querySelector('.menu__items').classList.toggle('active')
      };
    return ( 
        <div className="container">
            <nav className="menu">
                <img className="menu__btn" src={menu} onClick={handleShowMenu} alt="menu button"/>
                <ul className="menu__items">
                    <div className="menu__items__close" onClick={handleShowMenu}><img src={close} alt="close menu button"/></div>
                    <li className="menu__items__item"><a className="menu__items__item" href="#about">About me</a></li>
                    <li className="menu__items__item"><a className="menu__items__item" href="#skills">Skills</a></li>
                    <li className="menu__items__item"><a className="menu__items__item" href="#projects">Projects</a></li>
                    <li className="menu__items__item"><a className="menu__items__item" href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="about" id="about">
                <img className="about__img" src={me} alt="photo"/>
                <p className="about__text">My adventure with programming started in 2018 from the Python language. I participated in a Python course and I wrote a few projects in this language. 
During my master studies I chose a specialization that is a combination of chemistry and bioinformatics. During classes I was coding in C++ and Python.
Now I’m working on my own projects which you can see in the section Projects.
</p>
            </div>
            <div className="skills" id="skills">
                <h2 className="skills__title">Skills</h2>
                <div className="skills__skill"><img className="skills__skill__icon" src={htmll} alt="html icon"/><div className="skills__skill__des">I know how to create simple or more advanced structures of a page and how to use BEM.</div></div>
                <div className="skills__skill"><img className="skills__skill__icon" src={csss} alt="css icon"/><div className="skills__skill__des">I know how to create simple or more advanced styles of a page and how to use mixins.</div></div>
                <div className="skills__skill"><img className="skills__skill__icon" src={sasss} alt="sass icon"/><div className="skills__skill__des">I know how to create simple or more advanced styles of a page and how to use mixins.</div></div>
                <div className="skills__skill"><img className="skills__skill__icon" src={js} alt="javascript icon"/><div className="skills__skill__des">Classes, objects, functions, axios are not strange to me.</div></div>
                <div className="skills__skill"><img className="skills__skill__icon" src={reactt} alt="react icon"/><div className="skills__skill__des">I can create simple or more advanced projects. I know how to use hooks.</div></div>
                <div className="skills__skill"><img className="skills__skill__icon" src={gitt} alt="github icon"/><div className="skills__skill__des">I know basis commands like: commit, push, pull, merge and how to use branches.</div></div>
            </div>
            <div className="projects" id="projects">
                <h2 className="projects__title">Projects</h2>
                <div className="projects__project">
                    <a className="projects__project__min" href="https://monikapikuzinska.github.io/bookstore/">
                        <div className="projects__project__min__des">React, html, sass </div>
                        <img className="projects__project__min__img" src={bookstore} alt="bookstore"/>
                    </a>
                    <a className="projects__project__link" href="https://monikapikuzinska.github.io/bookstore/">Live</a>
                    <a className="projects__project__link" href="https://github.com/MonikaPikuzinska/bookstore">Code</a>
                </div>
                <div className="projects__project">
                    <a className="projects__project__min" href="https://monikapikuzinska.github.io/quiz-throne-of-glass/">
                        <div className="projects__project__min__des">React, html, sass</div>
                        <img className="projects__project__min__img" src={quiz} alt="quiz"/>
                    </a>
                    <a className="projects__project__link" href="https://monikapikuzinska.github.io/quiz-throne-of-glass/">Live</a>
                    <a className="projects__project__link" href="https://github.com/MonikaPikuzinska/quiz-throne-of-glass">Code</a>
                </div>
                <div className="projects__project">
                    <a className="projects__project__min" href="https://monikapikuzinska.github.io/Catch_golden_snitch/">
                        <div className="projects__project__min__des">Javascript, html, css</div>
                        <img className="projects__project__min__img" src={game} alt="game"/>
                    </a>
                    <a className="projects__project__link" href="https://monikapikuzinska.github.io/Catch_golden_snitch/">Live</a>
                    <a className="projects__project__link" href="https://github.com/MonikaPikuzinska/Catch_golden_snitch">Code</a>
                </div>
                <div className="projects__project">
                    <a className="projects__project__min" href="https://monikapikuzinska.github.io/book-marathon-app/">
                        <div className="projects__project__min__des">React, html, sass</div>
                        <img className="projects__project__min__img" src={marathon} alt="marathon"/>
                    </a>
                    <a className="projects__project__link" href="https://monikapikuzinska.github.io/book-marathon-app/">Live</a>
                    <a className="projects__project__link" href="https://github.com/MonikaPikuzinska/book-marathon-app">Code</a>
                </div>
            </div>
            <div className="contact" id="contact">
                <h2 className="contact__title">Contact me</h2>
                <img className="contact__mailImg" src={mail} alt="mail icon"/><p className="contact__mailDes">monika.pikuzinska01@gmail.com</p>
                <a className="contact__link" href="https://github.com/MonikaPikuzinska"><img className="contact__link" src={gitt} alt="github link"/></a>
                <a className="contact__link" href="#"><img className="contact__link" src={linkedin} alt="linkedin link"/></a>
                <footer className="footer">&copy; Copyright 2020 Monika Pikuzińska</footer>
            </div>
        </div>
     );
}
 
export default Home;