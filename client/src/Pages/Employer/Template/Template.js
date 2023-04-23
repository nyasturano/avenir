import Button from "react-bootstrap/esm/Button";
import { List } from "../../../Componets/List/List";
import { useState } from "react";
import { useInput } from "../../../hooks/useInput";
export const Template = () => {
 
    const [stages, setStages] = useState([]);

    const name = useInput('name');

    const append = () => {
        setStages(stages => [...stages, {}])
    }
    const edit = (index, value) => {
        setStages(stages.map((s, i) => {
            return (i == index) ? value : s;
        }));
    }

    return(<div>
        <div className="d-flex flex-row align-items-end mb-5">
            <div>
                <label for="name" class="form-label">Название проекта</label>
                <input style={{"width": "700px"}} class="form-control" id="name" value={name.value}/>
            </div>
            <Button className="btn-yellow px-4 ms-5">Сохранить</Button>
        </div>
        
        <List items={[ 
            <div className="d-flex flex-row justify-content-center ">
                {stages.map((stage, index) => {
                    <div key={index}>
                        <input style={{"width": "500px"}} class="form-control" placeholder="Введите название этапа" id={`stage-name-${index}}`}/>
                    </div>
                })}
                <Button onClick={() => append} className="btn-yellow px-5">Добавить этап</Button>
            </div>
        ]}>
        </List> 
    </div>);
}