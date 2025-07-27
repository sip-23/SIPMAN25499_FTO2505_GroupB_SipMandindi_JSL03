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
  const taskcount = prompt("How many Task would you like to add today (Must be beween 3 and 6)?")

  for (let i = 1; i < taskcount + 1 ; i++) {

    // Prompting for the task title
    let taskTitle = prompt(`Please enter Task: ${i} title`)
    while (!taskTitle || taskTitle.trim() === "") {
      taskTitle = prompt(`Task: ${i} title cannot be empty. Please enter a value for Task: ${i} title`)
    }
    taskTitle = taskTitle.trim()

    // prompting for the task description
    let taskDescrip = prompt(`Please enter Task: ${i} description`)
    while (!taskDescrip || taskDescrip.trim() === "") {
      taskDescrip = prompt(`Task: ${i} description cannot be empty. Please enter a value for Task: ${i} description`)
    }
    taskDescrip = taskDescrip.trim()

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

    let output = {
      id: initialTasks.length + 1,
      title: taskTitle.trim(),
      description: taskDescrip.trim() ,
      status: taskStatus};

    output = initialTasks.push(output);

    return output;
  }
}

// Call the function and 
initialTasks.push(GetTask(initialTasks));

console.log(initialTasks)