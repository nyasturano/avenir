import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './list.css';

export const List = ({title, items}) => {

    let listItems = items.map((item, index) => 
        <div key={index}> 
            <ListGroup.Item className="card-item m-3 p-3">{item}</ListGroup.Item>
        </div>);

    return (<div>
        <Card className="mb-5 p-3">               
            <Card.Header className="card-header">{title}</Card.Header>
            <ListGroup variant="flush">
                {listItems}
            </ListGroup>
        </Card>
    </div>);

}