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
export const Projects = () => {

    
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
                        <Link to={`${prj.id}`}>
                            <img className="w-50" src={arrow} alt="arrow"></img>
                        </Link>
        
                    </div>
                </div>);
            }));
            
        })
        .catch((e) => console.log(e.message));
    }, []);
    
    return (<div>
        <List title={'Текущие заказы'} items={projectItems}></List>
        <List title={'Выполненные заказы'} items={[<div className="d-flex flex-row justify-content-between">
                    Установка пешеходного ограждения
                    <div className="d-flex flex-row justify-content-end">
                        <button>
                            <img className="w-75" src={archive} alt="archive"></img>
                        </button>
                        <Link>
                            <img className="w-50" src={arrow} alt="arrow"></img>
                        </Link>
        
                    </div>
                </div>]}></List>       
    </div>);
}