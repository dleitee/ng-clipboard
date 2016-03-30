angular.module("ng-clipboard")
    .directive("ngCut", () => {
        return {
            restrict: "A",
            scope: {
                ngCut: "="
            },
            link: (scope, element) => {
                element.on("click", () => {
                    let placeholder = document.createElement("textarea");
                    placeholder.setAttribute(
                        "style", 
                        "position: absolute;overflow: hidden;width: 0;height: 0;top: 0;left: 0;"
                    );
                    placeholder.innerText = scope.ngCut;
                    document.body.appendChild(placeholder);
                    placeholder.select();
                    try {
                        document.execCommand("copy");
                    } catch (err) {
                        console.err(err);
                    }
                    placeholder.remove();
                    scope.ngCut = "";
                });
            }
        };
    });