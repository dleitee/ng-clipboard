angular.module("ng-clipboard")
    .directive("ngCopy", function() {
        return {
            restrict: "A",
            scope: {
                ngCopy: "="
            },
            link: function(scope, element) {
                element.on("click", function() {
                    var placeholder = document.createElement("textarea");
                    placeholder.innerText = scope.ngCopy;
                    document.body.appendChild(placeholder);
                    placeholder.select();
                    try {
                        document.execCommand("copy");
                    } catch (err) {
                        console.err(err);
                    }
                    placeholder.remove();
                });
            }
        };
    });