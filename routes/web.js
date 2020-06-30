const graphqlHTTP = require('express-graphql');
const film = require('../schema/filmSchema'); 
const controller = require('../controller/filmController');

module.exports = (app) => {
    app.use('/graphql', graphqlHTTP( async () => {
        const root = await controller.getData();
        return {
            schema: film.createSchema(), 
            rootValue: root, 
            graphiql: true, 
            pretty: true, 
        }
    }));
}


