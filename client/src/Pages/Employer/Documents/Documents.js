
import { Header } from "../../../Componets/Header/Header";
import { List } from "../../../Componets/List/List"
import download from "../../../Icons/download.png";
import trash from "../../../Icons/trash.png";
import axios from 'axios';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appIdle, appFetching, appFetched, appFetchingError } from "../../../actions";
import { useHttp } from '../../../hooks/http.hook';
import Button from "react-bootstrap/esm/Button";
import { Spinner } from "../../../Componets/Spinner/Spinner";

export const Documents = () => {

    const [file, setFile] = useState();

    const handleFileChange = (e) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    };

    const {request} = useHttp();
    const {appStatus} = useSelector(state => state);
    const dispatch = useDispatch();

    const [docs, setDocs] = useState([]);
    useEffect(() => {
        dispatch(appFetching());
        request(`http://localhost:5000/api/document`, 'GET')
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

        axios.post('http://localhost:5000/api/document/create', formData)
        .then(resp => console.log(resp))
        
    }
   

    const docsItems = docs.map((doc) => {
        return (<div className="d-flex flex-row justify-content-between">
            {doc.description}
            <div className="d-flex flex-row justify-content-end">
                <a href={`http://localhost:5000/${doc.path}`}>
                    <img src={download} alt="download"></img>
                </a>
                <button>
                    <img className="ps-2 w-50" src={trash} alt="trash"></img>
                </button>

            </div>
        </div>);
    });


    if (appStatus == 'fetching')
        return <Spinner/>

    return (<div>
        <div className="ps-5 d-flex flex-column align-items-start mb-4">
            <input onChange={handleFileChange} type="file"></input>
            <Button onClick={uploadDocument} className="btn-yellow mt-4">Добавить документ</Button>
        </div>
        <List items={docsItems}></List>
    </div>);
}