const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
  UpdateCommand
} = require('@aws-sdk/lib-dynamodb');
const serverless = require('serverless-http');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
});

const dynamoDB = DynamoDBDocumentClient.from(client);
const tableName = process.env.TABLE_NAME;

// 登録
app.post('/items', async (req, res) => {
  const params = {
    TableName: tableName,
    Item: req.body,
  };

  try {
    await dynamoDB.send(new PutCommand(params));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 更新
app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { updateKey, updateValue } = req.body;

  const params = {
    TableName: tableName,
    Key: { id },
    UpdateExpression: `set ${updateKey} = :value`,
    ExpressionAttributeValues: {
      ':value': updateValue,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  try {
    await dynamoDB.send(new UpdateCommand(params));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 削除
app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;

  const params = {
    TableName: tableName,
    Key: { id },
  };

  try {
    await dynamoDB.send(new DeleteCommand(params));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 一覧取得
app.get('/items', async (req, res) => {
  const params = {
    TableName: tableName,
  };

  try {
    const data = await dynamoDB.send(new ScanCommand(params));
    res.json(data.Items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 条件一致取得
app.get('/items/search', async (req, res) => {
  const { searchKey, searchValue } = req.query;

  const params = {
    TableName: tableName,
    FilterExpression: `#key = :value`,
    ExpressionAttributeNames: {
      '#key': searchKey,
    },
    ExpressionAttributeValues: {
      ':value': searchValue,
    },
  };

  try {
    const data = await dynamoDB.send(new ScanCommand(params));
    res.json(data.Items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ローカルでアプリケーションの起動
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// Lambdaでアプリケーションの起動
module.exports.handler = serverless(app);
