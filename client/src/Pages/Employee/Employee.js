import Nav from 'react-bootstrap/Nav';

import profile from "../../Icons/profile.png"
import docs from "../../Icons/docs.png"
import arrow from "../../Icons/arrow.png"
import archive from "../../Icons/archive.png"

import { List } from '../../Componets/List/List';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard' 
import { Documents } from './Documents/Documents'
import { Project } from './Project/Project'


// исполнитель
export const Employee = () => {
    return (<div>
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="profile" element={<p>NOT IMPLEMENTED YET</p>}></Route>
            <Route path="documents" element={<Documents/>}></Route>
            <Route path="project/:id" element={<Project/>}></Route>
        </Routes>       
    </div>);
}