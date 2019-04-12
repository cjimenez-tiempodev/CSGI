import './app.scss';


class AppController {
  constructor() {
    console.log('contructor');
  }

  $onInit() {
    console.log('onInit');
  }

  $onDestroy() {
    console.log('onDestroy');
  }
}

export default {
    template: require('./app.template.html'),
    controller: AppController
};
