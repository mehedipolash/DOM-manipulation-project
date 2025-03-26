const dateTimeElement = document.getElementById("date-time");

const updateDate = function(){
    const today = new Date().toDateString();
    dateTimeElement.innerText = today;
};

updateDate();