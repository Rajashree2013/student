import { useState } from "react";

const Header = () => "Welcome To My App";

const DataTable = () => {
    //const [student, setStudent] = useState({id:'', firstName:'', lastName:'', age:'', birthdate:'',country:'', city:''});

    const [studentList, setStudentList] = useState([

        {id:'01', firstName:'Buda', lastName:'Bhuyan', age:'53', birthdate:'02/03/1976',country:'', city:'Jamshedpur'},
        {id:'02', firstName:'Somendra', lastName:'Bhuyan', age:'51', birthdate:'02/03/1976',country:'', city:'Jamshedpur'},
        {id:'03', firstName:'Pankaj', lastName:'Bhuyan', age:'46', birthdate:'02/03/1976',country:'', city:'Jamshedpur'},
        {id:'04', firstName:'Krish', lastName:'Bhuyan', age:'15', birthdate:'02/03/1976',country:'', city:'Jamshedpur'}

    ]);

    return (     

            <div id="root">
            <table className='table table-dark' border='1'>
            <TableHeader />
            <TableRow studentList={studentList}/>            
                
            </table>
            </div>
        );
    };

   


    const TableHeader = () => {
        return ( <thead>
            <tr>
                <th>id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>age</th>
                <th>birthdate</th>
                <th>country</th>
                <th>city</th>
                <th></th>
            </tr>
        </thead>);
    }


    const TableAction = () => {
        return (
            <>
                <button type='button' className='btn btn-primary' >Details</button>          
            </>
        )
    }

    const TableRow = (props) => {  // props.studentList you can access the studentList variable then through the map function try to create a dynamic row

        return(
            <tbody>
                {
                    props.studentList.map(element => {
                        return(
                            <tr key={element.id}>
                                <td>
                                    {element.id}
                                </td>
                                <td >
                                    {element.firstName}
                                </td>
                                <td>
                                    {element.lastName}
                                </td>
                                <td>
                                    {element.age}
                                </td>
                                <td>
                                    {element.birthdate}
                                </td>
                                <td>
                                    {element.country}
                                </td>
                                <td>
                                    {element.city}
                                </td>
                                <td>
                                    <TableAction />
                                </td>
                                
                            </tr>
                        )
                    }) 
                }
                   
            </tbody>
                
        )
    }

    

export default DataTable;
 