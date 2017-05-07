const isClass = require('./index.js');
const assert = require('assert');

describe('isClass', () => {
    describe('String', () => {
        it('false', () => {
            assert.equal(isClass('Hello world'), false);
        });
    });

    describe('Function', () => {
        it('false', () => {
            assert.equal(isClass(function() {}), false);
        });
    });

    describe('Async Function', () => {
        it('false', () => {
            assert.equal(isClass(async function() {}), false);
        });
    });

    describe('Class', () => {
        it('true', () => {
            assert.equal(isClass(class {}), true);
        });
    });

    describe('Arrow Function', () => {
        it('false', () => {
            assert.equal(isClass(() => {}), false);
        });
    });

    describe('Async Arrow Function', () => {
        it('false', () => {
            assert.equal(isClass(async () => {}), false);
        });
    });

    describe('Number', () => {
        it('false', () => {
            assert.equal(isClass(123), false);
        });
    });

    describe('Object', () => {
        it('false', () => {
            assert.equal(isClass({}), false);
        });
    });

    describe('Array', () => {
        it('false', () => {
            assert.equal(isClass([]), false);
        });
    });
});
