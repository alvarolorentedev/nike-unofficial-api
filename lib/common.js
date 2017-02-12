 const urls = {
        api: 'https://api.nike.com/sport/v3/',
        paths: {
            auth: 'https://developer.nike.com/services/login',
            activitiesList: 'me/activities/before_time',
            activity: {
                get: 'me/activity',
                post: ''
            }
        }
 }

 

// accessTokenUrl: 'https://developer.nike.com/services/login',
// activitiesListUrl: 'https://api.nike.com/v1/me/sport/activities',
// activity: 'https://api.nike.com/v1/me/sport/activities/',
// activitiesListUrlv3: 'https://api.nike.com/sport/v3/me/activities/before_time/',
// activityv3: 'https://api.nike.com/sport/v3/me/activity/',

 module.exports = { urls: urls }