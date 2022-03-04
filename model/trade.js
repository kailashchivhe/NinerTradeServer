const {DateTime} = require('luxon');
const {v4:uuidv4} = require('uuid');
const trades = [
    {
        id: '1',
        firstName: 'Kailash',
        lastName: 'Chivhe',
        description: 'This is some content needs to be really good.',
        userId: '1',
        type: 'Bitcoin',
        quantity: 1,
        createdAt: DateTime.now().toLocaleString( DateTime.DATE_SHORT )
    },
    {
        id: '2',
        firstName: 'Charles',
        lastName: 'Austin',
        description: 'This is some content needs to be really good.',
        userId: '4',
        type: 'Bitcoin',
        quantity: 1,
        createdAt: DateTime.now().toLocaleString( DateTime.DATE_SHORT )
    },
    {
        id: '3',
        firstName: 'Shantanu',
        lastName: 'Ingale',
        description: 'This is some content needs to be really good.',
        userId: '2',
        type: 'Bitcoin',
        quantity: 1,
        createdAt: DateTime.now().toLocaleString( DateTime.DATE_SHORT )
    },
    {
        id: '4',
        firstName: 'Shantanu',
        lastName: 'Ingle',
        description: 'This is some content needs to be really good.',
        userId: '2',
        type: 'Dogecoin',
        quantity: 1,
        createdAt: DateTime.local(2022, 2, 12, 18, 0).toLocaleString( DateTime.DATE_SHORT )
    },
    {
        id: '5',
        firstName: 'Kailash',
        lastName: 'Chivhe',
        description: 'This is some content needs to be really good.',
        userId: '1',
        type: 'Dogecoin',
        quantity: 1,
        createdAt: DateTime.local(2022, 2, 12, 18, 0).toLocaleString( DateTime.DATE_SHORT )
    },
    {
        id: '6',
        firstName: 'Steve',
        lastName: 'Godfrey',
        description: 'This is some content needs to be really good.',
        userId: '5',
        type: 'Dogecoin',
        quantity: 1,
        createdAt: DateTime.local(2022, 2, 12, 18, 0).toLocaleString( DateTime.DATE_SHORT )
    },
    {
        id: '7',
        firstName: 'John',
        lastName: 'Brasile',
        description: 'This is some content needs to be really good.',
        userId: '3',
        type: 'Ethereum',
        quantity: 1,
        createdAt: DateTime.now().toLocaleString( DateTime.DATE_SHORT )
    },
    {
        id: '8',
        firstName: 'John',
        lastName: 'Watson',
        description: 'This is some content needs to be really good.',
        userId: '6',
        type: 'Ethereum',
        quantity: 1,
        createdAt: DateTime.now().toLocaleString( DateTime.DATE_SHORT )
    }
];

exports.find = () => trades;

exports.findById = id => trades.find( trade=>trade.id === id);

exports.save = function(trade){
    trade.id = uuidv4();
    trade.userId = uuidv4();
    trade.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    trades.push(trade);
};

exports.updateById = function(id, newTrade){
    let trade = trades.find( trade=>trade.id === id);
    if(trade){
        trade.firstName = newTrade.firstName;
        trade.lastName = newTrade.lastName;
        trade.description = newTrade.description;
        trade.quantity = newTrade.quantity;
        return true;
    }
    else{
        return false;
    }
};

exports.deleteById = function(id){
    let index = trades.findIndex( trade=>trade.id === id);
    if(index !== -1){
        trades.splice(index,1);
        return true;
    }
    else{
        return false;
    }
};