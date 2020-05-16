({
    sendClickEvent: function (action, id, subject) {
        let todoEventClick = $A.get("e.c:TodoEventClick");

        todoEventClick.setParams({ "Action": action });
        if (id) {
            todoEventClick.setParams({ "Id": id });
        }
        todoEventClick.setParams({ "Subject": subject });
        
        todoEventClick.fire();
    }
})