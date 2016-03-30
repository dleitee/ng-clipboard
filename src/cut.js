angular.module("ng-clipboard")
    .directive("ngCut", ["createFake", (createFake) => {
        return {
            restrict: "A",
            scope: {
                ngCut: "=",
                onSuccess: "&",
                onError: "&"
            },
            link: (scope, element) => {
                let onSuccess = () => {
                    scope.ngCut = "";
                    scope.onSuccess();
                };
                let onError = () => {
                    scope.onError();    
                };
                element.on("click", () => {
                    createFake(scope.ngCut, "copy", onSuccess, onError);
                });
            }
        };
    }]);