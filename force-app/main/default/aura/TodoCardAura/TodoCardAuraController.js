({
    doInit:  function(component, event, helper) {
        let subject = component.get('v.Subject');
        component.set('v.TempSubject', subject);
    },

    subjectChange: function(component, event, helper) {
        component.set('v.TempSubject', event.target.value);
    },

    handleCancelClick: function(component, event, helper) {
        let subject = component.get('v.Subject');
        component.set('v.TempSubject', subject);
        component.set('v.EditMode', false);
    },

    handleSaveClick: function(component, event, helper) {
        let taskId = component.get('v.TaskId');
        let tempSubject = component.get('v.TempSubject');
        component.set('v.EditMode', false);
        
        helper.sendClickEvent('save', taskId, tempSubject);
    },

    editClick : function(component, event, helper) {
        component.set('v.EditMode', true);
    },

    deleteClick : function(component, event, helper) {
        let taskId = component.get('v.TaskId');

        helper.sendClickEvent('delete', taskId);
    }
})