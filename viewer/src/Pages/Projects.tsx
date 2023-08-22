import { Checkbox, Table, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Page from "../Components/Page";
import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from "@jsonforms/react";

type ProjectData = {
    id: number,
    _id: string,
    name: string,
    status: string,
    expiration: string,
    description: string,
}
const ColDef: GridColDef[] = [
    {field: "id", headerName: "Project ID"},
    {field: "name", headerName: "Name"},
    {field: "short_name", headerName: "Short Name"},
    {field: "status", headerName: "Status"},
    {field: "science_field", headerName: "Field of science"},
    {field: "expiration", headerName: "Expiration"},
    {field: "description", headerName: "Description"},
    
]

const Projects = () => {

    const schema = person.schema;
    const uischema = person.uischema;
    const initialData = person.data;

    const [data, setData] = useState(initialData)
    
    useEffect(() => {
        console.log("pass")
  },[])

    return (
        <Page title="Metadata Forms">
        <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data, errors }) => setData(data)}
        />
        
        </Page>
    )
}

export default Projects;