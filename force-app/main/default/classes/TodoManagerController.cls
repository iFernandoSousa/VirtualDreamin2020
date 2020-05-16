public with sharing class TodoManagerController {
    @AuraEnabled
    public static List<Task> getTasks() {
        return [SELECT Id, Subject FROM Task WITH SECURITY_ENFORCED LIMIT 200];
    }

    @AuraEnabled
    public static Task saveTask(String id, String subject) {
        Task t = new Task(Subject = subject);
        if (String.isNotBlank(id)) {
            t.Id = id;
        }

        if (Schema.SObjectType.Task.isCreateable() && Schema.SObjectType.Task.isUpdateable()) {
            upsert t;
        } else {
            throw new DMLException('You don\'t have the right permission to edit this task');
        }

        return t;
    }

    @AuraEnabled
    public static Boolean deleteTask(String id) {
        Task t = new Task(Id = id);
        if (Schema.SObjectType.Task.isDeletable()) {
            delete t;
            return true;
        } else {
            throw new DMLException('You don\'t have the right permission to delete this task');
        }
    }
}