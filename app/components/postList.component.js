import { retrievePosts } from '../actions/posts.actions';
import { GetPostsListSelector } from '../app.selectors';

class PostListComponent {

  constructor($ngRedux) {
      this.$ngRedux = $ngRedux;
  }

  retrievePosts() {
      this.actions.retrievePosts(response => {
          console.log('response:', response);
      });
  }

  $onInit() {
      this.controllerActions = {
          retrievePosts
      };

      this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
          this.state = state;
          this.actions = actions;
      });
  }

  mapStateToTarget(state) {
      return {
          postsList: GetPostsListSelector(state)
      };
  }

  $onDestroy() {
      this.disconnectRedux();
  }

}

export default {
    template: require('./postList.template.html'),
    controller: PostListComponent
};
