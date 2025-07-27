// This is the given array to be added on

let initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Continue from here ... 

// Creating function that will get input and validate
function GetTask(initialTasks) {

  // Prompt user for the number of tasks they must add.
  let taskCount; 
  do {
    taskCount = parseInt(prompt("How many Tasks would you like to add today (Must be beween 1 and 3)?"));
    if (isNaN(taskCount)) {
      alert("Please enter a valid number beween 1 and 3!");
    }
    else if (taskCount < 1 || taskCount > 3) {
      alert("The value entered is not between 1 and 3! Ensure your value is valid number beween 1 and 3!");
    }
  } while (isNaN(taskCount) || taskCount < 1 || taskCount > 3 );

  for (let i = 1; i <= taskCount ; i++) {

    // Prompting for the task title
    let taskTitle = prompt(`Please enter Task: ${i} title`);
    while (!taskTitle || taskTitle.trim() === "") {
      taskTitle = prompt(`Task: ${i} title cannot be empty. Please enter a value for Task: ${i} title`);
    }
    taskTitle = taskTitle.trim();

    // prompting for the task description
    let taskDescrip = prompt(`Please enter Task: ${i} description`);
    while (!taskDescrip || taskDescrip.trim() === "") {
      taskDescrip = prompt(`Task: ${i} description cannot be empty. Please enter a value for Task: ${i} description`);
    }
    taskDescrip = taskDescrip.trim();

    let taskStatus;
    do {
      taskStatus = prompt(`Enter Task ${i} status (todo/doing/done):`);
      if (taskStatus) {
        taskStatus = taskStatus.toLowerCase();
      }
      if (taskStatus !== "todo" && taskStatus !== "doing" && taskStatus !== "done"){
        alert("INVALID STATUS! Please enter only: todo, doing, or done");
      }
    } while (taskStatus !== "todo" && taskStatus !== "doing" && taskStatus !== "done");

    // P2.24 implement here: Storing task details in object
    const output = {
      id: initialTasks.length + 1,
      title: taskTitle.trim(),
      description: taskDescrip.trim() ,
      status: taskStatus
    };

    // Add Looped task into the the exhisting array
    initialTasks.push(output);
    console.log(`Task: ${output.id} has been successfully added.`);
  }

  // Alert when when the loop has ended 
  alert(`Tasks saved! You have logged ${taskCount} tasks. There are now ${initialTasks.length}. Check the console for details`);

  // Implement user stroy P2.25
  if (initialTasks.length >= 6) {
    alert(`You have reached the limit of ${initialTasks.length} tasks! There are enough tasks on your board, please check them in the console`);
  }

  return initialTasks;
}

// Call the function and 
initialTasks = GetTask(initialTasks);

console.log(initialTasks);