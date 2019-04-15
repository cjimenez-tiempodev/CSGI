class FormController {
    constructor() {

    }

    $onInit() {
    
    }

    $onDestroy() {
        this.disconnectRedux();
    }
}

export default {
    template: require('./form.template.html'),
    controller: FormController
};
