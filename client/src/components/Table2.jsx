import React, { useState, useEffect } from "react";
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [123, 23, 23, 23, 123, 123],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const Table = () => {
  //const [data, setData] = useState(null);

  useEffect(() => {
    console.log("hello");
    fetch("/user/1")
      .then((response) => response.json())
      .then((json) => {
        array.sort((a, b) => a.getTime() - b.getTime());
      });
  }, []);
  return data ? <Line options={options} data={data} /> : null;
};
[
  {
    id: 1,
    date: "2023-07-24T07:00:00.000Z",
    level: 150,
    user_id: 1,
    name: "Jane",
    age: 50,
    gender: "FEMALE",
  },
  {
    id: 1,
    date: "2023-07-25T07:00:00.000Z",
    level: 160,
    user_id: 1,
    name: "Jane",
    age: 50,
    gender: "FEMALE",
  },
  {
    id: 1,
    date: "2023-07-26T07:00:00.000Z",
    level: 170,
    user_id: 1,
    name: "Jane",
    age: 50,
    gender: "FEMALE",
  },
  {
    id: 1,
    date: "2023-07-27T07:00:00.000Z",
    level: 180,
    user_id: 1,
    name: "Jane",
    age: 50,
    gender: "FEMALE",
  },
  {
    id: 1,
    date: "2023-07-28T07:00:00.000Z",
    level: 140,
    user_id: 1,
    name: "Jane",
    age: 50,
    gender: "FEMALE",
  },
];
