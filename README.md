# Axios Wrapper NPM Package

This is an NPM package that provides a wrapper for Axios HTTP client.
It simplifies the process of making HTTP requests to your API backend and adding authorization headers to your requests.

### Installation
 To use s-apis in your project, install it via npm:
####

`$ npm i s-apis`


Usage
Import the functions you need from the package:
###
`import { doGet, doPost, doPut, doPatch, doDelete } from 's-apis'`

Then, simply call the function you need

The functions return a Promise that resolves to an AxiosResponse object, so you can access the response data and status code.

## Authorization
s-apis supports authorization headers using access tokens. 
To use this feature, simply include the token in local storage under 
the key access_token. s-apis will automatically add the header to all requests that require authentication.

#### Examples　

GET request 
#####
Example using doGet
```
// Get user data by ID
doGet('/users/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```
Post request 
#####
Example using doPost
```
// Create a new user
doPost('/users', {
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password'
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

```

PUT request 
#####
Example using doPut
```
// Update user data
doPut('/users/1', {
  name: 'Jane Doe',
  email: 'janedoe@example.com'
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });


```

PATCH request 
#####
Example using doPatch
```
// Update user data partially
doPatch('/users/1', {
  name: 'Jane Doe'
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

DELETE request 
#####
Example using doDelete
```
// Update user data partially
// Delete a user
doDelete('/users/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```
### Contribution
Contributions to s-apis are welcome! To contribute, please fork the repository, create a new branch, make your changes, and submit a pull request.
