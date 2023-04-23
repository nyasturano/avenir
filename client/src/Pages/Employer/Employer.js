
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard' 
import { Documents } from './Documents/Documents'
import { Project } from './Project/Project'
import { Archive } from './Archive/Archive';
import { TemplateConstructor } from './TemplateConstructor/TemplateConstructor';
import { NewProject } from './NewProject/NewProject';
// исполнитель
export const Employer = () => {
    return (<div>
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="profile" element={<p>NOT IMPLEMENTED YET</p>}></Route>
            <Route path="documents" element={<Documents/>}></Route>
            <Route path="newproject" element={<NewProject/>}></Route>
            <Route path="templates" element={<TemplateConstructor/>}></Route>
            <Route path="project/archive/:id" element={<Archive/>}></Route>
            <Route path="project/:id" element={<Project/>}></Route>
        </Routes>       
    </div>);
}