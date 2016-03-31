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

[Example](http://jsfiddle.net/dleitee/uo5emcuz/)

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

## Advanced 

### onSucces and onError callbacks
```html
<input ng-model="textToCopy">
<button ng-cut="textToCopy" onSuccess="onSuccess()" onError="onError()"></button>
```
