import express from 'express';
import path from 'path';
const app = express();
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
app.use(express.static(path.resolve(__dirname, '../public')));

export default app;
