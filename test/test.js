const assert = require('assert');
const TaskManager = require('../../taskManager.js');


describe("TaskManager", () => {

  //addTask testing
    describe(".addTask", () => {
      it("should add the task to the tasks array", () => {
        const taskManager = new TaskManager(0);

        const expected = {
          id: 0,
          name: "Test",
          description: "Test",
          assignedTo: "Test",
          dueDate: '04-08-2021',
          status: "TODO",
        };

        taskManager.addTask(
          expected.name,
          expected.description,
          expected.assignedTo,
          expected.dueDate,
          expected.status
        );
          const result = taskManager.tasks[0]

        assert.deepEqual(result, expected);
      });
    });

    //deleteTask testing
    describe(".deleteTask", () => {
      describe("when passed an existing taskId", () => {
        it("should remove the task from the tasks array", () => {
          const taskManager = new TaskManager();

          const taskToDelete = {
            id: taskManager.currentId,
            name: "Test",
            description: "Test",
            assignedTo: "Test",
            dueDate: '08-03-2021',
            status: "TODO",
          };

          const doNotDelete = {
            id: taskManager.currentId + 1,
            name: "Test",
            description: "Test",
            assignedTo: "Test",
            dueDate: '08 - 03 - 2021',
            status: "TODO",
          };
  
          taskManager.addTask(
            taskToDelete.name,
            taskToDelete.description,
            taskToDelete.assignedTom,
            taskToDelete.dueDate,
            taskToDelete.status
          );
          
          taskManager.addTask(
            doNotDelete.name,
            doNotDelete.description,
            doNotDelete.assignedTo,
            doNotDelete.dueDate,
            doNotDelete.status
          );
  
          taskManager.deleteTask(taskToDelete.id);
  
          assert.deepEqual(taskManager.tasks, [doNotDelete]);
        });
      });
    });

    //getTaskById testing
    describe(".getTaskById", () => {
      describe("when passed an existing taskId", () => {
        it("should return the task", () => {
          const taskManager = new TaskManager(1);
  
          const task = {
            id: taskManager.currentId,
            name: "Test",
            description: "Test",
            assignedTo: "Test",
            dueDate: '08-03-2021',
            status: "TODO",
          };
  
          taskManager.addTask(
            task.name,
            task.description,
            task.assignedTo,
            task.dueDate,
            task.status
          );
  
          const result = taskManager.getTaskById(1);
  
          assert.deepEqual(result, task);
        });
      });
    });
});

