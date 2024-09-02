function runTests() {
    try {
        console.log("Running tests...");

        // Empty string test
        console.assert(add("") === 0, 'Test Failed: add("") should return 0');

        // Single number test
        console.assert(add("1") === 1, 'Test Failed: add("1") should return 1');

        // Two numbers test
        console.assert(add("1,5") === 6, 'Test Failed: add("1,5") should return 6');

        // Multiple numbers test
        console.assert(add("1,2,3,4,5") === 15, 'Test Failed: add("1,2,3,4,5") should return 15');

        // Newlines as delimiters test
        console.assert(add("1\n2,3") === 6, 'Test Failed: add("1\\n2,3") should return 6');

        // Custom delimiter test
        console.assert(add("//;\n1;2") === 3, 'Test Failed: add("//;\\n1;2") should return 3');

        // Negative numbers throw exception test
        try {
            add("1,-2,3");
            console.error('Test Failed: add("1,-2,3") should throw an error');
        } catch (e) {
            console.assert(e.message === "Negative numbers not allowed: -2", 'Test Failed: Error message should be "Negative numbers not allowed: -2"');
        }

        // Multiple negative numbers test
        try {
            add("1,-2,-3,4");
            console.error('Test Failed: add("1,-2,-3,4") should throw an error');
        } catch (e) {
            console.assert(e.message === "negative numbers not allowed: -2,-3", 'Test Failed: Error message should be "negative numbers not allowed: -2,-3"');
        }

        console.log("All tests passed!");
    } catch (error) {
        console.error("Test failed!", error);
    }
}

runTests();
