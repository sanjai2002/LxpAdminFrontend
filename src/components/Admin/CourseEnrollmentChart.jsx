// import React, { useState, useEffect } from 'react'
// import { Bar } from 'react-chartjs-2'
// // import { barChartData } from '../../../Fakedata'
// import axios from 'axios'
 
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarController,
//     BarElement
// } from 'chart.js'
 
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarController,
//     BarElement
// )
// function CourseEnrollmentChart() {
//     const [data, setData] = useState({});
//     useEffect(() => {
//         axios.get('http://localhost:5199/api/Dashboard/GetEnrollmentMonth')
//         .then(response => {
//             console.log("Data",response.data.data);
//             console.log("dddD",data.enrollMonth);
//             setData(response.data.data)
//         })
//         .catch(error => {console.log(error)})
//     }, []);



//     // getMonthName(6);

//     // function getMonthName(monthNumber) {
//     //     const date = new Date();
//     //     date.setMonth(monthNumber - 1); // Adjust month to 0-based index
//     //     const month = date.toLocaleString('default', { month: 'long' });
//     //     return month;
//     // }


//     const barData = {
//         datasets: [{
//             label: 'Courses Posted Per Month',
//             data: data
//         }]
//     }
 
//     const barOptions = {
//         parsing: {
//             xAxisKey: 'enrollMonth',
//             yAxisKey: 'enrollCount'
//         }
//     };
     
//     return (
//         <div>
//             <Bar data={barData} options={barOptions}/>          
//         </div>
//     )
// }

// export default CourseEnrollmentChart;

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarController,
    BarElement
} from 'chart.js';
 
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarController,
    BarElement
);
 
function CourseEnrollmentChart() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('http://localhost:5199/api/Dashboard/GetEnrollmentMonth')
            .then(response => {
                console.log("Data", response.data.data);
                setData(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
 
    // Convert month numbers to month names
    const monthNames = [
        '',  
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
 
    const barData = {
        datasets: [{
            label: 'Courses Posted Per Month',
            data: data ? data.map(monthNumber => monthNames[monthNumber]) : []
        }]
    };
 
    const barOptions = {
        parsing: {
            xAxisKey: 'enrollMonth',
            yAxisKey: 'enrollCount'
        }
    };
 
    return (
<div>
<Bar data={barData} options={barOptions} />
</div>
    );
}
 
export default CourseEnrollmentChart;