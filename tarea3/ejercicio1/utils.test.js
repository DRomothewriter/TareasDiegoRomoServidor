const {suma, resta, multiplica, divide} = require('./utils')

test('suma 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('resta 1 - 2 to equal -1', () => {
    expect(resta(1, 2)).toBe(-1);
});

test('multiplica -1 * 2 to equal -2', () => {
    expect(multiplica(-1, 2)).toBe(-2);
});

test('divide 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
});

describe('Operaciones matemáticas', () => {
    it('suma 1 + 2 to equal 3', () => {
        expect(suma(1, 2)).toBe(3);
    });

    it('resta 1 - 2 to equal -1', () => {
        expect(resta(1, 2)).toBe(-1);
    });

    it('multiplica -1 * 2 to equal -2', () => {
        expect(multiplica(-1, 2)).toBe(-2);
    });

    it('divide 6 / 2 to equal 3', () => {
        expect(divide(6, 2)).toBe(3);
    });
});