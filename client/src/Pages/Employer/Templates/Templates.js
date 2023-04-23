
import {Header} from '../../../Componets/Header/Header'
import {List} from '../../../Componets/List/List'
import {Spinner} from '../../../Componets/Spinner/Spinner'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

import { useHttp } from '../../../hooks/http.hook';
import { useEffect, useState } from 'react';

import './templates.css'

import docs from '../../../Icons/docs-black.png'
import newtmp from '../../../Icons/newtmp.png'
import { Link } from 'react-router-dom';

export const Templates = () => {

    const {appStatus} = useSelector(state => state);
    const {request} = useHttp();

    const [templates, setTemplates] = useState([]);

    const getAllTemplates = () => {
        request(`http://localhost:5000/api/template`, 'GET')
        .then(resp => {setTemplates(resp); console.log(resp)});
    }

    useEffect(() => {
        getAllTemplates();
    }, []);

    if (appStatus == 'fetching')
        return <Spinner/>
    

    const tmpItems = templates.map((t, index) => {
        return( <Link key={index} to={`${t.id}`}>
            <Button className='d-flex btn-yellow flex-row p-4 m-4 align-items-center template-preview'>
                <div className='me-2'>
                    <img className='w-75' src={docs} alt="docs"></img>
                </div>
                <div>
                    {t.title}
                </div>
            </Button>
        </Link>
        );
    });

   

    return (<div>
        
        <div className="d-flex flex-row">
            {tmpItems}
            <Link to={`template/`}>
                <Button className='d-flex btn-yellow flex-row p-4 m-4 align-items-center template-preview'>
                    <div className='me-2'>
                        <img className='w-75' src={newtmp} alt="docs"></img>
                    </div>
                    <div>
                        Новый шаблон
                    </div>
                </Button>
            </Link>
        </div>

        {/* <List></List> */}
    </div>);



}