import { isArrayBufferView } from "util/types";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const new_numbers = [...numbers];
    if (new_numbers.length === 0) {
        return new_numbers;
    } else if (new_numbers.length === 1) {
        new_numbers.push(new_numbers[0]);
        return new_numbers;
    } else {
        new_numbers.splice(1, new_numbers.length - 2);
        return new_numbers;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const new_numbers = numbers.map((price: number): number => price * 3);
    return new_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const new_numbers = numbers.map((price: string): number =>
        Number.isNaN(Number(price)) ? 0 : Number(price)
    );
    return new_numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const new_amounts: number[] = [];
    amounts.map((amount: string): void => {
        if (amount.includes("$")) {
            amount = amount.slice(1);
            if (Number.isNaN(Number(amount))) {
                new_amounts.push(0);
            } else {
                new_amounts.push(Number(amount));
            }
        } else {
            if (Number.isNaN(Number(amount))) {
                new_amounts.push(0);
            } else {
                new_amounts.push(Number(amount));
            }
        }
    });
    return new_amounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const new_messages: string[] = [];
    messages.map((message: string): void => {
        if (message.charAt(message.length - 1) === "!") {
            new_messages.push(message.toUpperCase());
        } else if (message.charAt(message.length - 1) !== "?") {
            new_messages.push(message);
        }
    });
    return new_messages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    words.filter((word: string): void => {
        if (word.length < 4) {
            count++;
        }
    });
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let isAllRGB = true;
    colors.filter((color: string): void => {
        if (
            color.toLowerCase() !== "red" &&
            color.toLowerCase() !== "blue" &&
            color.toLowerCase() !== "green"
        ) {
            isAllRGB = false;
        }
    });
    return isAllRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let count = 1;
    const new_addends = [...addends];
    let sum: string = new_addends
        .reduce((currentTotal: number, num: number) => currentTotal + num, 0)
        .toString();
    if (Number(sum) === 0) {
        return "0=0";
    }
    sum = sum + "=";
    addends.filter((num: number): void => {
        if (count === addends.length) {
            sum = sum + num.toString();
        } else {
            sum = sum + num.toString() + "+";
            count++;
        }
    });
    return sum;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const new_values: number[] = [];
    let isFirst = false;
    let sum = 0;
    values.filter((num: number): void => {
        if (num < 0 && isFirst === false) {
            new_values.push(num);
            new_values.push(sum);
            isFirst = true;
        } else {
            new_values.push(num);
            sum += num;
        }
    });
    if (isFirst === false) {
        new_values.push(sum);
    }
    return new_values;
}
