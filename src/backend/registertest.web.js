import { authentication } from 'wix-members-backend';

import { Permissions, webMethod } from "wix-web-module";
/* Sample options value:
 * {
 *    contactInfo: {
 *      firstName: 'Javier',
 *      lastName: 'Doe',
 *      hobby: 'Basketball,
 *      "favorite-meal": 'Pasta'
 *    },
 *    privacyStatus: 'PUBLIC'
 * }
 */



export async function myRegisterMemberFunction(email, password, options) {
  return authentication.register(email, password, options)
    .then((registrationResult) => {
      return registrationResult;
    })
    .catch((error) => {
      console.error(error);
    })
}

/************
.web.js file
************

Backend '.web.js' files contain functions that run on the server side and can be called from page code.

Learn more at https://dev.wix.com/docs/develop-websites/articles/coding-with-velo/backend-code/web-modules/calling-backend-code-from-the-frontend

****/

/**** Call the sample multiply function below by pasting the following into your page code:

import { multiply } from 'backend/new-module.web';

$w.onReady(async function () {
   console.log(await multiply(4,5));
});

****/


export const multiply = webMethod(
  Permissions.Anyone, 
  (factor1, factor2) => { 
    return factor1 * factor2 
  }
);
