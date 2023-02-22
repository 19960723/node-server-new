const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});

app.get('/api/getUser', (req: any, res: any) => {
  res.send({
    code: 200,
    result: [
      { username: 'lxl', password: '123' },
      { username: 'ycy', password: '123' },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
