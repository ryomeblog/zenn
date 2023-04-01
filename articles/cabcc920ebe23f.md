---
title: "Swaggerを活用したAPI開発の効率化"
emoji: "🙆"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: []
published: false
---

## 1. はじめに
このブログでは、API開発において有用なSwaggerについて、その概要から具体的な使い方まで解説していきます。Swagger Spec、Swagger Editor、Swagger UI、Swagger Codegenなどのツールを使い、モックサーバの作成やドキュメント生成、コード自動生成の手法をハンズオン形式で紹介します。

## 2. Swaggerとは？

Swaggerは、APIの設計、開発、テスト、ドキュメント生成を効率化するためのツールセットです。OpenAPI Specification（以前はSwagger Specificationと呼ばれていました）という仕様に基づいて、APIの詳細をYAML形式で記述することで、開発者はAPIの仕様を容易に理解し、編集が可能になります。

## 3. Swaggerのユースケース

Swaggerは以下のようなユースケースに適用できます。

- APIの設計: APIのエンドポイントやデータ構造を視覚的に把握し、APIの仕様を設計する。
- ドキュメント生成: APIの仕様書を自動生成し、開発者や利用者にわかりやすい形で提供する。
- モックサーバ作成: APIの仕様に基づいて仮のレスポンスを返すモックサーバを簡単に作成する。
- コード自動生成: APIのクライアントやサーバーのコードを自動生成し、開発時間を短縮する。

## 4. Swaggerのメリットとデメリット

### 4.1. メリット

- 開発効率の向上: APIの設計、ドキュメント生成、コード自動生成などを通じて開発効率が向上します。
- ドキュメントの品質向上: 自動生成されたドキュメントは常に最新の状態を反映し、品質が向上します。
- チームワークの強化: APIの仕様が明確であるため、チーム内でのコミュニケーションが円滑になります。

### 4.2. デメリット

- 学習コスト: OpenAPI SpecificationやYAMLファイルの書き方を学ぶ必要があります。
- 制約の存在: 自動生成されるコードやドキュメントは、ある程度の制約があるため、独自のカスタマイズが必要な場合があります。

## 5. Swaggerの書き方（YAMLファイル）

Swaggerでは、APIの仕様をYAMLファイルで記述します。YAMLファイルの基本構造は以下のようになります。

```yaml
openapi: 3.0.0
info:
  title: Sample API
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get all users
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
```

## 6. Swaggerの実行方法

Swaggerを実行するには、以下のツールが利用できます。

- Swagger Editor: APIの仕様をYAMLファイルで編集するためのオンラインエディタです。
- Swagger UI: APIドキュメントを視覚的に表示し、ブラウザ上でAPIのリクエスト・レスポンスを確認できます。
- Swagger Codegen: APIのクライアントやサーバーのコードを自動生成します。

### 6.1. Swagger Editorの使い方

Swagger Editorは、ウェブブラウザ上でAPIの仕様を編集できるオンラインエディタです。[Swagger Editor](https://editor.swagger.io/)にアクセスして、YAMLファイルを編集しましょう。エディタではリアルタイムでドキュメントが更新され、エラーや警告が表示されます。

### 6.2. Swagger UIの使い方

Swagger UIは、APIドキュメントを視覚的に表示するためのツールです。ローカル環境にインストールして利用することができます。まず、Swagger UIのリポジトリをクローンし、`dist`ディレクトリにYAMLファイルを配置します。その後、`index.html`ファイルを開くことで、ブラウザ上でAPIドキュメントが表示されます。

### 6.3. Swagger Codegenの使い方

Swagger Codegenは、APIのクライアントやサーバーのコードを自動生成するツールです。Java、Python、Ruby、C#など、多くの言語に対応しています。以下のコマンドを実行して、Swagger Codegenをインストールします。

```sh
$ npm install -g swagger-codegen
```

インストールが完了したら、以下のコマンドでコードを生成できます。この例では、Pythonのクライアントコードを生成しています。

```sh
$ swagger-codegen generate -i api.yaml -l python -o ./python-client
```

ここで、`-i`オプションはYAMLファイルのパスを指定し、`-l`オプションは生成する言語を指定し、`-o`オプションは出力先のディレクトリを指定しています。

生成されたコードは、出力先のディレクトリに保存されます。これを利用して、APIクライアントやサーバーの開発を効率化できます。

## 7. モックサーバの作り方と手順

Swaggerを使ってモックサーバを作成することで、APIの実装前に仕様を確認したり、クライアント側の開発を進めることができます。モックサーバの作成は、以下の手順で行います。

1. [Swagger Editor](https://editor.swagger.io/)でYAMLファイルを編集し、APIの仕様を定義します。
2. YAMLファイルに`x-mock: true`の設定を追加して、モックサーバを有効化します。
3. `swagger.yaml`ファイルを保存し、プロジェクトディレクトリに配置します。
4. [Prism](https://github.com/stoplightio/prism)というツールを使ってモックサーバを起動します。以下のコマンドでPrismをインストールします。

```sh
$ npm install -g @stoplight/prism-cli
```

5. 以下のコマンドでモックサーバを起動します。

```sh
$ prism mock swagger.yaml
```

モックサーバが起動したら、APIクライアントを使ってリクエストを送信し、レスポンスを確認できます。

## 8. ドキュメントの作り方と手順

Swaggerを使ってAPIドキュメントを生成する手順は以下のとおりです。

1. YAMLファイルにAPIの仕様を記述します。
2. [Swagger Editor](https://editor.swagger.io/)でYAMLファイルを編集し、ドキュメントが正しく生成されることを確認します。
3. [Swagger UI](https://github.com/swagger-api/swagger-ui)を
3. [Swagger UI](https://github.com/swagger-api/swagger-ui)を使って、生成されたドキュメントを視覚的に表示します。Swagger UIをローカル環境にインストールして利用するか、あるいはオンラインエディタを使って表示できます。

ローカル環境でSwagger UIを利用する場合、以下の手順でセットアップします。

- Swagger UIのリポジトリをクローンします。
- クローンしたディレクトリ内の`dist`フォルダに、YAMLファイルを配置します。
- `dist`フォルダ内の`index.html`ファイルを開き、YAMLファイルのパスを指定します。
- `index.html`ファイルをウェブブラウザで開くことで、APIドキュメントが表示されます。

オンラインエディタを利用する場合、Swagger Editorで編集したYAMLファイルをそのまま使ってドキュメントを確認できます。

## 9. コードの自動生成の具体例と手順

Swagger Codegenを使って、APIクライアントやサーバーのコードを自動生成する手順を以下に示します。

1. YAMLファイルにAPIの仕様を記述します。
2. Swagger Codegenをインストールします（上述の「6.3. Swagger Codegenの使い方」で説明済み）。
3. 以下のコマンドでコードを生成します。この例では、Javaのクライアントコードを生成しています。

```sh
$ swagger-codegen generate -i api.yaml -l java -o ./java-client
```

このコマンドでは、`-i`オプションでYAMLファイルのパスを指定し、`-l`オプションで生成する言語を指定し、`-o`オプションで出力先のディレクトリを指定しています。

生成されたコードは出力先ディレクトリに保存されます。これを利用して、APIクライアントやサーバーの開発を効率化できます。

## 10. まとめ

この記事では、Swaggerを使ったAPI開発の効率化について、概要から具体的な使い方まで解説しました。Swaggerを活用することで、APIの設計やドキュメント生成、モックサーバの作成、コードの自動生成など、開発プロセス全体が効率化されます。ぜひ、自分のプロジェクトに取り入れてみてください。
