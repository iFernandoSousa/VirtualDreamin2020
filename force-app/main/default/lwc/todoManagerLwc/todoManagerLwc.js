import { LightningElement, api, track } from 'lwc';
import getData from '@salesforce/apex/TodoManagerController.getTasks';
import saveTask from '@salesforce/apex/TodoManagerController.saveTask';
import deleteTask from '@salesforce/apex/TodoManagerController.deleteTask';

export default class TodoManagerLwc extends LightningElement {
    @api title;
    @track tasks;

    get hasTasks() {
        return this.tasks && this.tasks.length > 0;
    }

    connectedCallback() {
        this.loadData();
    }

    handlerAddNewTask() {
        let myList = this.tasks;
        myList.unshift({EditMode : true});

        this.tasks = myList;
    }

    handleTodoEventClick(event) {
        let action = event.detail.action;
        let taskId = event.detail.taskId;
        let subject = event.detail.subject;

        if (action === 'save') {
            this.saveTask(taskId, subject);
        } else if (action === 'delete') {
            this.deleteTask(taskId);
        }
    }

    loadData() {
        getData().then(result => {
            this.tasks = result;
        }).catch(error => {
            window.console.error(error);
            //CHALLENGE: Show the user a Toast with this error
        });
    }

    saveTask(taskId, subject) {
        saveTask({id: taskId, subject: subject}).then(result => {
            window.console.log(result);
            this.loadData();
        }).catch(error => {
            window.console.error(error);
            //CHALLENGE: Show the user a Toast with the error
        })
    }

    deleteTask(taskId) {
        deleteTask({id: taskId}).then(result=> {
            if (result) {
                this.loadData();
            } else {
                window.console.log('We can not delete this task');
                //CHALLENGE: Show the user a Toast with the error
            }
        }).catch(error => {
            window.console.error(error);
            //CHALLENGE: Show the user a Toast with the error
        })
    }
}