import React from 'react';
import openings from './openings.json';


const Times = props => {
    const allData = openings.map (data => data.day); 
    const allOpen = openings.map(data => data.opening);
    const allClose = openings.map(data => data.close);
   

    return (
        <div className="container">
            <h3>Opening Times</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Opening</th>
                        <th>Close</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{allData}</td>
                        <td>{allOpen}</td>
                        <td>{allClose}</td>
                        </tr> 
                    
                    
                
                </tbody>
            </table>
        </div>
    )
}
export default Times;
