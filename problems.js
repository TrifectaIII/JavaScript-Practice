var problems = {

    doubleOrNothing:{

        prompt: "Given an integer (x), return double that integer if the integer is over 100. Otherwise, return 0.",

        parameters: ["x"],

        testFunction: function (x) {
            return 2*x*(x>100);
        },

        testData: [
            [5],
            [99],
            [100],
            [101],
            [300],
        ],
    },

    pizzaDelivery:{

        prompt: "Sunny wants to order a pizza for delivery. The wallet parameter represents how much money she has at the moment. The price parameter represents the cost of the pizza. Return true if she can afford to order the pizza including a 20% tip for the driver, and return false otherwise.",

        parameters: ["wallet", "price"],

        testFunction: function (wallet, price) {
            return wallet >= price*1.2;
        },

        testData: [
            [5, 10],
            [20, 20],
            [24, 20],
            [100, 1],
        ],
    },

    tripMoney:{

        prompt: "Vette wants to save for her upcoming trip to Japan. The saved parameter represents how many dollars she was able to save before the trip. She'd like to have 500 dollars saved up, but figures anything within 50 dollars of that will be good enough. Return true if she has saved a good amount, and false otherwise.",

        parameters: ["saved"],

        testFunction: function (saved) {
            return (450 <= saved && saved <= 550);
        },

        testData: [
            [400],
            [450],
            [451],
            [500],
            [550],
            [600],
        ],
    },

    firstChar:{

        prompt: "Given a string containing at least 1 character, return the first character of the string if the string is longer than 10 characters. Otherwise, just return the string.",

        parameters: ["string"],

        testFunction: function (string) {
            if (string.length > 10) {
                return string[0];
            }
            else {
                return string;
            }
        },

        testData: [
            ["hello!"],
            ["I like ice cream"],
            ["abcdefghij"],
            ["zZzZzZzZzZzZz"],
        ],
    },
}