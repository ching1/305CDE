/*
 * GET users listing.
 */
var dateFormat = require('dateformat');
var request = require('request');
var sync = require('sync-request'); 
var mongoose = require("mongoose");
mongoose.connect('mongodb://weather:weather@ds161315.mlab.com:61315/weatherapi', function(err){
    if (err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

// data store structure
var searchSchema = new mongoose.Schema({
    search: String,
    content: Object,
    updated_at: String,
});

var Todo = mongoose.model('searches', searchSchema);



exports.search_tmp = function(req, res){
  res.render('search', { value: '' });
};
var callback = function(err, data){
    if(err) return console.error(err);
    else console.logh(data);
}

exports.search = function(req, res){
    var today = new Date();
    var searchValue = '';
    if(req.query.sh !=''){
        searchValue = req.query.search;
    }else{
        searchValue = req.body.search;
    }
    var result = Todo.find({search:searchValue, updated_at: dateFormat(today, 'yyyy-mm-dd')}, function(err, doc){
     
    if(doc == ''){
        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&cnt=5&APPID=e6649a9af0b18f4437e737e9ac298eb3&q=';
        var res2 = sync('GET', url+searchValue);
        var data = JSON.parse(res2.getBody().toString('utf8'));

        Todo.create({
               search: searchValue,
               content: data,
               updated_at: dateFormat(today, 'yyyy-mm-dd')
            }, function(err,todo){
                if(err) {
                    res.render('result', {result : err});
                }else{
                    res.header('Contect-type', 'application/json');
                    res.header('Charset', 'utf8');
                    res.jsonp(data);
                
            };
        }); 
    }else{
        //var data2 = JSON.parse(doc[0].content.list[0].toString('utf8'));
        if(doc.length >0){
            res.header('Contect-type', 'application/json');
            res.header('Charset', 'utf8');
            res.jsonp(doc[0].content);
        }else{
            res.render('result', {result : 'Error : array = 0'});
        }
    }
  })
};