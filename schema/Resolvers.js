
//import the data
const { Users }  = require('../FakeData')

const resolvers = {
    Query:{
        getAllUsers(){
            return Users;
        }
    }
}

module.exports = {resolvers}