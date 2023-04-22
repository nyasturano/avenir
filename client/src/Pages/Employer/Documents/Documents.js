
import { Header } from "../../../Componets/Header/Header";
import { List } from "../../../Componets/List/List"
import download from "../../../Icons/download.png";
import trash from "../../../Icons/trash.png";

export const Documents = () => {

    const docs = ['Договор.pdf', 'Техническое_задание.doc'];

    const docsItems = docs.map((doc) => {
        return (<div className="d-flex flex-row justify-content-between">
            {doc}
            <div className="d-flex flex-row justify-content-end">
                <button>
                    <img src={download} alt="download"></img>
                </button>
                <button>
                    <img className="ps-2 w-50" src={trash} alt="trash"></img>
                </button>
            </div>
        </div>);
    });

    return (<div>
        <Header title={"Основные документы"}></Header>
        <List items={docsItems}></List>
    </div>);
}