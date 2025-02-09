const jsonTasks = [
  { task: "Task 1", status: "To do", daysDuration: "" },
  { task: "Task 2", status: "In progress", daysDuration: "" },
  { task: "Task 3", status: "Finished", daysDuration: "3" },
  { task: "Task 4", status: "To fix", daysDuration: "" },
  { task: "Task 5", status: "To check", daysDuration: "" },
  { task: "Task 6", status: "To do", daysDuration: "" },
  { task: "Task 7", status: "Finished", daysDuration: "2" },
  { task: "Task 8", status: "To check", daysDuration: "" },
  { task: "Task 9", status: "To check", daysDuration: "" },
  { task: "Task 10", status: "To fix", daysDuration: "" },
  { task: "Task 11", status: "Finished", daysDuration: "1" },
  { task: "Task 12", status: "To do", daysDuration: "" },
  { task: "Task 13", status: "Finished", daysDuration: "1" },
  { task: "Task 14", status: "To fix", daysDuration: "" },
  { task: "Task 15", status: "In progress", daysDuration: "" },
  { task: "Task 16", status: "Finished", daysDuration: "2" },
  { task: "Task 17", status: "Finished", daysDuration: "5" },
  { task: "Task 18", status: "To check", daysDuration: "" },
  { task: "Task 19", status: "Finished", daysDuration: "4" },
  { task: "Task 20", status: "In progress", daysDuration: "" },
  { task: "Task 21", status: "Finished", daysDuration: "4" },
  { task: "Task 22", status: "In progress", daysDuration: "1" },
];

// For Chart.js Library//
function countTodoTasks(task) {
  return task.filter((task) => task.status === "To do").length;
}
const TodoTasksQuantity = countTodoTasks(jsonTasks);

function countInProgressTasks(task) {
  return task.filter((task) => task.status === "In progress").length;
}
const InProgressTasksQuantity = countInProgressTasks(jsonTasks);

function countToCheckTasks(task) {
  return task.filter((task) => task.status === "To check").length;
}
const ToCheckTasksQuantity = countToCheckTasks(jsonTasks);

function countToFixTasks(task) {
  return task.filter((task) => task.status === "To fix").length;
}
const ToFixTasksQuantity = countToFixTasks(jsonTasks);

function countFinishedTasks(task) {
  return task.filter((task) => task.status === "Finished").length;
}
const FinishedTasksQuantity = countFinishedTasks(jsonTasks);

const popCanvas = document.getElementById("popChart");

const barChart = new Chart(popCanvas, {
  type: "bar",
  data: {
    labels: ["To do", "In progress", "To check", "To fix", "Finished"],
    datasets: [
      {
        label: "Quantity of new / in progress / finished tasks",
        data: [
          TodoTasksQuantity,
          InProgressTasksQuantity,
          ToCheckTasksQuantity,
          ToFixTasksQuantity,
          FinishedTasksQuantity,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        ticks: {
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: "left",
        align: "start",
        labels: {
          backgroundColor: "transparent",
          font: {
            size: 18,
          },
        },
      },
    },
  },
});

// For Highcharts.js Library//
function countdaysDuration1Tasks(task) {
  return task.filter((task) => task.daysDuration === "1").length;
}
const daysDuration1TasksQuantity = countdaysDuration1Tasks(jsonTasks);

function countdaysDuration2Tasks(task) {
  return task.filter((task) => task.daysDuration === "2").length;
}
const daysDuration2TasksQuantity = countdaysDuration2Tasks(jsonTasks);

function countdaysDuration3Tasks(task) {
  return task.filter((task) => task.daysDuration === "3").length;
}
const daysDuration3TasksQuantity = countdaysDuration3Tasks(jsonTasks);

function countdaysDuration4Tasks(task) {
  return task.filter((task) => task.daysDuration === "4").length;
}
const daysDuration4TasksQuantity = countdaysDuration4Tasks(jsonTasks);

function countdaysDuration5Tasks(task) {
  return task.filter((task) => task.daysDuration === "5").length;
}
const daysDuration5TasksQuantity = countdaysDuration5Tasks(jsonTasks);

const highchartsChart = document.getElementById("container");

Highcharts.chart("container", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
    backgroundColor: "transparent",
  },
  title: {
    text: "Quantity of tasks with different duration, days",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Percentage of all finished tasks",
      colorByPoint: true,
      data: [
        {
          name: "1 day",
          y: daysDuration1TasksQuantity,
        },
        {
          name: "2 days",
          y: daysDuration2TasksQuantity,
        },
        {
          name: "3 days",
          y: daysDuration3TasksQuantity,
        },
        {
          name: "4 days",
          y: daysDuration4TasksQuantity,
        },
        {
          name: "5 days",
          y: daysDuration5TasksQuantity,
        },
      ],
    },
  ],
});

// For Chartist.js Library//
const wholeWeekTasksQuantity = jsonTasks.length;
console.log(wholeWeekTasksQuantity);
const averageDayTasksQuantity = wholeWeekTasksQuantity / 5;
console.log(averageDayTasksQuantity);
const averageDayFinishedTasksQuantity = FinishedTasksQuantity / 5;
console.log(averageDayFinishedTasksQuantity);

const chartistChart = document.getElementById("ct-chart");

new Chartist.Line(
  ".ct-chart",
  {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    series: [
      {
        name: "Whole Quantity of the Tasks at the Week",
        data: [
          wholeWeekTasksQuantity,
          wholeWeekTasksQuantity,
          wholeWeekTasksQuantity,
          wholeWeekTasksQuantity,
          wholeWeekTasksQuantity,
        ],
      },
      {
        name: "Average Quantity of the Tasks at the Day",
        data: [
          averageDayTasksQuantity,
          averageDayTasksQuantity,
          averageDayTasksQuantity,
          averageDayTasksQuantity,
          averageDayTasksQuantity,
        ],
      },
      {
        name: "Average Quantity of the Finished Tasks at the Day",
        data: [
          averageDayFinishedTasksQuantity,
          averageDayFinishedTasksQuantity,
          averageDayFinishedTasksQuantity,
          averageDayFinishedTasksQuantity,
          averageDayFinishedTasksQuantity,
        ],
      },
    ],
  },
  {
    fullWidth: true,
    chartPadding: {
      right: 40,
    },
    axisY: {
      onlyInteger: true,
      ticks: [0, 5, 10, 15, 20, 25, 30],
    },
  }
);
