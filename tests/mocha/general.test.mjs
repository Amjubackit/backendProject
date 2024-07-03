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

describe('General API Tests', function () {
    this.timeout(5000); // Set timeout to 5 seconds for each test

    it('should return 404 for invalid endpoint', async () => {
        try {
            await requestPromise(`${fullUrl}/invalid`, { json: true });
        } catch (err) {
            expect(err.statusCode).to.equal(404);
            console.log('Invalid Endpoint failed as expected:', err.error);
        }
    });
});
