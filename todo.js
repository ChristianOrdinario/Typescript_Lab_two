"use strict";
exports.__esModule = true;
var ToDo = /** @class */ (function () {
    function ToDo() {
        this.tasks = [];
    }
    ToDo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("____________ New Task Added ____________");
        console.log("Task " + task + " inserted in the list.");
        return this.tasks.length;
    };
    ToDo.prototype.listAllItems = function () {
        console.log("START: All items in Array:");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
        console.log("END: All items in Array:");
    };
    ToDo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("_____________ Task Removed _____________");
            console.log("Task " + task + " removed from the list.");
        }
        return this.tasks.length;
    };
    return ToDo;
}());
var myToDos = new ToDo();
myToDos.addTask('eat');
myToDos.addTask('sleep');
myToDos.listAllItems();
myToDos.deleteTask('sleep');
