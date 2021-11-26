import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import { users_model } from '../data/user.data.js';
import routes from '../data/path.json';

dotenv.config();
let expect = chai.expect;
chai.use(chaiHttp);