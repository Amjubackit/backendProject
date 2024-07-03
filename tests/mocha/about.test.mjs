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

describe('About API Tests', function () {
    this.timeout(5000); // Set timeout to 5 seconds for each test

    it('should fetch about information', async () => {
        const res = await requestPromise(`${fullUrl}/about`, { json: true });
        expect(res.statusCode).to.equal(200);
        console.log('About:', res.body);
    });
});
