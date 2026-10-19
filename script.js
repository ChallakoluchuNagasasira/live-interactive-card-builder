// 1. Select the required HTML elements
const userName = document.getElementById("user-name");
const userRole = document.getElementById("user-role");
const profileCard = document.getElementById("profile-card");
const taskList = document.getElementById("task-list");

// 2. Change text content
userName.textContent = "Ch. Naga Sasira";
userRole.textContent = "Frontend Student";

// 3. Add a class and change the name color
profileCard.classList.add("active-card");
userName.style.color = "blue";

// 4. Set a custom data attribute
profileCard.setAttribute("data-status", "verified");

// 5. Create and add a new task
const newTask = document.createElement("li");
newTask.textContent = "New Task: Practice DOM Manipulation";
newTask.classList.add("pending");
taskList.appendChild(newTask);

// 6. Remove the invalid task
const invalidTask = document.getElementById("invalid-task");
invalidTask.remove();
