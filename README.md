[![npm](https://img.shields.io/npm/v/is-valid-abn.svg)](https://www.npmjs.com/package/is-valid-abn) ![downloads](https://img.shields.io/npm/dt/is-valid-abn.svg) [![CI](https://github.com/wojtekmaj/is-valid-abn/workflows/CI/badge.svg)](https://github.com/wojtekmaj/is-valid-abn/actions)

# Is-Valid-ABN

Check if a number is a valid Australian Business Number (ABN).

## tl;dr

- Install by executing `npm install is-valid-abn` or `yarn add is-valid-abn`.
- Import by adding `import isValidABN from 'is-valid-abn'`.
- Use it by writing `const valid = isValidABN('83914571673')`

## See also

- [is-valid-acn](https://github.com/wojtekmaj/is-valid-acn): Check if a number is a valid Australian Company Number (ACN).

## Examples

```ts
isValidABN('83914571673'); // true

isValidABN('83 914 571 673'); / true

isValidABN('83-914-571-673'); // true
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/5426427?v=4&s=128" width="64" height="64" alt="Wojciech Maj">
    </td>
    <td>
      <a href="https://github.com/wojtekmaj">Wojciech Maj</a>
    </td>
  </tr>
</table>
