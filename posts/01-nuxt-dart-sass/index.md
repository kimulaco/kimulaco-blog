---
id: nuxt-dart-sass
title: Nuxt.jsプロジェクトにDart Sassを導入する
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

Nuxt.jsプロジェクトにDart Sassを導入した時の知見。

- Node.js v10.16.3
- Nuxt.js v2.10.2
- sass(Dart Sass) v1.23.1
- [create-nuxt-app](https://github.com/nuxt/create-nuxt-app)などでNuxt.jsプロジェクトを構築済み
- scssを使用

## Dart Sassとは

[Dart Sass](https://sass-lang.com/dart-sass)とは、Googleが開発する[Dart](https://dart.dev/)というプログラミング言語で作成された、Sassのコンパイラです。DartはJavaScriptにコンパイル可能なため、[node-sass](https://github.com/sass/node-sass)と同じようにnpm経由でインストールできます。少しわかりにくいですが、[sass](https://github.com/sass/dart-sass)というパッケージ名でnpmに公開されています。

またDart Sassには、Sassの新しい機能が先行実装される予定やNode.jsのバージョン依存問題も解消できるなどのメリットがあるので、今後のSassコンパイラのスタンダードになることも考えられます。

## Nuxt.jsプロジェクトにDart Sassを導入する方法

Dart Sassを導入する前に、[create-nuxt-app](https://github.com/nuxt/create-nuxt-app)などでNuxt.jsプロジェクトを作成しましょう。

Nuxt.jsでDart Sassを使うためには[sass](https://github.com/sass/dart-sass)(Dart Sass)と[sass-loader](https://github.com/webpack-contrib/sass-loader)が必要です。さらに、コンパイル速度を向上させるために[fibers](https://github.com/laverdet/node-fibers)のインストールも推奨されているので、次のようにyarnやnpmでパッケージをインストールします。

```shell
yarn add -D sass sass-loader fibers
```

次に、nuxt.config.jsにsass-loaderの設定を追記します。node-sassの場合は特に何も設定せずに使用できましたが、Dart Sassを使用する場合は、現状追加で設定が必要なようです。

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

これでインストールと設定は終わりです。`.vue` ファイルにDart Sassを書くときは、node-sassと同じように、`<style>` 要素に `lang="scss"` 属性を付与するだけです。

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
