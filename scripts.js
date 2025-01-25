const regionsData = {
  andijan: {
      population: 3215546,
      trade: 25450000,
      employment: 68.7,
      business: 204
  },
  navoi: {
      population: 7215546,
      trade: 65940000,
      employment: 62.8,
      business: 408
  },
  bukhara: {
      population: 1546897,
      trade: 10250000,
      employment: 72.5,
      business: 150
  },
  tashkent: {
      population: 2545789,
      trade: 30890000,
      employment: 70.3,
      business: 320
  },
};

const regionSelect1 = document.getElementById('regionSelect1');
const regionSelect2 = document.getElementById('regionSelect2');
const regionName1 = document.getElementById('regionName1');
const regionName2 = document.getElementById('regionName2');

// Table cells to update
const population1 = document.getElementById('population1');
const population2 = document.getElementById('population2');
const trade1 = document.getElementById('trade1');
const trade2 = document.getElementById('trade2');
const employment1 = document.getElementById('employment1');
const employment2 = document.getElementById('employment2');
const business1 = document.getElementById('employment1');
const business2 = document.getElementById('employment2');

const populationChartCtx = document.getElementById('populationChart').getContext('2d');
const tradeChartCtx = document.getElementById('tradeChart').getContext('2d');
const employmentChartCtx = document.getElementById('employmentChart').getContext('2d');

let populationChart, tradeChart, employmentChart;

function createCharts() {
  populationChart = new Chart(populationChartCtx, {
      type: 'bar',
      data: {
          labels: [regionName1.textContent, regionName2.textContent],
          datasets: [{
              label: 'Population',
              data: [regionsData[regionSelect1.value].population, regionsData[regionSelect2.value].population],
              backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)']
          }]
      }
  });

  tradeChart = new Chart(tradeChartCtx, {
      type: 'line',
      data: {
          labels: [regionName1.textContent, regionName2.textContent],
          datasets: [{
              label: 'Foreign Trade (in $)',
              data: [regionsData[regionSelect1.value].trade, regionsData[regionSelect2.value].trade],
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false
          }]
      }
  });

  employmentChart = new Chart(employmentChartCtx, {
      type: 'pie',
      data: {
          labels: [regionName1.textContent, regionName2.textContent],
          datasets: [{
              label: 'Employment Rate',
              data: [regionsData[regionSelect1.value].employment, regionsData[regionSelect2.value].employment],
              backgroundColor: ['rgba(255, 205, 86, 0.6)', 'rgba(153, 102, 255, 0.6)']
          }]
      }
  });
}

function updateTable() {
  regionName1.textContent = regionSelect1.options[regionSelect1.selectedIndex].text;
  regionName2.textContent = regionSelect2.options[regionSelect2.selectedIndex].text;

  const region1Data = regionsData[regionSelect1.value];
  const region2Data = regionsData[regionSelect2.value];

  // Update table values
  population1.textContent = region1Data.population.toLocaleString();
  population2.textContent = region2Data.population.toLocaleString();
  trade1.textContent = `$${(region1Data.trade / 1e9).toFixed(2)} billion`;
  trade2.textContent = `$${(region2Data.trade / 1e9).toFixed(2)} billion`;
  employment1.textContent = `${region1Data.employment}%`;
  employment2.textContent = `${region2Data.employment}%`;
}

function updateCharts() {
  populationChart.data.labels = [regionName1.textContent, regionName2.textContent];
  populationChart.data.datasets[0].data = [regionsData[regionSelect1.value].population, regionsData[regionSelect2.value].population];
  populationChart.update();

  tradeChart.data.labels = [regionName1.textContent, regionName2.textContent];
  tradeChart.data.datasets[0].data = [regionsData[regionSelect1.value].trade, regionsData[regionSelect2.value].trade];
  tradeChart.update();

  employmentChart.data.labels = [regionName1.textContent, regionName2.textContent];
  employmentChart.data.datasets[0].data = [regionsData[regionSelect1.value].employment, regionsData[regionSelect2.value].employment];
  employmentChart.update();
}

regionSelect1.addEventListener('change', () => {
  updateTable();
  updateCharts();
});
regionSelect2.addEventListener('change', () => {
  updateTable();
  updateCharts();
});

createCharts();
updateTable();