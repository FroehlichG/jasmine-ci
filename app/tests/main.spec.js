describe('main.js', function () {
    xdescribe('calculate()', function (){
        xit('validates expression', function() {

        });
        xit('calls add');
        xit('calls subtract');
        xit('calls multiply');
        xit('calls divide');
        xit('validates operation');
        xit('calls update Result');
    });

    describe('updateResult()', function (){
        beforeAll(function () {
            const calculator = new Calculator();
            const element = document.createElement('div');
            element.classList.add('result');
            document.body.appendChild(element);
            this.element = element;
            this.calculator = calculator;
        })

        afterAll(function () {
            document.body.removeChild(this.element);
        })

        it('adds result to DOM element', function (){
            this.calculator.updateResult('5');
            expect(this.element.innerText).toBe('Result 5');
        });
    })
})
