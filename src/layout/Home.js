import React from 'react';
import menu from "../icons/burger.svg";
import close from "../icons/close.svg";
import me from "../img/120090798_396326408430009_5887312141444674031_n.jpg"

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
                    <li className="menu__items__item"><a className="menu__items__item" href="#">About me</a></li>
                    <li className="menu__items__item"><a className="menu__items__item" href="#">Skills</a></li>
                    <li className="menu__items__item"><a className="menu__items__item" href="#">Projects</a></li>
                    <li className="menu__items__item"><a className="menu__items__item" href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="about">
                <img className="about__img" src={me} alt="photo"/>
                <p className="about__text">My adventure with programming started in 2018 from the Python language. I participated in a Python course and I wrote a few projects in this language. 
During my master studies I chose a specialization that is a combination of chemistry and bioinformatics. During classes I was coding in C++ and Python.
Now I’m working on my own projects which you can see in the section Projects.
</p>
            </div>
            <div className="skills">
                <div className="skills__skill1"><div className="skills__skill__des">I know how to create simple or more advanced structures of a page and how to use BEM.</div></div>
                <div className="skills__skill2"><div className="skills__skill__des">I know how to create simple or more advanced styles of a page and how to use mixins.</div></div>
                <div className="skills__skill3"><div className="skills__skill__des">I know how to create simple or more advanced styles of a page and how to use mixins.</div></div>
                <div className="skills__skill4"><div className="skills__skill__des">Classes, objects, functions, axios are not strange to me.</div></div>
                <div className="skills__skill5"><div className="skills__skill__des">I can create simple or more advanced projects. I know how to use hooks.</div></div>
                <div className="skills__skill6"><div className="skills__skill__des">I know basis commands like: commit, push, pull, merge and how to use branches.</div></div>
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