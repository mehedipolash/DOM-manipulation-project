const currentDate = document.getElementById('current-date');

const updateDate = function () {
  const today = new Date().toDateString();
  currentDate.innerText = today;
};

updateDate();
