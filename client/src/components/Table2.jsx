import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Table = ({ data, setData }) => {
  useEffect(() => {
    fetch("/user/1")
      .then((response) => response.json())
      .then((data) => {
        const sortedSugarLevels = data.sort((a, b) =>
          new Date(a.date).getTime() > new Date(b.date).getTime() ? 1 : -1
        );

        let labels = [];
        let sugarLevels = [];

        sortedSugarLevels.forEach((sugarLevel) => {
          labels.push(new Date(sugarLevel.date).toLocaleDateString());
          sugarLevels.push(sugarLevel.level);
        });

        const chartOptions = {
          labels,
          datasets: [
            {
              label: "Sugar level",
              data: sugarLevels,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        };

        console.log(setData);

        setData(chartOptions);
      });
  }, []);
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  return data ? (
    <div className="graph">
      <Line options={options} data={data} />{" "}
    </div>
  ) : null;
};
