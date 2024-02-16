const jsonServer = require('json-server');

const mediaPlayerServer = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

// Use process.env.PORT || 4000 to dynamically set the port
const port = process.env.PORT || 4000;

mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

mediaPlayerServer.listen(port, () => {
    console.log(`mediaplayer listening at port ${port}, and waiting for client requests`);
});
