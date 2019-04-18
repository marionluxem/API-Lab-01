function RedditService($http) {
    const service = this;

    /**
     * call [reddit json link] $http"https://www.reddit.com/r/aww/.json"
     * and set ctrl.feed to be the results
     */
    service.fetchAwwSubreddit = () => {
        // $http stuff goes here - call to the api
    };
}

angular
.module('RedditApp')
.service('RedditService', ['$http', RedditService])