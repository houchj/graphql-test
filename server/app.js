const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to db
mongoose.connect('mongodb://shaun:test1234@localhost:27017/gql-ninja');
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening port 4000');
});


