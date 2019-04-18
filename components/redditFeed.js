function RedditFeed(RedditService) {
    const ctrl = this;

    // list of reddit posts to display
    ctrl.feed = [];
    /**
     * call "https://www.reddit.com/r/aww/.json" 
     * and set ctrl.feed to be the results
     */
    $http"https://www.reddit.com/r/aww/.json", (data) => {
      let img;
      let title;
      let url;
    ctrl.fetchAwwSubreddit = () => {
      // call service then set our data
      RedditService.fetchAwwSubreddit()
      .then( (data) => {
          //do something with this data
          $.each(data.data.children, (i) => {
            title =(data.data.children[i].data.title);
            img =(data.data.children[i].data.thumbnail);
            url = (data.data.children[i].data.url);
     
            console.log(title, img, url);   
     
            $('.posts-container').append(`<img src="${img}"></img><br><div id="title-container">${title}</div><br><div id="link-container">Link: ${url}</div><br>`);
             return i < 10;
      )};
    };
  }
  
  angular.module('RedditApp').component('redditFeed', {
    template: `
      <div ng-repeat="post in $ctrl.feed">
        <h2>{{post.title}}</h2>
      </div>
      <div class="posts-container">
            <div id="post1" class="posts"></div>
            <div id="post2" class="posts"></div>
            <div id="post3" class="posts"></div>
            <div id="post4" class="posts"></div>
            <div id="post5" class="posts"></div>
            <div id="post6" class="posts"></div>
            <div id="post7" class="posts"></div>
            <div id="post8" class="posts"></div>
            <div id="post9" class="posts"></div>
            <div id="post10" class="posts"></div>
        </div>
    `, // or use templateUrl
    controller: RedditFeed,
});


