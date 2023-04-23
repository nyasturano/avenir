import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { appIdle, appFetching, appFetched, appFetchingError } from "../../../actions";
import axios from 'axios';

import './project.css'

import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import download from '../../../Icons/download.png'
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { Spinner } from "../../../Componets/Spinner/Spinner";

export const Project = () => {

    const fillNumber = (number) => {
        if (number < 10)
            number = "0" + number;
        return number;
    }

    const {appStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();
    const {id} = useParams();

    const [project, setProject] = useState([]);
    const [stages, setStages] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [neededDocs, setneededDocs] = useState([]);

   
    useEffect(() => {
        dispatch(appFetching());

        request(`http://localhost:5000/api/project/stages/${id}`, 'GET')
        .then(resp => setStages(resp))
        .then(() => request(`http://localhost:5000/api/status`, 'GET'))
        .then(resp => setStatuses(resp))
        .then(() => request(`http://localhost:5000/api/project/${id}`, 'GET'))
        .then(resp => setProject(resp))
        .catch((e) => console.log(e.message));
        
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };

      const [file, setFile] = useState();

    useEffect(() => {
        if (!stages)
            return;
            
        const fetch = async () => {
            const promises1 = stages.map(async stage => {
                const resp = await request(`http://localhost:5000/api/stage/documents/${stage.id}`, 'GET');
                return resp.map((item) => {
                    return item.documentId;
                });
            })
            const docIds  = await Promise.all(promises1);

            const promises2 = docIds.map(async ids => {
                const promises3 = ids.map(async id => {
                    const resp = await request(`http://localhost:5000/api/document/${id}`, 'GET');
                    return resp;
                })
                return await Promise.all(promises3);
            })
            setneededDocs(await Promise.all(promises2));
        }
        
        fetch();
        
    }, [stages]);
    
    useEffect(() => {
        if (neededDocs)
        {
            setTimeout(() => {dispatch(appFetched()); console.log(neededDocs)}, 1000);
        }
    }, [neededDocs]);
    
    
    if (appStatus == 'fetching')
        return <Spinner/>
        
        const stagesArray = stages.map((stage, index) => {
            
            let cmp = 0;

            if (project.currentStageId > index)
                cmp = 2;
            if (project.currentStageId < index)
                cmp = 0;
            if (project.currentStageId == index)
                cmp = 1;
            

            return (<Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>
                    <div className="stage-title">
                            <span className="me-4 number">{fillNumber(index + 1)}</span>
                            {stage.name}
                    </div>
                    <div className="ms-4">{statuses[cmp].status}</div>
                </Accordion.Header>


                <AccordionBody>

                    <div className="report-block">
                        <div className="title">Необходимые документы</div>
                        <div className="body">
                            {neededDocs[index].map((doc, index) => {
                                return <div key={index} className="document">
                                    <a href={`http://localhost:5000/${doc.path}`}>
                                        <img src={download}></img>
                                    </a>
                                    <span className="document-name ms-3">
                                        {doc.description}
                                    </span>
                                </div>
                            })}
                        </div>
                    </div>

                    <hr></hr>

                    <div className="report-block ">
                        <div className="title">
                            Отчеты от исполнителя
                        </div>

                        <div className="body">

                            <div className="sent-report">
                                <button>
                                    <img src={download}></img>
                                </button>
                                <span className="document-name ms-3">
                                    Договор.pdf
                                </span>
                            </div>
                            
                        </div>
                    </div>

                    <hr></hr>

                    <div className="report-block ">
                        <div className="title">
                            Добавить документ
                        </div>
                        <div className="body">
                            <input onChange={handleFileChange} type="file"></input>
                            {/* <Button className="btn-yellow me-4">Прикрепить файл</Button> */}
                            <Button onClick={() => {
                                let formData = new FormData();
                                formData.append('file', file);
                                axios.post('http://localhost:5000/api/report/create', formData)
                                .then(resp => console.log(resp))
                            }} className="btn-yellow-inverse">Отправить</Button>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="report-block ">
                        <div className="title">
                            Загруженные документы
                        </div>
                        <div className="body">

                            <div className="sent-report">
                                <button>
                                    <img src={download}></img>
                                </button>
                                <span className="document-name ms-3">
                                    Договор.pdf
                                </span>
                            </div>


                            
                        </div>
                    </div>

                    <hr></hr>

                    <div className="d-flex flex-row justify-content-center">
                        {cmp == 1  ? <Button className="btn-yellow mt-4 px-5">Завершить</Button> : ""}
                    </div>

                </AccordionBody>

            </Accordion.Item>);
    });

    return <div>
        <Accordion>
            {stagesArray}
        </Accordion>
    </div>

    
}