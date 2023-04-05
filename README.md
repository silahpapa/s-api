Axios Wrapper NPM Package

This is an NPM package that provides a wrapper for Axios HTTP client.
It simplifies the process of making HTTP requests to your API backend and adding authorization headers to your requests.



Installation
To use ShAPI in your project, install it via npm:
npm i s-apis

Usage
Import the functions you need from the package:

import { doGet, doPost, doPut, doPatch, doDelete } from 'shapi';

Then, simply call the function you need

The functions return a Promise that resolves to an AxiosResponse object, so you can access the response data and status code.

Authorization
ShAPI supports authorization headers using access tokens. To use this feature, simply include the token in local storage under the key access_token. ShAPI will automatically add the header to all requests that require authentication.

Examples
GET request
// Example using doGet:
doGet('/users/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
