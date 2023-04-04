import express from 'express';
import path from 'path';
// import logger from 'jet-logger'

const app = express();

// **** Setup **** //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(EnvVars.CookieProps.Secret));

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
