const myChart1 = document.getElementById('myChart').getContext('2d');
const labels1 = ['YES', 'YES BUT GREEN'];
const data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];

const chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    }
})

const myChart2 = document.getElementById('myChart2').getContext('2d');
let labels2 = ['American Airlines Group', 'Ryanair', 'China Southern Airlines', 'Lufthansa Group'];
let data2 = [199.6, 130.3, 126.3, 130];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

const chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Num of passengers carreied:",
            display: true
        },
        legend: {
            display: false
        }
    }
})