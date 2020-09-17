import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Issue from './Issue';

function TechPage() {

    // State for database
    const [issue, setIssue] = useState([]);

    // GET database info on component mount
    useEffect(() => {
        Axios.get('/techissues').then(res => {
            setIssue([...res.data])
    }).catch(err => console.log("Error"+err))
    }, [])
    
    // Rendering all issue components found in database
    return (
        <div className='container-fluid' id='techPage'>
            
            {issue.map((info,n) => <Issue key={'issue #'+n} data={info}/>)}
        </div>
    )
}

export default TechPage;
