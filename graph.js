const xpPlusFive = xp.map(item => item + 5);

const shift = 10;
const xpf = xpPlusFive.splice(10);
const shiftArr = new Array(shift).fill(0);

const labelsInput = inputData.map((item, index) => `Day ${index}`);

const labels = [...labelsInput, `Day ${inputData.length}`];

const res = [...shiftArr, ...xpf];

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Исходные данные',
        borderColor: 'rgb(255, 99, 132)',
        data: inputData
      },
      {
        label: 'Результат',
        borderColor: 'green',
        data: res
      }
    ]
  },
  options: {}
});
