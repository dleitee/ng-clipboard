angular.module("ng-clipboard")
	.factory("createFake", () => {
		return (text, command, onSuccess, onError) => {
			let placeholder = document.createElement("textarea");
		    placeholder.setAttribute(
		        "style", 
		        "position: absolute;overflow: hidden;width: 0;height: 0;top: 0;left: 0;"
		    );
		    placeholder.innerText = text;
		    document.body.appendChild(placeholder);
		    placeholder.select();
		    try {
		        document.execCommand(command);
		        placeholder.remove();
		    } catch (err) {
		        onError(err);
		    }
		    onSuccess();
		};
	});