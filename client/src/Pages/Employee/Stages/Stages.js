import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './stages.css'

import download from '../../Icons/download.png'

export const Stages = () => {
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