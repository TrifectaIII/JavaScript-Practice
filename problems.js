var problems = {

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

        prompt: "We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.",

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

        prompt: "Given two int values (a and b), return double their sum if they are the same. Otherwise, return their sum.",

        parameters: ["a", "b"],

        testFunction: function (a, b) {
            if (a == b) {
                return a * 4;
            }
            return a + b;
        },

        testData: [
            [1, 2],
            [2, 2],
            [-1, -1],
            [-5, 6],
        ],
    },

    not_string:{

        prompt: "Given a string, return a new string where 'not ' has been added to the front. However, if the string already begins with 'not', return the string unchanged.",

        parameters: ["string"],

        testFunction: function (string) {
            if (string.slice(0,3) != "not") {
                string = string + "not ";
            }
            return string
        },

        testData: [
            ["noti"],
            ["inot"],
            ["not i"],
            ["greed"],
        ],
    },
}