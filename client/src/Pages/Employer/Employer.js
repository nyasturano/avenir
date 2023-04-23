import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Routes, Route } from 'react-router-dom';
import { Projects } from './Projects/Projects' 
import { Documents } from './Documents/Documents'
import { Project } from './Project/Project'
import { Archive } from './Archive/Archive';
import { Templates} from './Templates/Templates';
import { Template} from './Template/Template';
import { NewProject } from './NewProject/NewProject';
import { Header} from './Header/Header'

import { Link } from 'react-router-dom';
import profile from "../../Icons/profile.png"
import docs from "../../Icons/docs.png"
import template from "../../Icons/template.png"
import arrow from "../../Icons/arrow.png"
import archive from "../../Icons/archive.png"

// исполнитель
export const Employer = () => {
    return (<div>

        <Header/>
        <div>
            <Routes>
                <Route path="profile"></Route>
                <Route path="new" element={<NewProject/>}></Route>
                <Route path="projects" element={<Projects/>}></Route>
                <Route path="projects/:id" element={<Project/>}></Route>
                <Route path="projects/archive/:id" element={<Archive/>}></Route>
                <Route path="documents" element={<Documents/>}></Route>
                <Route path="newproject" element={<NewProject/>}></Route>
                <Route path="templates" element={<Templates/>}></Route>
                <Route path="templates/:id" element={<Template/>}></Route>
            </Routes>       
        </div>
    </div>);
}