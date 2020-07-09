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

        prompt: "Sunny wants to order a pizza for delivery. The wallet parameter represents how much money she has at the moment. The price parameter represents the cost of the pizza. Return true if she can afford to order the pizza including a 20% delivery fee, and return false otherwise.",

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

    salesTax:{

        prompt:"T'pol wants to buy an item from the store, but she knows that some items have sales tax and some don't. The parameter tax is the tax rate for the item as a fraction of 1 (ie. a 10% tax would be 0.1). The price parameter is the pre-tax price of the item, and the wallet parameter is how much money she has to spend. Return true if she can purchase the item, and false otherwise.",

        parameters: ["wallet", "price", "tax"],

        testFunction: function (wallet, price, tax) {
            return wallet >= price*(1+tax);
        },

        testData: [
            [10, 10, 0.1],
            [11, 10, 0.1],
            [11, 10, 0.2],
            [20, 15, 0.5],
            [5, 10, 0.33],
            [50, 50, 0.01],
            [50, 50, 0],
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

    reversedString:{

        prompt: "Given a string containing at least 2 characters, return that string reversed.",

        parameters: ["string"],

        testFunction: function (string) {
            return string.split("").reverse().join("");
        },

        testData: [
            ["abc"],
            ["racecar"],
            ["Hello"],
            ["eybdooG"],
        ],
    },

    repeatString:{

        prompt: "Given a string x containing at least 1 character and an integer y greater than 0, return a string with the contents of x repeated y times.",

        parameters: ["x","y"],

        testFunction: function (x, y) {
            let repeated = "";
            for (let i = 0; i < y; i++) {
                repeated += x;
            }
            return repeated;
        },

        testData: [
            ["V", 2],
            ["Hi", 4],
            ["The Cheese", 1],
            ["Sss", 3],
        ],
    },
}