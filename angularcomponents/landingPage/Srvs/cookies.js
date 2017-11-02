(function () {
    landingPage.factory("cookies", function ($cookies) {
        return {
          set:function (token)
        {
           $cookies.put('token', token);
        },

        get:function()
        {
              alert($cookies.get('token')); 
        },
        remove:function()
        { 
             $cookies.remove('token');
        }

        }
    })
})();