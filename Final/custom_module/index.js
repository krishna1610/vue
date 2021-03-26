const config = require('./config');
const superagent = require('superagent');

exports.fetch = async (id) => {
    try {
        const response = await superagent.get(`${config.url}people/${id}`);
        return response.body;
    } catch (error) {
        return error;
    }
};

exports.peopleSearch = async (name) => {
    
    try {
        const response = await superagent.get(`${config.url}/search/people?q=${name}`);
            // console.log(response)

            return response.body;
        } catch (error) {
        return error;
    }
};
