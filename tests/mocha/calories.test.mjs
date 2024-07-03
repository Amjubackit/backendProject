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

describe('Calories API Tests', function () {
    this.timeout(5000); // Set timeout to 5 seconds for each test

    it('should add calories with valid data', async () => {
        const options = {
            url: `${fullUrl}/addcalories`,
            method: 'POST',
            json: {
                user_id: '123123',
                year: 2024,
                month: 4,
                day: 2,
                description: 'milk 9',
                category: 'dinner',
                amount: 8,
            },
        };
        const res = await requestPromise(options);
        expect(res.statusCode).to.equal(201);
        console.log('Add Calories (valid):', res.body);
    });

    it('should add calories with additional param', async () => {
        const options = {
            url: `${fullUrl}/addcalories`,
            method: 'POST',
            json: {
                user_id: '123123',
                year: 2024,
                month: 4,
                day: 2,
                description: 'milk 9',
                category: 'dinner',
                amount: 3,
                additional: 'param',
            },
        };
        const res = await requestPromise(options);
        expect(res.statusCode).to.equal(201);
        console.log('Add Calories (invalid param):', res.body);
    });

    it('should add calories for breakfast category', async () => {
        const options = {
            url: `${fullUrl}/addcalories`,
            method: 'POST',
            json: {
                user_id: '123123',
                year: 2024,
                month: 4,
                day: 2,
                description: 'cereal',
                category: 'breakfast',
                amount: 200,
            },
        };
        const res = await requestPromise(options);
        expect(res.statusCode).to.equal(201);
        console.log('Add Calories (breakfast category):', res.body);
    });

    it('should add calories for lunch category', async () => {
        const options = {
            url: `${fullUrl}/addcalories`,
            method: 'POST',
            json: {
                user_id: '123123',
                year: 2024,
                month: 4,
                day: 2,
                description: 'sandwich',
                category: 'lunch',
                amount: 400,
            },
        };
        const res = await requestPromise(options);
        expect(res.statusCode).to.equal(201);
        console.log('Add Calories (lunch category):', res.body);
    });

    it('should add calories for dinner category', async () => {
        const options = {
            url: `${fullUrl}/addcalories`,
            method: 'POST',
            json: {
                user_id: '123123',
                year: 2024,
                month: 4,
                day: 2,
                description: 'steak',
                category: 'dinner',
                amount: 700,
            },
        };
        const res = await requestPromise(options);
        expect(res.statusCode).to.equal(201);
        console.log('Add Calories (dinner category):', res.body);
    });

    it('should add calories for other category', async () => {
        const options = {
            url: `${fullUrl}/addcalories`,
            method: 'POST',
            json: {
                user_id: '123123',
                year: 2024,
                month: 4,
                day: 2,
                description: 'snack',
                category: 'other',
                amount: 100,
            },
        };
        const res = await requestPromise(options);
        expect(res.statusCode).to.equal(201);
        console.log('Add Calories (other category):', res.body);
    });

    it('should fail to add calories with invalid category', async () => {
        const options = {
            url: `${fullUrl}/addcalories`,
            method: 'POST',
            json: {
                user_id: '123123',
                year: 2024,
                month: 4,
                day: 2,
                description: 'unknown meal',
                category: 'invalid',
                amount: 300,
            },
        };
        const res = await requestPromise(options);
        expect(res.statusCode).to.equal(500);
        console.log('Add Calories (invalid category):', res.body);
    });

    it('should fail to add calories without required param', async () => {
        const options = {
            url: `${fullUrl}/addcalories`,
            method: 'POST',
            json: {
                user_id: '123123',
                year: 2024,
                month: 4,
                day: 2,
                description: 'milk 9',
                category: 'dinner',
            },
        };
        const res = await requestPromise(options);
        console.log('Add Calories (missing required param):', res.body);
        expect(res.statusCode).to.equal(500);
    });

    it('should fail to add calories - user not found', async () => {
        const options = {
            url: `${fullUrl}/addcalories`,
            method: 'POST',
            json: {
                user_id: 'notfound',
                year: 2024,
                month: 4,
                day: 2,
                description: 'milk 9',
                category: 'dinner',
            },
        };
        const res = await requestPromise(options);
        console.log('Add Calories (user not found):', res.body);
        expect(res.statusCode).to.equal(500);
    });
});
