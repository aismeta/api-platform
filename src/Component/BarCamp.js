import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BarCamp = () => {
    return ( 
         <Line
            data = {
            {
                labels: ['text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', 'text', ],
                datasets: [{
                    data: [38, 40, 36, 25, 41, 22, 39, 37, 55,42, 21, 24, 43, 39, 94, 55, 70, 75],
                    // 
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: ['rgba(255,255,255, 1.0)'],
                    pointBackgroundColor:['rgba(210,210,210, 1.0)'],
                    pointBorderColor:['rgba(255,255,255, 1.0)'],
                }]
            }
        }
        height = { 250 }
        width = { 300}

        options = {{
             maintainAspectRatio: false,
                scales:{
                    yAxes:[
                        {
                        ticks: {
                            min:0,
                            max:100,
                            stepSize:20
                        },
                       },
                    ],
                },
            }
        }
    />
    )
}

export default BarCamp