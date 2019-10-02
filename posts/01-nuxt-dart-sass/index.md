---
id: nuxt-dart-sass
title: Nuxt.jsでDart Sassを使う
description: Nuxt.jsのプロジェクトにDart Sassを導入してみたので、導入方法の紹介です。
category: Cording
tags:
    - Nuxt.js
    - Sass
    - Dart Sass
status: draft
created_at: "2019-10-01"
updated_at: ""
---

## はじめに

このブログはNuxt.jsで作成されており、スタイリングにはDart Sass(Scss)を使用しています。

この記事では、Nuxt.jsプロジェクトにDart Sassを導入する方法などを紹介します。

## Dart Sassとは

[Dart Sass](https://sass-lang.com/dart-sass)は、Googleが開発する[Dart](https://dart.dev/)というプログラミング言語で作成されたSassのコンパイラです。従来の[node-sass](https://github.com/sass/node-sass)と同じようにnpmからインストール可能で、Node.jsのバージョンに依存しないというメリットがあります。

また、Sassの新しい記法などは今後Dart Sassで先行実装されるようなので、今後Sassのスタンダードになることも考えられます。

## Nuxt.jsでDart Sassを使う方法

### パッケージのインストール

Nuxt.jsでDart Sassを使うためには[sass](https://github.com/sass/dart-sass)(Dart Sass)と[sass-loader](https://github.com/webpack-contrib/sass-loader)が必要です。さらにコンパイル速度を向上させるために[fibers](https://github.com/laverdet/node-fibers)のインストールも推奨されているので、次のようにyarnもしくはnpmでパッケージをインストールします。

```shell
yarn add -D sass sass-loader fibers
```

### nuxt.config.js

Nuxt.jsでDart Sassを使用する時はnode-sassと違い、nuxt.config.jsにsass-loaderの設定を追記する必要があります。

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

### componentsなどで使う時

componentsなどの`.vue`ファイルで使用する時はnode-sassと同じで、style要素に`lang="scss"`や`lang="sass"`を任意で付与しましょう。

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

## さいごに

実際に、Nuxt.jsプロジェクトにDart Sassを導入してみましたが、node-sassからの以降はとても簡単だなと思いました。現状、Dart Sass特有の技術で作成されているわけではありませんが、今後`@use`や`@forward`といった新しいモジュールシステムに置き換えようと思っています。

また、Nuxt.jsプロジェクトに限った話ではなくDart Sassとnode-sassのコンパイルオプションは基本的に同じです。なので、node-sassからDart Sassへの移行も簡単に行うことができるので、気軽に導入を試すことができます。
