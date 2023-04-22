
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import profile from "../../Icons/profile.png"
import docs from "../../Icons/docs.png"
import template from "../../Icons/template.png"
import arrow from "../../Icons/arrow.png"
import archive from "../../Icons/archive.png"

import { List } from '../../Componets/List/List';

// заказчик
export const Employer = () => {
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

    return ( <div>

        <div className="mb-5 d-flex flex-row align-items-center">
            <Nav className="header p-4 d-flex align-items-center">
                <Nav.Item className="d-flex flex-row">
                    <span className="d-flex flex-column justify-content-center">
                        <img src={profile} alt="1"></img>
                    </span>
                    <Nav.Link className="header-link">Профиль</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-row"> 
                    <span className="d-flex flex-column justify-content-center">
                        <img src={template} alt="1"></img>
                    </span>
                    <Nav.Link className="header-link">Шаблоны</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-flex flex-row">
                    <span className="d-flex flex-column justify-content-center">
                        <img src={docs} alt="1"></img>
                    </span>
                    <Nav.Link className="header-link">Основные документы</Nav.Link>
                </Nav.Item>
            </Nav>
            <Button variant='warning' className="btn-yellow p-3 ms-4">Создать заказ</Button>
        
        </div>

        <List title={'Текущие заказы'} items={projectItems}></List>
        <List title={'Выполненные заказы'} items={projectItems}></List>

       
    </div>);
}