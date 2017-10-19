import express from 'express';
import posts from './routes/posts';

const app = express();

let port = 3000;

app.use('/',express.static(__dirname+'../public'));

app.get('/hello',(req,res) => {
  res.send('Hello world!!!');
});


app.use('/posts', posts);

const server = app.listen(port,() => {
  console.log('Express listening on port' , port);
});
