({
    sendClickEvent: function (action, taskId, subject) {
        let todoEventClick = $A.get("e.c:TodoEventClick");

        todoEventClick.setParams({ "Action": action });
        if (taskId) {
            todoEventClick.setParams({ "TaskId": taskId });
        }
        todoEventClick.setParams({ "Subject": subject });
        
        todoEventClick.fire();
    }
})