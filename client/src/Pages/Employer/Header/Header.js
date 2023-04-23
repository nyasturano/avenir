import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import profile from "../../../Icons/profile.png"
import docs from "../../../Icons/docs.png"
import template from "../../../Icons/template.png"
import projects from "../../../Icons/projects.png"
import arrow from "../../../Icons/arrow.png"
import archive from "../../../Icons/archive.png"

import { NavLink, Link } from 'react-router-dom';

import './header.css'

export const Header = () => {
    return <div className="mb-5 d-flex flex-row align-items-center">
        <Nav className="p-4 d-flex align-items-center w-100">
            <Nav.Item className="d-flex flex-row">
                <span className="d-flex flex-column justify-content-center">
                    <img src={profile} alt="profile"></img>
                </span>
                <NavLink activeclassname="active" to="profile">
                    <div className="d-flex align-items-center">
                        Профиль
                    </div>
                </NavLink>
            </Nav.Item>

            <Nav.Item className="d-flex flex-row">
                <span className="d-flex flex-column justify-content-center">
                    <img src={projects} alt="ptofile"></img>
                </span>
                <NavLink activeclassname="active" to="projects">
                    Проекты
                </NavLink>
            </Nav.Item>

            <Nav.Item className="d-flex flex-row">
                <span className="d-flex flex-column justify-content-center">
                    <img src={template} alt="ptofile"></img>
                </span>
                <NavLink activeclassname="active" to="templates">
                    Шаблоны
                </NavLink>
            </Nav.Item>

            <Nav.Item className="d-flex flex-row">
                <span className="d-flex flex-column justify-content-center">
                    <img src={docs} alt="docs"></img>
                </span>
                <NavLink activeclassname="active" to="documents">
                    Основные документы
                </NavLink>
            </Nav.Item>
        </Nav>
            <Button className="btn-yellow w-25 p-3 ms-4">
                <Link to="new" style={{"color":"#000"}}>
                    Создать заказ
                </Link>
            </Button>
    </div>
}