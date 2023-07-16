import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function App() {
  const [springConstant, setSpringConstant] = useState(1);
  const [initialStretch, setInitialStretch] = useState(1);
  const [mass, setMass] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ springConstant, initialStretch, mass }),
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [springConstant, initialStretch, mass]);

  const chartData = {
    labels: data.map((d) => d.time),
    datasets: [
      {
        label: "Vibration over time",
        data: data.map((d) => d.position),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: {
        type: "x",
      },
      y: {
        type: "y",
      },
    },
  };
  return (
    <div className="App">
      {/* Input fields for the parameters */}
      <input
        type="number"
        value={springConstant}
        onChange={(e) => setSpringConstant(+e.target.value)}
      />
      <input
        type="number"
        value={initialStretch}
        onChange={(e) => setInitialStretch(+e.target.value)}
      />
      <input
        type="number"
        value={mass}
        onChange={(e) => setMass(+e.target.value)}
      />

      {/* Chart for the vibration data */}
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default App;
