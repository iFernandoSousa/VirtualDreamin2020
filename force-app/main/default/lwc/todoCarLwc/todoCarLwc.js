import { LightningElement, api } from 'lwc';

export default class TodoCarLwc extends LightningElement {
    @api taskId;
    @api subject;
    @api editMode;
    tempSubject;
        
    connectedCallback() {
        this.tempSubject = this.subject;
    }

    subjectChange(event) {
        this.tempSubject = event.currentTarget.value;
    }

    handleCancelClick() {
        this.tempSubject = this.subject;
        this.editMode = false;
    }

    handleSaveClick() {
        this.sendClickEvent('save', this.taskId, this.tempSubject);
    }

    editClick() {
        this.editMode = true;
    }

    deleteClick() {
        this.sendClickEvent('delete', this.taskId);
    }

    sendClickEvent(action, taskId, subject) {
        this.editMode = false;

        const evenClick = new CustomEvent('todoeventclick', {
            detail: {
                action : action,
                taskId : taskId,
                subject: subject
            }
        });

        this.dispatchEvent(evenClick);
    }
}