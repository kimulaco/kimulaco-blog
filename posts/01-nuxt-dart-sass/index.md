---
id: nuxt-dart-sass
title: Nuxt.jsプロジェクトでDart Sassを使う
description: Nuxt.jsプロジェクトでDart Sassを使った時のメモ。
category: Cording
tags:
    - JavaScript
    - Nuxt.js
    - Sass
    - Dart Sass
    - Dart
status: publish
created_at: "2019-10-24"
updated_at: ""
---

Nuxt.jsプロジェクトにDart Sassを導入してきた時のメモです。

次の環境を前提としていますが、バージョンがよっぽど古かったりしない限りは問題ないはず。

- Node.js v10.16.3
- Nuxt.js v2.10.2
- sass(Dart Sass) v1.23.1
- [create-nuxt-app](https://github.com/nuxt/create-nuxt-app)などでNuxt.jsのプロジェクトを構築済み
- scssを使用

## Dart Sassとは

[Dart Sass](https://sass-lang.com/dart-sass)とは、Googleが開発する[Dart](https://dart.dev/)というプログラミング言語で作成された、Sassのコンパイラです。DartはJavaScriptにコンパイル可能なため、[sass](https://github.com/sass/dart-sass)というパッケージ名でnpmに公開されており、[node-sass](https://github.com/sass/node-sass)と同じようにnpmインストールできます。

またDart Sassには、Sassの新しい機能が先行実装される予定や、Node.jsのバージョン依存問題も解消できるなどのメリットがあります。そのため、今後のSassコンパイラのスタンダードになることも考えられます。

## Nuxt.jsプロジェクトにDart Sassを導入する方法

[create-nuxt-app](https://github.com/nuxt/create-nuxt-app)などでNuxt.jsのプロジェクトを構築済みの状況を前提で紹介します。

Nuxt.jsでDart Sassを使うためには[sass](https://github.com/sass/dart-sass)(Dart Sass)と[sass-loader](https://github.com/webpack-contrib/sass-loader)が必要です。さらに、コンパイル速度を向上させるために[fibers](https://github.com/laverdet/node-fibers)のインストールも推奨されているので、次のようにyarnやnpmでパッケージをインストールします。

```shell
yarn add -D sass sass-loader fibers
```

次に、nuxt.config.jsにsass-loaderの設定を追記します。node-sassの場合は特に何も設定する必要なく使用できましたが、Dart Sassを使用する場合は現状追加で設定が必要なようです。

Dart Sassに関連する部分だけ抜粋すると次のようになります。

```js
const Sass = require('sass')
const Fiber = require('fibers')

export default {
  ...
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  }
}
```

以上で設定は終わりです。`.vue` にDart Sassを書くときは、node-sassと同じように、 `<style lang="scss">` を付与するだけです。

```vue
<template>
  <p>Hello World!</p>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<style lang="scss">
p { color: tomato; }
</style>
```
