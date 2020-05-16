({
    doInit : function(component, event, helper) {
        helper.loadData(component);
    },

    handlerAddNewTask: function(component, event, helper) {
        let tasks = component.get('v.Tasks');
        let newTask = {EditMode : true};
        tasks.unshift(newTask);
        component.set('v.Tasks', tasks);
        component.set('v.HasTasks', tasks.length > 0);
    },

    handleTodoEventClick: function(component, event, helper) {
        let action = event.getParam('Action');
        let id = event.getParam('Id');
        let subject = event.getParam('Subject');

        if (action == 'save') {
            helper.saveTask(component, id, subject);
        } else if (action == 'delete') {
            helper.deleteTask(component, id);
        }
    }
})