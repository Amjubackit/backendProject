/* eslint-disable no-undef */
// require('dotenv').config({ path: '../.env' });
import request from 'request';
import { promisify } from 'util';
import { expect } from 'chai';
const requestPromise = promisify(request);

const port = 3001;
const baseUrl = `http://localhost:${port}`;
const fullUrl = `${baseUrl}`;
console.log(`FULL URL: ${fullUrl}`);

describe('User API Tests', function () {
    this.timeout(5000); // Set timeout to 5 seconds for each test

    it('should fetch user by ID', async () => {
        const res = await requestPromise(`${fullUrl}/users/123123`, {
            json: true,
        });
        expect(res.statusCode).to.equal(200);
        console.log('Get User:', res.body);
    });

    it('should return 404 for non-existing user ID', async () => {
        const res = await requestPromise(`${fullUrl}/users/999999`, {
            json: true,
        });
        expect(res.statusCode).to.equal(404);
        console.log('Find User (non-existing ID):', res.body);
    });
});
