const { checkEvenOdd, printNumbers } = require("../Assignment/index");

describe("checkEvenOdd function", () => {
    test("should return 'Even' for even numbers", () => {
        expect(checkEvenOdd(2)).toBe("Even");
        expect(checkEvenOdd(10)).toBe("Even");
    });

    test("should return 'Odd' for odd numbers", () => {
        expect(checkEvenOdd(3)).toBe("Odd");
        expect(checkEvenOdd(7)).toBe("Odd");
    });

    test("should return 'Invalid input' for non-numeric values", () => {
        expect(checkEvenOdd("hello")).toBe("Invalid input");
        expect(checkEvenOdd(null)).toBe("Invalid input");
        expect(checkEvenOdd(undefined)).toBe("Invalid input");
    });
});

describe("printNumbers function", () => {
    test("should return an array from 1 to 10", () => {
        expect(printNumbers()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
