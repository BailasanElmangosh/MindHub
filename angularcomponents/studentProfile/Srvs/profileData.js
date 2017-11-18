studentProfile.factory("profileDataSrv", function ($http) {
    return {
           getData: function () {
            return $http({
                method: "Get",
                url: "http://localhost:8178/api/Data",
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiYWlsYXNhbm1AeWFob28uY29tIiwianRpIjoiZWY1OWZmZDUtMmZjOC00OGRkLWIyMzQtNzRkZTEwOGI2OWVmIiwiZW1haWwiOiJiYWlsYXNhbm1AeWFob28uY29tIiwiU3R1ZGVudCI6IlRydWUiLCJleHAiOjE1MTAwNTM1MTEsImlzcyI6Imh0dHA6Ly9ncmFkdWF0aW9uUHJvamVjdC5jb20iLCJhdWQiOiJodHRwOi8vZ3JhZHVhdGlvblByb2plY3QuY29tIn0.t1VzY_W1rkp0Gv9-jmPKCERgUj6uMEuHSGQWhAR7zzc'
                }
            })
        }
    }
})