/* eslint-disable no-undef */
import request from 'request';
import { promisify } from 'util';
import { expect } from 'chai';
const requestPromise = promisify(request);

const port = 3001;
const baseUrl = `http://localhost:${port}`;
const fullUrl = `${baseUrl}`;

describe('Report API Tests', function () {
    this.timeout(5000); // Set timeout to 5 seconds for each test

    it('should get report for a user', async () => {
        const res = await requestPromise(
            `${fullUrl}/report?user_id=123123&year=2024&month=4`,
            { json: true }
        );
        expect(res.statusCode).to.equal(200);
        console.log('Get Report:', res.body);
    });

    it('should get report with extra parameter', async () => {
        const res = await requestPromise(
            `${fullUrl}/report?user_id=123123&year=2024&month=4&extra_param=extra`,
            { json: true }
        );
        expect(res.statusCode).to.equal(200);
        console.log('Get Report (with extra parameter):', res.body);
    });

    it('should fail get report with missing mandatory parameter', async () => {
        const res = await requestPromise(
            `${fullUrl}/report?user_id=123123&year=2024`,
            { json: true }
        );

        expect(res.statusCode).to.equal(400);
        console.log('Get Report (missing mandatory parameter):', res.body);
    });

    it('should fail get report - user not found', async () => {
        const res = await requestPromise(
            `${fullUrl}/report?user_id=1223&year=2024&month=5`,
            { json: true }
        );

        expect(res.statusCode).to.equal(500);
        console.log('Get report (user not found):', res.body);
    });
});
