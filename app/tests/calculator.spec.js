describe('calculator.js', function () {
    let calculator,
        calculator2;

    beforeEach(function () {
        calculator = new Calculator();
        calculator2 = new Calculator();
    })

    it ('should initialize the total', function () {
        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy();
    });

    it ('can be instantiated', function () {
        jasmine.addMatchers(customMatchers);
        expect(calculator).toBeCalculator();
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2);
        expect(calculator.constructor.name).toContain('Calculator')
    });

    it ('instantiates unique object', function () {
        expect(calculator).not.toBe(calculator2);
    })

    it ('has common operation', function () {
        expect(calculator.add).toBeDefined();
        expect(calculator.subtract).toBeDefined();
        expect(calculator.divide).toBeDefined();
        expect(calculator.multiply).toBeDefined();
    })

    it ('can overwrite total', function () {
        calculator.total = null;
        expect(calculator.total).toBeNull();
    })

    describe('Calculator', function () {
        describe('add()', function () {
            it ('should add numbers to total', function () {
                calculator.add(5);
                expect(calculator.total).toBe(5);
                expect(10).toBe(10);
            });

            it ('return total', function () {
                calculator.total = 50;
                expect(calculator.add(20)).toBe(70);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('number');
                expect(calculator.total).toBeNumber();
                expect(calculator.total).toEqual(jasmine.anything())
            });
        })

        describe('subtract()', function () {
            it ('should substract numbers from total', function () {
                calculator.total = 30;
                calculator.subtract(5);
                expect(calculator.total).toBe(25);
            });
        });

        describe('multiply()', function () {
            it ('should multiply total by number', function () {
                calculator.total = 30;
                calculator.multiply(5);
                expect(calculator.total).toBe(150);
            });

            it ('does not handle NaN', function () {
                calculator.total = 20;
                calculator.multiply('a')
                expect(calculator.total).toBeNaN()
            })
        });

        describe('divide()', function () {
            it ('should divide total by number', function () {
                calculator.total = 30;
                calculator.divide(5);
                expect(calculator.total).toBe(6);
            });

            it ('handles divide by zero', function () {
                expect(function (){calculator.divide(0)}).toThrow()
                expect(function (){calculator.divide(0)}).toThrowError(Error)
                expect(function (){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero')
            })
        });
    })
})
