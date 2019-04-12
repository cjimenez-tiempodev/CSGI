import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';

import AppComponent from './app.component';
import FormComponent from './components/form.component';
import PostListComponent from './components/postList.component';
import config from './app.config';

export default angular.module('app', [
    uiRouter,
    ngRedux,
    ngReduxUiRouter
])
    .config(config)
    .component('interviewApp', AppComponent)
    .component('formComponent', FormComponent)
    .component('postListComponent', PostListComponent)
    .name;
