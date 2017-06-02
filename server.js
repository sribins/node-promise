
// var Promise = require('promise')

function getData(val, err){
	return new Promise(function(resolve, reject){
		if(err){
			reject(err)
		}
		resolve(val)
	})
}

getData(1, "i am the error")
	.then(function(data){
		return data;
	})
	.then(function(data){
		console.log(newData)
	})
	.catch(function(err){
		console.log("this is error block");
		console.log(err);
	})























/*function service(){
	return "i am callback"
}

var array =[1,2,3];

var obj = {
	name: "sri",
	city:"hyd"
}

function sample(name){
	console.log(name())
	console.log(name())
	console.log(name())
}

sample(service);*/