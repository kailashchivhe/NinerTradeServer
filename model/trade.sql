use trade

db.createCollection("trades");

db.trades.insert({ "firstName": 'Kailash', "lastName": 'Chivhe', "type":'Bitcoin', "quantity": 1, "description":"This is a test description."});
db.trades.insert({ "firstName": 'Alex', "lastName": 'Smith', "type":'Bitcoin', "quantity": 2, "description":"This is a test description."});
db.trades.insert({ "firstName": 'Shantanu', "lastName": 'Ingale', "type":'Bitcoin', "quantity": 5, "description":"This is a test description."});

db.trades.insert({ "firstName": 'Alan', "lastName": 'Curry', "type":'Dogecoin', "quantity": 1, "description":"This is a test description."});
db.trades.insert({ "firstName": 'Lebron', "lastName": 'James', "type":'Dogecoin', "quantity": 100, "description":"This is a test description."});
db.trades.insert({ "firstName": 'Don', "lastName": 'Boston', "type":'Dogecoin', "quantity": 5, "description":"This is a test description."});

-- db.trades.insertMany([{"firstName": 'Kailash', "lastName": 'Chivhe', "type":'Bitcoin', "quantity": 1, "description":"This is a test description."},{"firstName": 'Kailash', "lastName": 'Chivhe', "type":'Dogecoin', "quantity": 1, "description":"This is a test description."},{"firstName": 'Kailash', "lastName": 'Chivhe', "type":'Ethirium', "quantity": 1, "description":"This is a test description."}]);

db.trades.find()

