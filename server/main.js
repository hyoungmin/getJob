import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import posts from './routes/posts';

const app = express();

const port = 3000;
const devPort = 3001;

console.log('NODE_ENV = '+process.env.NODE_ENV);

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}
app.use('/', express.static(__dirname + '/../public'));

app.get('/hello',(req,res) => {
  res.send('Hello world!!!');
});


app.use('/posts', posts);

const server = app.listen(port,() => {
  console.log('Express listening on port' , port);
});
