import Nav from 'react-bootstrap/Nav';

import profile from "../../../Icons/profile.png"
import docs from "../../../Icons/docs.png"
import arrow from "../../../Icons/arrow.png"
import archive from "../../../Icons/archive.png"

import { List } from '../../../Componets/List/List';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

// исполнитель
export const Dashboard = () => {

    const projects = ['Заказ 1', 'Заказ 2'];

    const projectItems = projects.map((prj) => {
        return (<div className="d-flex flex-row justify-content-between">
            {prj}
            <div className="d-flex flex-row justify-content-end">
                <button>
                    <img className="w-75" src={archive} alt="archive"></img>
                </button>
                <button>
                    <img className="w-50" src={arrow} alt="arrow"></img>
                </button>

            </div>
        </div>);
    });

    return (<div>
        <div className="mb-5 d-flex flex-row align-items-center">
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
                        <img src={docs} alt="docs"></img>
                    </span>
                    <Link to="documents">
                        Основные документы
                    </Link>
                </Nav.Item>
            </Nav>
        </div>

        <List title={'Текущие заказы'} items={projectItems}></List>
        <List title={'Выполненные заказы'} items={projectItems}></List>

       
    </div>);
}