import wixUsers from 'wix-users';
import { multiply } from 'backend/backendtest';


// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world

$w.onReady(function () {
	// Write your JavaScript here
	console.log('hello');
	let user = wixUsers.currentUser;
	console.log(user);
	
	$w('#usernametxt').text = "welcome user id" + user.id;
	
	
	$w('#button1').onClick( ()=> {
		$w('#velotxt').text = "button clicked";		
	});

	$w('#button2').onClick( ()=> { 
		multiply(4, 5).then(product => {
         console.log(product);
		 $w('#velotxt').text = product.toString();
     	})
		.catch(error => {
			console.log(error);
		});
	 });
		

});

 