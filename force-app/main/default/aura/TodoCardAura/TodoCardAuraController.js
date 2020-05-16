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
        let id = component.get('v.Id');
        let tempSubject = component.get('v.TempSubject');
        
        helper.sendClickEvent('save', id, tempSubject);
    },

    editClick : function(component, event, helper) {
        component.set('v.EditMode', true);
    },

    deleteClick : function(component, event, helper) {
        let id = component.get('v.Id');

        helper.sendClickEvent('delete', id);
    }
})