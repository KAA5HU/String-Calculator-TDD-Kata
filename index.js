function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /[\n,]/;  // Default delimiters: comma and newline
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        //regexp to find the delimiter
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    const negatives = numArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}
