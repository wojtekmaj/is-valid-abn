[![npm](https://img.shields.io/npm/v/is-valid-abn.svg)](https://www.npmjs.com/package/is-valid-abn) ![downloads](https://img.shields.io/npm/dt/is-valid-abn.svg) [![CI](https://github.com/DemystData/is-valid-abn/workflows/CI/badge.svg)](https://github.com/DemystData/is-valid-abn/actions) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# is-valid-abn
Check if a number is a valid Australian Business Number (ABN).

## tl;dr
* Install by executing `npm install is-valid-abn` or `yarn add is-valid-abn`.
* Import by adding `import isValidABN from 'is-valid-abn'`.
* Use it by writing `const valid = isValidABN('83914571673')`

## See also

* [is-valid-acn](https://github.com/DemystData/is-valid-acn): Check if a number is a valid Australian Company Number (ACN).

## Examples

```js
> isValidABN('83914571673');
< true

> isValidABN('83 914 571 673');
< true

> isValidABN('83-914-571-673');
< true
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="http://wojtekmaj.pl">http://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
