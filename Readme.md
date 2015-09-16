[![Coveralls – test coverage
](https://img.shields.io/coveralls/parametric-svg/parametric-svg-patch.svg?style=flat-square)
](https://coveralls.io/r/parametric-svg/parametric-svg-patch)
 [![Travis – build status
](https://img.shields.io/travis/parametric-svg/parametric-svg-patch/master.svg?style=flat-square)
](https://travis-ci.org/parametric-svg/parametric-svg-patch)
 [![David – status of dependencies
](https://img.shields.io/david/parametric-svg/parametric-svg-patch.svg?style=flat-square)
](https://david-dm.org/parametric-svg/parametric-svg-patch)
 [![Stability: experimental
](https://img.shields.io/badge/stability-experimental-yellow.svg?style=flat-square)
](https://nodejs.org/api/documentation.html#documentation_stability_index)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




parametric-svg-patch
====================

**Update a parametric SVG element with new data. A low-level library.**


<a                                                 id="/example"></a>&nbsp;

```xml
<rect
  id="cool-rectangle"
  parametric:x="2 * a"
  parametric:y="b + 5"
/>
```

<p align="center"><b>
  +
</b></p>

```js
const parse = require('parametric-svg-parse');
const patch = require('parametric-svg-patch');
const ast = parse(document.querySelector('#cool-rectangle'));

patch(ast, {
  a: 10,
  b: 20,
});
```

<p align="center"><b>
  ↓
</b></p>

```xml
<rect
  id="cool-rectangle"
  x="20" parametric:x="2 * a"
  y="25" parametric:y="b + 5"
/>
```




<a                                                 id="/installation"></a>&nbsp;

Installation
------------

```sh
$ npm install parametric-svg-patch
```




<a                                                        id="/usage"></a>&nbsp;

Usage
-----

*Work in progress…*




<a                                                      id="/license"></a>&nbsp;

License
-------

[MIT][] © [Tomek Wiszniewski][]

[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
