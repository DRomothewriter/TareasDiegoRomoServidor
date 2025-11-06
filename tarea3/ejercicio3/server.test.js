const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('./app');
const SECRET = 'secret';

describe('Auth Middleware', () => {
    test('Responde 401 si no hay token', async () => {
        const res = await request(app).get('/admin');
        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty('error');
    });

    test('Responde 401 si el token es inválido', async () => {
        const res = await request(app)
            .get('/admin')
            .set('Authorization', 'Bearer token_invalido');
        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty('error');
    });

    test('Responde 200 y mensaje ok si el token es válido', async () => {
        const token = jwt.sign({ username: 'diego' }, SECRET);
        const res = await request(app)
            .get('/admin')
            .set('Authorization', `Bearer ${token}`);
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ mensaje: 'ok' });
    });
});