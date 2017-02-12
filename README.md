# nike-unofficial-api
unofficial nike api

This is a promise based unofficial nikeplus api.

## installation 

```
npm install nike-unofficial-api
```

## Use

the API provides the next functionalities

### Authentication

Get login information and tokens. The next snippet describes an example of the call:

```js
var authenticate = require('nike-unofficial-api').authenticate

authenticate({email: <email>, password: <password>})
    .then((result) => console.log(result))
    .catch((result) => console.log(result))

```

the complete set of parameters get determined by:
```
{
    email: params.email,
    password: params.password
}
```

The result of the promise will be if failed the error that caused it and if success an result object similar to this:

```
{ 
  authToken: <token>,
  measure: <mesure unit>,
  displayName: <user name>,
  userId: <user id>,
  facebookConnected: <true|false>,
  secureToken: <token> 
}
```

### Workouts

Get a list of your workouts. The next snippet describes an example of the call:

```js
var workouts = require('nike-unofficial-api').workouts

var token = 'access_token'

workouts({access_token: token})
    .then((result) => { console.log(result) })
    .catch((result) => console.log(result))

```


## Disclaimer, legalese and everything else.

This is not affiliated or endorset by Nike , or any other party. This software available on the site is provided "as is" and any expressed or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall the user under the pseudonym Kanekotic, or any of their contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.
