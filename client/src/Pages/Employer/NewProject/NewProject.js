
import { Header } from "../../../Componets/Header/Header";
import { List } from "../../../Componets/List/List"
import download from "../../../Icons/download.png";
import trash from "../../../Icons/trash.png";
import axios from 'axios';
import "./style.css";

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appIdle, appFetching, appFetched, appFetchingError } from "../../../actions";
import docs_black from '../../../Icons/docs-black.png'
import { useHttp } from '../../../hooks/http.hook';
import Button from "react-bootstrap/esm/Button";
import { Spinner } from "../../../Componets/Spinner/Spinner";


let id;
export const NewProject = () => {

    const [file, setFile] = useState();

    const handleFileChange = (e) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };

    const {request} = useHttp();
    const {appStatus} = useSelector(state => state);
    const dispatch = useDispatch();

    let [temp, setDocs] = useState([]);
    useEffect(() => {
        dispatch(appFetching());
        request(`http://localhost:5000/api/project`, 'GET')
        .then(resp => {
            setDocs(resp);
            setTimeout(() => {dispatch(appFetched())}, 500);
        })
    }, []);

    
    const uploadDocument = () => {
        if (!file)
            return;        
        let formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:5000/api/project/create', formData)
        .then(resp => console.log(resp))

    }

    temp = [{name:'Шаблон туда сюда 1'},{name:'Шаблон туда сюда 2'},{name:'Шаблон туда сюда 3'},{name:'3'},{name:'3'},{name:'3'},{name:'3'},{name:'3'},{name:'3'},{name:'3'},{name:'3'},{name:'3'},{name:'3'},]
    const tempItems = temp.map((doc,index) => {
        return (
            <option  value={index}>
                {doc.name}
            </option>
        )
    });


    if (appStatus == 'fetching')
        return <Spinner/>

    return (<div>
        <div className="d-flex flex-column align-items-start mb-4">
            <input className="card-item p-3 my-3 w-100" placeholder="Наименование заказа" type="text"></input>
            <textarea className="card-item p-3 my-3 w-100" placeholder="Описание заказа"></textarea>
            <select className="row d-flex col-2 w-100 p-4 m-4 m-auto justify-content-between">
                {tempItems}
            </select>
        </div>
        <Button className="d-flex btn-yellow m-auto flex-row p-4 m-4 align-items-center template-preview">
            Сохранить
        </Button>
    </div>);
}