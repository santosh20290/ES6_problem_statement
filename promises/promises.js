const promise = new Promise((resolve,reject) => {
	//do your ajax call here
	resolve();
	//OR
	reject();
});

promise
	.then((response) => {
		retunr JSON.stringify(response);
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log("error" + err);
	})
	
