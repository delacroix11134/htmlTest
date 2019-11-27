let availableRooms = [
    {
    	'name': '2LDK',
    	'livingRoom': true,
    	'diningRoom': true,
    	'kitchen': true,
    	'rooms': 3,
    },
    {
    	'name': '1K',
    	'livingRoom': false,
    	'diningRoom': false,
    	'kitchen': true,
    	'rooms': 2,
    },
    {
    	'name': '1Room',
    	'livingRoom': false,
    	'diningRoom': false,
    	'kitchen': false,
    	'rooms': 1,
    }
];

let testArray = [ 1 ,2 , 3 ,4 , 5 ]

//console.log(typeof availableRooms);

//module.exports只能寫一行 多行會被覆蓋
//module.exports後面不用加{},import時會變成object而不是array
module.exports = availableRooms;
