import Button from "react-bootstrap/esm/Button";
import { List } from "../../../Componets/List/List";
import { useState } from "react";
import { useInput } from "../../../hooks/useInput";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const stages = ['Договор и техническое задание', 
    'Назначение ответственных лиц',
    'Согласование материалов',
    'Паспорта и сертификаты',
    'Проект производства работ',
    'Журнал работ',
    'Акты по форме КС-2, КС-3',
    'Акты по форме КС-6',
    'Акт примерочной работы',
    'Паспорт законченного объекта'];

const docs = [['ГК №3-20-ОБ.doc', 
    'Прил. №1 к контракту Техническое задание.pdf', 
    'Прил. №3 к контракту График пр.р..xls', '4.xls',
    'Прил. №4 к контракту График финансирования..xls', '5.xls'],
    ['4. приказ1.docx'],
    ['5. о согласовании материалов.docx']];


export const Template = () => {
 


    let items = stages.map((stage, index) => {
        const d = docs[index];
        return <div key={index}>
            <input className="form-control" placeholder="Введите название этапа" value={stage}/> 
            <Button className="btn-yellow">Добавить документ</Button>  
            <div>
                {d} 
            </div>
        </div>
    });

    items.push(<div className="d-flex flex-row justify-content-center ">
    <Button className="btn-yellow px-5">Добавить этап</Button>
    </div>);

    return(<div>
        <div className="d-flex flex-row align-items-end mb-5">
            <div>
                <label style={{"font-weight": "500"}} htmlFor="name" className="form-label">Название шаблона</label>
                <input style={{"width": "700px"}} className="form-control" id="name" value="Строительно-монтажные работы"/>
            </div>
            <Button className="btn-yellow px-4 ms-5">Сохранить</Button>
        </div>

        <Card className="mb-5 px-5 p-3">               
            <ListGroup variant="flush">
                <ListGroup.Item className="card-item p-3 my-3">
                    <div>
                        <input className="form-control" placeholder="Введите название этапа" value={"Договор и техническое задание"}/> 
                        <div className="ms-4 my-3">
                            • ГК №3-20-ОБ.doc <br/>
                            • Прил. №1 к контракту Техническое задание.pdf<br/>
                            • Прил. №3 к контракту График пр.р..xls<br/>
                            • Прил. №4 к контракту График финансирования.xls<br/>
                        </div>
                        <Button className="ms-3 btn-yellow">Изменить</Button>  
                    </div>
                </ListGroup.Item>

                <ListGroup.Item className="card-item p-3 my-3">
                    <div>
                        <input className="form-control" placeholder="Введите название этапа" value={"Назначение ответственных лиц"}/> 
                        <div className="ms-4 my-3">
                            <p>• 4.приказ 1.doc </p>
                        </div>
                        <Button className="ms-3 btn-yellow">Изменить</Button>  
                    </div>
                </ListGroup.Item>

                <ListGroup.Item className="card-item p-3 my-3">
                    <div>
                        <input className="form-control" placeholder="Введите название этапа" value={"Согласование материалов"}/> 
                        <div className="ms-4 my-3">
                            <p>• О согласовании материалов.pdf </p>
                        </div>
                        <Button className="ms-3 btn-yellow">Изменить</Button>  
                    </div>
                </ListGroup.Item>


                <ListGroup.Item className="card-item p-3 my-3">
                    <div>
                        <input className="form-control" placeholder="Введите название этапа" value={"Паспорта и сертификаты"}/> 
                        <div className="ms-4 my-3">
                            <p>• О согласовании материалов.pdf </p>
                        </div>
                        <Button className="ms-3 btn-yellow">Изменить</Button>  
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </div>);
}