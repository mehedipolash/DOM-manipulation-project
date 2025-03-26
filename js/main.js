const completeBtns = document.querySelectorAll('.task-btn');
const assignTaskValue = document.getElementById('task-counter');
const assignNavValue = document.getElementById('nav-counter');
let completedTasks = 0;


for (let btn of completeBtns) {
  btn.addEventListener('click', function (event) {
    const btnClicked = event.target;
    const taskContainer = btnClicked.closest('.task-container');
    const taskTitle = taskContainer.querySelector('h2').innerText;
    const currentTime = new Date().toLocaleString();

    alert(`You completed the '${taskTitle}' task at ${currentTime}.`);

    const activityContainer = document.getElementById('activity-container');

    const activityTask = document.createElement('div');
    activityTask.classList.add('bg-white');
    activityTask.classList.add('rounded-lg');
    activityTask.classList.add('p-4');
    activityTask.classList.add('mt-2');
    activityTask.classList.add('ml-2');

    activityTask.innerHTML = `
     <p>You completed the <br> '${taskTitle}' task at <br> ${currentTime}.</p>
    `;
    activityContainer.appendChild(activityTask);


    btn.disabled = true;
    btn.classList.add('opacity-40', 'cursor-not-allowed');
    completedTasks++;
     

   const remainingTaskValue=parseInt(assignTaskValue.innerText) 
    const remainingNavValue = parseInt(assignNavValue.innerText); 
    
    if (remainingTaskValue > 0) {
      assignTaskValue.innerText = remainingTaskValue - 1;
    }
    assignNavValue.innerText = remainingNavValue + 1;


    if (completedTasks == completeBtns.length) {
      alert('Congratulations! You have completed all the tasks.');
    }

  });
}
