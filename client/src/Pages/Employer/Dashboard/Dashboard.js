import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import profile from "../../../Icons/profile.png"
import docs from "../../../Icons/docs.png"
import template from "../../../Icons/template.png"
import arrow from "../../../Icons/arrow.png"
import archive from "../../../Icons/archive.png"

import { List } from '../../../Componets/List/List';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useHttp } from '../../../hooks/http.hook';
import { useEffect, useState } from 'react';

// исполнитель
export const Dashboard = () => {

    
    const [projectItems, setProjectItems] = useState([]);
    
    const {request} = useHttp();
   
    useEffect(() => {
        request('http://localhost:5000/api/project', 
        'GET')
        .then((resp) => { 
            
            setProjectItems(resp.map((prj) => {
                return (<div className="d-flex flex-row justify-content-between">
                    {prj.name}
                    <div className="d-flex flex-row justify-content-end">
                        <button>
                            <img className="w-75" src={archive} alt="archive"></img>
                        </button>
                        <Link to={`project/${prj.id}`}>
                            <img className="w-50" src={arrow} alt="arrow"></img>
                        </Link>
        
                    </div>
                </div>);
            }));
            
        })
        .catch((e) => console.log(e.message));
    }, []);
    
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

        <List title={'Текущие заказы'} items={projectItems}></List>
        <List title={'Выполненные заказы'} items={projectItems}></List>

       
    </div>);
}