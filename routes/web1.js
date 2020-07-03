const graphqlHTTP = require('express-graphql');
const film = require('../schema/movieSchema'); 
const controller = require('../controller/filmByIdController');

module.exports = (app) => {
    app.use('/graphql1', graphqlHTTP( async () => {
        const root = await controller.getData();
        return {
            schema: film.createSchema(), 
            rootValue: root, 
            graphiql: true, 
            pretty: true, 
        }
    }));
}

