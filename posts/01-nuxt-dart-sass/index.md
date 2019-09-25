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

この記事では、実際にDart Sassを導入する方法などをご紹介します。

## Dart Sassとは

[Dart Sass](https://sass-lang.com/dart-sass)は、Googleが開発する[Dart](https://dart.dev/)というプログラミング言語で作成されたSassのコンパイラです。従来の[node-sass](https://github.com/sass/node-sass)と同じようにnpmからインストールすることが可能で、Node.jsのバージョンに依存しないというメリットがあります。

また、Sassの新しい記法などはDart Sassに先行で実装されるようなので、今後Sassのスタンダードになることも考えられます。

## Nuxt.jsでDart Sassを使う方法

### パッケージのインストール

Nuxt.jsでDart Sassを使うためにはまず以下のパッケージをyarnまたはnpmでインストールします。

```shell
yarn add -D sass sass-loader fibers
```

- [sass](https://github.com/sass/dart-sass): 名前がややこしいですが、Dart Sass本体です。
- [sass-loader](https://github.com/webpack-contrib/sass-loader): WebpackでSassファイルを読み込む為のloader
- [fibers](https://github.com/laverdet/node-fibers): 必須ではないですが、Dart Sassのコンパイル速度が向上するようなので併用が推奨されています。

### nuxt.config.js

Dart Sassを使用する時は、node-sassを使用する時と違ってnuxt.config.jsにsass-loaderの設定を追記する必要があります。

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

nuxt.configをTypeScriptで書いている場合は、`@types/sass` と `@types/fibers` もインストールすることで型を利用できます。
