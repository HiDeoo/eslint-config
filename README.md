<div align="center">
  <h1>@hideoo/eslint-config 🚨</h1>
  <p>HiDeoo's Eslint configuration</p>
</div>

<div align="center">
  <a href="https://github.com/HiDeoo/eslint-config/blob/main/LICENSE">
    <img alt="License" src="https://badgen.net/github/license/hideoo/eslint-config" />
  </a>
  <br /><br />
</div>

## Usage

### Install

```shell
$ pnpm add -D eslint @hideoo/eslint-config
```

### Configure

Reference the configuration in your `eslint.config.js` file:

```js
import hideoo from '@hideoo/eslint-config'

export default hideoo()
```

### Run

Add a script in your `package.json` file to run ESLint:

```json
{
  "scripts": {
    "lint": "eslint . --cache --max-warnings=0"
  }
}
```

### Customize

You can customize the configuration by passing an array of [configuration objects](https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects) to the `hideoo` function:

```js
export default hideoo([{ ignores: ['**/fixtures'] }])
```

## Visual Studio Code support

After installing the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), create a `.vscode/settings.json` file in your project with the following content:

```json
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "markdown",
    "astro"
  ]
}
```

## License

Licensed under the MIT License, Copyright © HiDeoo.

See [LICENSE](https://github.com/HiDeoo/eslint-config/blob/main/LICENSE) for more information.
