var angular;    
// Check for CommonJS support
if (typeof module === "object" && module.exports) {
	angular = require("angular");
	module.exports = "ng-clipboard";
} else {
	angular = window.angular;
}
<%= contents %>