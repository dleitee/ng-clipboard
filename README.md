# ng-clipboard

AngularJS directive to copy or cut text to clipboard without using flash.

## Install

ng-clipboard is available on npm:
```
npm install ng-clipboard --save
```

or bower:
```
bower install ng-clipboard
```

## Usage

It is very easy to use ng-clipboard, just put a button with one of the directives 'ng-copy' or 'ng-cut'. Both take as a parameter an ngModel.

[Example](http://jsfiddle.net/dleitee/kh61dyL9/31/)

### ng-copy

```html
<input ng-model="textToCopy">
<button ng-copy="textToCopy"></button>
```

### ng-cut

```html
<input ng-model="textToCopy">
<button ng-cut="textToCopy"></button>
```
