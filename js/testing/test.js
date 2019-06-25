//  Individual tests (not recommended)
// describe("pow", function() {
    
//      it("raises to n-th power", function() {
//          assert.equal( pow(2, 3), 8 );
//      });

//     it("2 raised to power 3 is 8", function () {
//         assert.equal( pow(2, 3), 8 );
//     })

//     it("3 raised to power 3 is 27", function() {
//         assert.equal( pow(3, 3), 27 );
//     });
// });


//  Iterative tests (recommended)
// describe("pow", function() {

//     it("for negative n the result is NaN", function() {
//         assert.isNaN( pow(2, -1) );
//     });

//     it("for non-integer n the result is NaN", function() {
//         assert.isNaN( pow(2, 1.5) );
//     });

//     function makeTest(x) {
//         let expected = x * x * x;
//         it(`${x} in the power 3 is ${expected}`, function() {
//             assert.equal( pow(x, 3), expected );
//         }); 
//     }

//     for(let x = 1; x <=  5; x++) {
//         makeTest(x);
//     }

// });

//  My own test
describe("pow", function() {

    it("for negative n the result is NaN", function() {
        assert.isNaN( pow(2, -1) );
    });

    it("for non-integer n the result is NaN", function() {
        assert.isNaN( pow(2, 1.5) );
    });

    function makeAnotherTest(x, n) {
        
        let a = x, b = n;
        let expected = x ** n;

        it(`${x} raised to power ${n} is ${expected}`, function() {
            assert.equal( pow(x, n), expected );
        });
    }

    for(let x = 1; x < 4; x++) {
        for(let n = 0; n < 4; n++){
            makeAnotherTest(x, n);
        }
    }
});