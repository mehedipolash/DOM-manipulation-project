
const completeBtns = document.querySelectorAll(".task-btn");
const assignTaskElement = document.getElementById("assign-task");
const navCounterElement = document.getElementById("nav-counter");
let completedTasks = 0;

for (const btn of completeBtns) {
    btn.addEventListener("click", function(event){
        const clickedBtn = event.target;
        const taskContainer = clickedBtn.closest(".task-container");
        const taskTitle = taskContainer.querySelector("h2").innerText;
        const currentTime = new Date().toLocaleString();

        alert(`You completed the '${taskTitle}' task at ${currentTime}.`);

        const activityContainer = document.getElementById("activity-container");
        const activityItem =document.createElement('div');
                activityItem.classList.add('bg-gray-50')
                activityItem.classList.add('rounded-lg')
                activityItem.classList.add('p-4')
                activityItem.classList.add('mt-2')
                
                activityItem.innerHTML=`
                <p>You completed the '${taskTitle}' task at ${currentTime}.</p>
                `

                activityContainer.appendChild(activityItem);

        btn.disabled = true;
        btn.classList.add("opacity-50", "cursor-not-allowed");

        completedTasks++;


        const remainingTasks = parseInt(assignTaskElement.innerText);
        const completedCount = parseInt(navCounterElement.innerText);
        
        if (remainingTasks > 0) {
            assignTaskElement.innerText = remainingTasks - 1;
        }
        
        navCounterElement.innerText = completedCount + 1;


        if (completedTasks === completeBtns.length) {
            alert("Congratulations! You completed all the tasks.");
        }
    });
}

