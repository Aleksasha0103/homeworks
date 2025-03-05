import React from "react";
import "./App.css";
import { Chart } from "react-google-charts";

function App() {
  const data1 = [
    ["Деятельность", "Часов в день"],
    ["Работа", 8],
    ["Учёба", 4],
    ["Прогулка", 1],
    ["Просмотр фильмов", 2],
    ["Общение с семьёй", 1.5],
    ["Чтение", 0.5],
    ["Сон", 7],
  ];

  const options1 = {
    title: "Активности в течение дня (будни)",
    titleTextStyle: {
      fontSize: 18,
    },
    legend: {
      position: "right",
      textStyle: {
        fontSize: 14,
      },
    },
  };

  const data2 = [
    ["Курс", "Время, ч/нед.", { role: "style" }],
    ["Фронтенд", 15, "#95dffc"],
    ["Бэкенд", 10, "#d49ef7"],
    ["Озвучка", 3, "#fcd6b3"],
    ["Музыка", 5, "#79fccf"],
    ["Стиль", 2, "#faa7c0"],
  ];

  const options2 = {
    title: "Время обучения в неделю",
    titleTextStyle: {
      fontSize: 18,
    },
    legend: {
      position: "bottom",
      textStyle: {
        fontSize: 14,
      },
    },
    vAxis: {
      format: "decimal",
      gridlines: {
        count: 10,
      },
    },
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" }}
      >
        <div style={{ width: "45%", textAlign: "center" }}>
          <Chart
            chartType="PieChart"
            data={data1}
            options={options1}
            width={"100%"}
            height={"400px"}
            marginRight={"20px"}
          />
        </div>
        <div style={{ width: "45%", textAlign: "center" }}>
          <Chart chartType="ColumnChart" width="100%" height="400px" data={data2} options={options2} />
        </div>
      </header>
    </div>
  );
}

export default App;
