import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import profile from "../../../Icons/profile.png"
import docs from "../../../Icons/docs.png"
import template from "../../../Icons/template.png"
import projects from "../../../Icons/projects.png"
import arrow from "../../../Icons/arrow.png"
import archive from "../../../Icons/archive.png"

import { Link } from 'react-router-dom';


export const Header = () => {
    return <div className="mb-5 d-flex flex-row align-items-center">
        <Nav className="p-4 d-flex align-items-center w-100">
            <Nav.Item className="d-flex flex-row">
                <span className="d-flex flex-column justify-content-center">
                    <img src={profile} alt="ptofile"></img>
                </span>
                <Link to="profile">
                    Профиль
                </Link>
            </Nav.Item>

            <Nav.Item className="d-flex flex-row">
                <span className="d-flex flex-column justify-content-center">
                    <img src={projects} alt="ptofile"></img>
                </span>
                <Link to="projects">
                    Проекты
                </Link>
            </Nav.Item>

            <Nav.Item className="d-flex flex-row">
                <span className="d-flex flex-column justify-content-center">
                    <img src={template} alt="ptofile"></img>
                </span>
                <Link to="templates">
                    Шаблоны
                </Link>
            </Nav.Item>

            <Nav.Item className="d-flex flex-row">
                <span className="d-flex flex-column justify-content-center">
                    <img src={docs} alt="docs"></img>
                </span>
                <Link to="documents">
                    Основные документы
                </Link>
            </Nav.Item>
        </Nav>
        <Button className="btn-yellow w-25 p-3 ms-4">Создать заказ</Button>
    </div>
}