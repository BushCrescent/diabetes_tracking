import { useState } from "react";
import { Table } from "./components/Table2";
import { Form } from "./components/Form";

export default function App() {
  const [data, setData] = useState(null);

  const handleDataChange = (datum) => {
    setData(datum);
  };

  return (
    <div className="App">
      <Form setData={handleDataChange} />
      <Table data={data} setData={handleDataChange} />
    </div>
  );
}
