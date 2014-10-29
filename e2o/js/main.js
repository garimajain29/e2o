$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse')
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse')
        }

        height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    })
   /* $(document).ready(function(){
        colorset();
        function chartLoad(conatinerName, arrDataPoints,backgroundColor){
            var chart = new CanvasJS.Chart(conatinerName,
                {
                    colorSet: "chartColor",
                    backgroundColor:backgroundColor,
                    animationEnabled: false,
                    interactivityEnabled:true,
                    indexLabelPlacement: "inside",
                    height:220,
                    width:220,

                    data: [
                        {
                            type: "doughnut",
                            dataPoints: arrDataPoints
                        }
                    ]
                });
            chart.render();
        }

        var IndTemp = [
            {  y: 53.37 },
            {  y: 35.0 }

        ];

        var proTemp=[
            {  y:83.37 },
            {  y: 20 }

        ];


        var orgTemp=[
            {  y:83.37 },
            {  y: 20 }

        ];
        //chartLoad('individual', IndTemp,"#ffffff");
        //chartLoad('project',proTemp,"#ffffff");
        //chartLoad('organization', orgTemp,"#ffffff");



    })*/
    function colorset(){
        CanvasJS.addColorSet("chartColor",
            [//colorSet Array

                "#f5d556",
                "#70b6e5"
            ]);
    }
})

/*var app = angular.module('validationExample', []);

app.controller('formCtrl', ['$scope', function($scope) {
    $scope.user= {};
       $scope.loginFormFunc = function() {
        if ($scope.user.email==null || $scope.user.email=="" || $scope.user.password==null || $scope.user.password=="") {
           alert("Please fill the required details")
        } else {
            $("#login-form").css("display","none");
            $("#wrapper").css("display","block");
        }
    }


}]);*/
