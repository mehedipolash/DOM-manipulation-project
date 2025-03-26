const bodyElement = document.getElementById('body');
document.getElementById('theme-btn').addEventListener('click', function () {
  const colors = [
    '#3F7D58',
    '#5F99AE',
    '#BF3131',
    '#C1CFA1',
    '#ADB2D4',
    '#443627',
    '#7886C7',
    '#218c74',
    '#227093',
    '#1e3799',
  ];
  bodyElement.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});
