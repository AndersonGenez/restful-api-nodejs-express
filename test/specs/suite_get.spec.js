import chai from 'chai';
import chaiHttp from 'chai-http';
// import dotenv from 'dotenv';
// import { users_model } from '../data/user.data.js';
// import routes from '../data/path.json';
import { get_and_status, validate_model } from '../lib/common.js';
const host = 'https://pakotest-api.herokuapp.com'
const routes = { allSuites: '/suites/' }

// dotenv.config();
let expect = chai.expect;
chai.use(chaiHttp);

export const suite_status = () => {
    it('status', (done) => {
        get_and_status(host, routes.allSuites, 200)
        done();
    });
};

// export const get_user_by_id = () => {
//     it('get user by id', (done) => {
//         chai.request(process.env.HOST)
//             .get(routes.singleUser)
//             .end((error, response) => {
//                 expect(response.body).to.eql(users_model);
//             done();
//         });
//     });  
// };

// export const user_models = () => {
//     it('users models', (done) => {
//         chai.request(process.env.HOST)
//             .get(routes.allUsers)
//             .end((error, response) => {
//                 const users = response.body;
//                 users.forEach(user => {
//                     validate_model(user_models,user);
//                 });
//             done();
//         });
//     });
// };


// export const get_user_false_id = () => {
//     it('get user by non-existing id', (done) => {
//         get_and_status(process.env.HOST, routes.nonExistingId, 404);
//         done();
//     });
// };