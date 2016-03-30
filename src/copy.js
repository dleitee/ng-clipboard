angular.module("ng-clipboard")
    .directive("ngCopy", ["createFake", (createFake) => {
        return {
            restrict: "A",
            scope: {
                ngCopy: "=",
                onSuccess: "&",
                onError: "&"
            },
            link: (scope, element) => {
                let onSuccess = () => {
                    scope.onSuccess();
                };
                let onError = () => {
                    scope.onError();  
                };
                element.on("click", () => {
                    createFake(scope.ngCopy, "copy", onSuccess, onError);
                });
            }
        };
    }]);
