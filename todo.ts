import {todoInterface} from './todointerface';

class ToDo implements todoInterface{

    constructor(){}

    tasks: Array<string>=[];

    addTask(task:string):number{
        this.tasks.push(task);
        console.log("____________ New Task Added ____________");
        console.log("Task " + task + " inserted in the list.");
        return this.tasks.length;
    }

    listAllItems():void{
        console.log("START: All items in Array:")
        this.tasks.forEach(function(task){
            console.log(task);
        })
        console.log("END: All items in Array:")
    }

    deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task);
        if (index > -1){
            this.tasks.splice(index,1);
            console.log("_____________ Task Removed _____________");
            console.log("Task " + task + " removed from the list.");
        }
        return this.tasks.length;
    }

}

let myToDos = new ToDo();
myToDos.addTask('eat');
myToDos.addTask('sleep');

myToDos.listAllItems();

myToDos.deleteTask('sleep');
