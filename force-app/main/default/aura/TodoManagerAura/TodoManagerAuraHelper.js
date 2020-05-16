({
    loadData : function(component) {
        let action = component.get('c.getTasks'); 

        action.setCallback(this, function(a){
            let state = a.getState();
            component.set('v.Tasks', []);

            if(state == 'SUCCESS') {
                let tasks = a.getReturnValue();
                window.console.log(tasks);

                component.set('v.Tasks', tasks);
                component.set('v.HasTasks', tasks.length > 0);
            }
        });
        $A.enqueueAction(action);
    },
    
    saveTask: function(component, Id, Subject) {
        let action = component.get('c.saveTask'); 
        
        action.setParams({
            "id" : Id,
            "subject" : Subject
        });

        action.setCallback(this, function(a){
            let state = a.getState();
            if(state == 'SUCCESS') {
                this.loadData(component);
            }
        });
        $A.enqueueAction(action);
    },

    deleteTask: function(component, Id) {
        let action = component.get('c.deleteTask'); 
        action.setParams({
            "id" : Id,
        });
        
        action.setCallback(this, function(a){
            let state = a.getState();
            window.console.log(state);

            if(state == 'SUCCESS') {
                this.loadData(component);
            }
        });
        $A.enqueueAction(action);
    },
})