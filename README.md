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

# LICENSE
The MIT License (MIT)

Copyright (c) 2016 Daniel Leite de Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

