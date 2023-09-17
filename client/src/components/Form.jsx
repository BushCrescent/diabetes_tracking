import { useState } from "react";

export const Form = ({ setData }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      id: 1,
      level: inputs.level,
      date: inputs.date,
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: raw,
      redirect: "follow",
    };

    await fetch("/user/sugar-level", requestOptions);

    const res = await fetch("/user/1");
    const data = await res.json();

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
          label: "Dataset 1",
          data: sugarLevels,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };

    setData(chartOptions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the date:
        <input
          type="date"
          name="date"
          value={inputs.date || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your sugar level:
        <input
          type="number"
          name="level"
          value={inputs.level || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};
