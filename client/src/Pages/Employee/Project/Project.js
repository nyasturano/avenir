import { useParams } from "react-router";
import { useEffect, useState } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { useSelector, useDispatch } from 'react-redux';
import { appIdle, appFetching, appFetched, appFetchingError } from "../../../actions";


import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import download from '../../../Icons/download.png'
import AccordionBody from "react-bootstrap/esm/AccordionBody";


export const Project = () => {


    const fillNumber = (number) => {
        if (number < 10)
            number = "0" + number;
        return number;
    }

    const downloadDocument = (path) => {
        console.log(path)
        request(`http://localhost:5000/${path}`, 'GET', null, {"Content-Type": "application/pdf"})
        
        .catch((e) => console.log(e.message));
    }

    const {appStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();
    const {id} = useParams();

    const [stages, setStages] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [neededDocs, setneededDocs] = useState([]);

   
    useEffect(() => {
        dispatch(appFetching());

        request(`http://localhost:5000/api/project/stages/${id}`, 'GET')
        .then(resp => setStages(resp))
        .then(() => request(`http://localhost:5000/api/status`, 'GET'))
        .then(resp => setStatuses(resp))
        .catch((e) => console.log(e.message));
        
    }, []);

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
    return;
    
    

    const stagesArray = stages.map((stage, index) => {
        return(<Accordion.Item key={index} eventKey={index}>
            <Accordion.Header>
                <div className="stage-title">
                        <span className="me-4 number">{fillNumber(index + 1)}</span>
                        {stage.name}
                </div>
                <div className="ms-4">{statuses[stage.statusId].status}</div>
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


            </AccordionBody>

        </Accordion.Item>);
    });

    return (<Accordion>
        {stagesArray}
    </Accordion>);

    return(<div>
        <Accordion>
            
            <Accordion.Item eventKey="0">
                <Accordion.Header className="card-item p-3 d-flex align-items-center">
                    <div className="stage-title">
                        <span className="me-4 number">01</span>
                        Заключение договора с заказчиком (заказчик)
                    </div>
                    <div className="ms-4 indicator-green"></div>
                </Accordion.Header>
                <Accordion.Body>
                    <div>
                        <div className="report-block ">
                            <div className="title">
                                Необходимые документы
                            </div>
                            <div className="body">
                                <div className="document">
                                    <button>
                                        <img src={download}></img>
                                    </button>
                                    <span className="document-name ms-3">
                                        Договор.pdf
                                    </span>
                                </div>
                                <div className="document">
                                    <button>
                                        <img src={download}></img>
                                    </button>
                                    <span className="document-name ms-3">
                                        Техническое_задание.pdf
                                    </span>
                                </div>
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

                                <div className="sent-report">
                                    <button>
                                        <img src={download}></img>
                                    </button>
                                    <span className="document-name ms-3">
                                        Техническое_задание.pdf
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
                                <Button className="btn-yellow me-4">Прикрепить файл</Button>
                                <Button className="btn-yellow-inverse">Отправить</Button>
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

                                <div className="sent-report">
                                    <button>
                                        <img src={download}></img>
                                    </button>
                                    <span className="document-name ms-3">
                                        Техническое_задание.pdf
                                    </span>
                                </div>

                              
                            </div>
                        </div>

                        <hr></hr>

                        <div className="d-flex flex-row justify-content-center">
                            <Button className="btn-yellow mt-4 px-5">Завершить</Button>
                        </div>
                    </div>


                </Accordion.Body>
            </Accordion.Item>
          
            <Accordion.Item eventKey="1">
                <Accordion.Header className="card-item p-3 d-flex align-items-center">
                    <div className="stage-title">
                        <span className="me-4 number">02</span>
                        Заключение договора с заказчиком (исполнитель)
                    </div>
                    <div className="ms-4 indicator-yellow"></div>
                </Accordion.Header>
                <Accordion.Body>
                    <div>
                        <div className="report-block ">
                            <div className="title">
                                Необходимые документы
                            </div>
                            <div className="body">
                                <div className="document">
                                    <button>
                                        <img src={download}></img>
                                    </button>
                                    <span className="document-name ms-3">
                                        Договор.pdf
                                    </span>
                                </div>
                                <div className="document">
                                    <button>
                                        <img src={download}></img>
                                    </button>
                                    <span className="document-name ms-3">
                                        Техническое_задание.pdf
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
                                <Button className="btn-yellow me-4">Прикрепить файл</Button>
                                <Button className="btn-yellow-inverse">Отправить</Button>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="report-block ">
                            <div className="title">
                                Отправленные документы
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

                                <div className="sent-report">
                                    <button>
                                        <img src={download}></img>
                                    </button>
                                    <span className="document-name ms-3">
                                        Техническое_задание.pdf
                                    </span>
                                </div>

                              
                            </div>
                        </div>
                    </div>


                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header className="card-item p-3 d-flex align-items-center">
                    <div className="stage-title">
                        <span className="me-4 number">03</span>
                        Выполнение задания
                    </div>
                    <div className="ms-4 indicator-red"></div>
                </Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
         
            
        </Accordion>

        
    
</div>);
}