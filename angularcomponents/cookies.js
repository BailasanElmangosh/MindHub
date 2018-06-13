(function () {
    landingPage.factory("cookies", function ($cookies) {
        return {
          set:function (key,token)
        {
           $cookies.put(key, token);

        },

        get:function(key)
        {
             console.log($cookies.get(key)); 
        },
        remove:function(key)
        { 
             $cookies.remove(key);
        }

        }


    })
    landingPage.factory("imgCookies", function ($cookies) {
        return {
          set:function (key,path)
        {
           $cookies.put(key, token);

        },

        get:function(key)
        {
             console.log($cookies.get(key)); 
        }

        }

        
    })
})();