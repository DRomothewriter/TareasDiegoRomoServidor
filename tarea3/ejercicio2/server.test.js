const request = require('supertest');
const app = require('./app');
test('GET /test responde con mensaje ok', async () => {
    await request(app)
        .get('/test')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => {
            expect(res.body.mensaje).toBe('ok');
        });
});