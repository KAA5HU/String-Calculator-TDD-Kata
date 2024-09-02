//function add will return a number and takes the argument as string
function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /[\n,]/;  // Default delimiters: comma and newline
    if (numbers.startsWith("//")) {
        // finding the \n where the numbers start
        const delimiterEndIndex = numbers.indexOf('\n');
        //regexp to find the delimiter
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        // delimiterEndIndex+1 will be the index where numbers string will start
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    // filter all negative numbers 
    const negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
