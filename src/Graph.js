import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Graph.css';

const Graph = ({ comments }) => {
  const getRatingCount = rating =>
    comments.reduce((count, comment) => {
      if (comment.rating === rating) {
        return (count += 1);
      }
      return count;
    }, 0);

  const data = {
    labels: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
    datasets: [
      {
        label: 'Ratings',
        data: [
          getRatingCount(1),
          getRatingCount(2),
          getRatingCount(3),
          getRatingCount(4),
          getRatingCount(5),
        ],
        backgroundColor: '#013a51',
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <div className="Graph">
      <h2 className="Graph-title">Rating summary</h2>
      <div className="Graph-chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
