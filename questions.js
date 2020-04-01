var questions = {

    sleep_in:{

        prompt: "The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.",

        parameters: ["weekday", "vacation"],

        testFunction: function (weekday, vacation) {
            return !weekday || vacation;
        },

        testData: [
            [true, true],
            [false, false],
            [true, false],
            [false, true],
        ],
    },

    monkey_trouble:{

        prompt: "We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return True if we are in trouble.",

        parameters: ["a_smile", "b_smile"],

        testFunction: function (a_smile, b_smile) {
            return a_smile == b_smile;
        },

        testData: [
            [true, true],
            [false, false],
            [true, false],
            [false, true],
        ],
    },

    sum_double:{

        prompt: "Given two int values (int1 and int2), return their sum. Unless the two values are the same, then return double their sum.",

        parameters: ["int1", "int2"],

        testFunction: function (int1, int2) {
            if (int1==int2) {
                return int1*4;
            }
            return int1+int2;
        },

        testData: [
            [1, 2],
            [2, 2],
            [-1, -1],
            [-5, 6],
        ],
    },

}