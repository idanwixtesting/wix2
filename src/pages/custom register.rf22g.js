// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import {test1,myRegisterMemberFunction} from 'backend/register.jsw'


$w.onReady(function () {

	console.log("Hello world!");
	// Write your Javascript code here using the Velo framework API
	$w('#button1').onClick( ()=> { 

	console.log("email " + $w('#email').value);
	console.log("password " + $w('#password').value);

	registerUsers();
	test1().then( (result) => {console.log(result)});
	
	});
});

function registerUsers() {
	console.log("registering user...");

	var options = {
  		contactInfo: {
     	firstName: 'Javier',
     	lastName: 'Doe',
     	hobby: 'Basketball'
   },
    privacyStatus: 'PUBLIC'
 }
	myRegisterMemberFunction($w('#email').value, $w('#password').value,options).then( (result) => {console.log(result)}).catch((error) => {
      console.error(error);
    }) 
	
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/

