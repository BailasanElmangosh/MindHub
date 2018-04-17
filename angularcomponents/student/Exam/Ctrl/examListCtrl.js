
var quizCtrl = function ($scope, $http, helper,examListSrv,$timeout) {
    $scope.quizName = '/angularcomponents/student/Exam/data/csharp.js';

    //Note: Only those configs are functional which is documented at: http://www.codeproject.com/Articles/860024/Quiz-Application-in-AngularJs
    // Others are work in progress.
    $scope.defaultConfig = {
        'allowBack': true,
        'allowReview': true,
        'autoMove': false,  // if true, it will move to next question automatically when answered.
        'duration': 0,  // indicates the time in which quiz needs to be completed. post that, quiz will be automatically submitted. 0 means unlimited.
        'pageSize': 1,
        'requiredAll': false,  // indicates if you must answer all the questions before submitting.
        'richText': false,
        'shuffleQuestions': false,
        'shuffleOptions': false,
        'showClock': false,
        'showPager': true,
        'theme': 'none'
    }

    $scope.goTo = function (index) {
        if (index > 0 && index <= $scope.totalItems) {
            $scope.currentPage = index;
            $scope.mode = 'quiz';
        }
    }

    $scope.onSelect = function (question, option) {
        if (question.QuestionTypeId == 1) {
            question.options.forEach(function (element, index, array) {
                if (element.Id != option.Id) {
                    element.Selected = false;
                    //question.Answered = element.Id;
                }
            });
        }

        if ($scope.config.autoMove == true && $scope.currentPage < $scope.totalItems)
            $scope.currentPage++;
    }

    $scope.onSubmit = function () {
        var answers = [];
        $scope.questions.forEach(function (q, index) {
            answers.push({ 'QuizId': $scope.quiz.Id, 'QuestionId': q.id, 'Answered': q.isAnswerv });
            console.log(answers)
        });
        // Post your data to the server here. answers contains the questionId and the users' answer.
        //$http.post('api/Quiz/Submit', answers).success(function (data, status) {
        //    alert(data);
        //});
        $scope.mode = 'result';
    }

    $scope.pageCount = function () {
        return Math.ceil($scope.questions.length / $scope.itemsPerPage);
    };

    $scope.quiz= {
        "Id": 2,
        "name": "C# and .Net Framework",
        "description": "C# and .Net Quiz (contains C#, .Net Framework, Linq, etc.)"
    }
    $scope.config1={
        "shuffleQuestions": true,
        "showPager": false,
        "allowBack": true,
        "autoMove": true
    },
    //If you wish, you may create a separate factory or service to call loadQuiz. To keep things simple, i have kept it within controller.
    $scope.loadQuiz = function () {
        examListSrv.getData().success(function(data,status){
            if(data.status=='Success')
                {
                    $scope.examList=data.exam;
                    $scope.config = helper.extend({}, $scope.defaultConfig, $scope.config1);
                    $scope.questions = $scope.config1.shuffleQuestions ? helper.shuffle($scope.examList) : $scope.examList;
                    $scope.totalItems = $scope.questions.length;
                    $scope.itemsPerPage = $scope.config.pageSize;
                    $scope.currentPage = 1;
                    $scope.mode = 'quiz';
                    if($scope.config.shuffleOptions)
                       $scope.shuffleOptions();
       
                    $scope.$watch('currentPage + itemsPerPage', function () {
                        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                          end = begin + $scope.itemsPerPage;
                        $scope.filteredQuestions = $scope.questions.slice(begin, end);
                    });
               
                }
                else
                {  
                }
        })
            
    }
    
    $scope.shuffleOptions = function(){
        $scope.questions.forEach(function (question) {
           question.options = helper.shuffle(question.options);
        });
    }
    
    // $scope.loadQuiz($scope.quizName);

    $scope.isAnswered = function (index) {
        var answered = 'Not Answered';
        $scope.questions[index].options.forEach(function (element, index, array) {
            if (element.Selected == true) {
                answered = 'Answered';
                return false;
            }
        });
        return answered;
    };

    $scope.isCorrect = function (question) {
        var result = 'correct';
        question.options.forEach(function (option, index, array) {
            if (helper.toBool(option.Selected) != option.isAnswer) {
                result = 'wrong';
                return false;
            }
        });
        return result;
    };
}

quizCtrl.$inject = ['$scope', '$http', 'helperService','examListSrv','$timeout'];
angular.module("student-app").controller('examListCtrl', quizCtrl);
