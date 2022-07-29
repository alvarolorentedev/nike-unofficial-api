# ![logomakr_3e4ole](https://cloud.githubusercontent.com/assets/3071208/22865444/590b48ae-f12a-11e6-921c-f7a9c4b5dd48.png)

## Disclaimer: I did this unoficial api 5 years ago the API might or might not still published

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
  	access_token: <token>,
  	expires_in: <expiration time>,
  	profile_img_url: <profile image>,
  	token_type: <token type>
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
### Logo

Speed graphic by <a href="http://www.flaticon.com/authors/freepik">Freepik</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a href="http://logomakr.com" title="Logo Maker">Logo Maker</a>

## Disclaimer, legalese and everything else.

This is not affiliated or endorset by Nike , or any other party. This software available on the site is provided "as is" and any expressed or implied warranties, including, but not limited to, the implied warranties of merchantability and fitness for a particular purpose are disclaimed. In no event shall the user under the pseudonym Kanekotic, or any of their contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.
