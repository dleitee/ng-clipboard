angular.module("ng-clipboard")
    .directive("ngCopy", () => {
        return {
            restrict: "A",
            scope: {
                ngCopy: "="
            },
            link: (scope, element) => {
                element.on("click", () => {
                    let placeholder = document.createElement("textarea");
                    placeholder.setAttribute(
                        "style", 
                        "position: absolute;overflow: hidden;width: 0;height: 0;top: 0;left: 0;"
                    );
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