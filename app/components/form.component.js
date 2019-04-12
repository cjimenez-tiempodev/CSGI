class FormController {
    constructor() {
      console.log('contructor');
    }

    $onInit() {
      console.log('onInit');
    }

    $onDestroy() {
      console.log('onDestroy');
        this.disconnectRedux();
    }
}

export default {
    template: require('./form.template.html'),
    controller: FormController
};
