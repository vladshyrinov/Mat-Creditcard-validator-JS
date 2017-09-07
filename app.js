function isCreditCardValid(str) {
    if (str.length > 19 || +str[str.length - 1] % 2) {
        return {
            valid: false,
            number: str,
            error: "wrong_length_or_odd_final_number"
        };
    }

    var codeParts = str.split("-");
    var numbers = [];
    var count = 0,
        sum = 0;

    for (var i = 0; i < codeParts.length; i++) {
        for (var j = 0; j < codeParts[0].length; j++) {
            numbers.push(+codeParts[i][j]);
        }
    }

    for (var i = 0; i < numbers.length; i++) {
        if (isNaN(numbers[i])) {
            return {
                valid: false,
                number: str,
                error: "invalid_character"
            };
        }
        if (numbers[0] != numbers[i])
            count++;
        sum += numbers[i];
    }

    if (!count || sum < 16) {
        return {
            valid: false,
            number: str,
            error: "sum_less_than_16_or_same_type_numbers"
        };
    }

    return {
        valid: true,
        number: str
    };
}

console.log('9999-9999-8888-0000 ', isCreditCardValid('9999-9999-8888-0000'));
console.log('9999-9999-8888-0001 ', isCreditCardValid('9999-9999-8888-0001'));
console.log('9999-9999-8888-0002 ', isCreditCardValid('9999-9999-8888-0002'));
console.log('1111-1111-1111-1110 ', isCreditCardValid('1111-1111-1111-1110'));
console.log('4444-4444-4444-4444 ', isCreditCardValid('4444-4444-4444-4444'));
console.log('1111-1111-1111-1112 ', isCreditCardValid('1111-1111-1111-1112'));
console.log('a111-1111-1111-1512 ', isCreditCardValid('a111-1111-1111-1512'));