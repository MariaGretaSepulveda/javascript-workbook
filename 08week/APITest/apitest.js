'use strict';

const assert = require('assert');


const getAddress = (fetch, id) =>{
return fetch ('https://randomuser.me/api/'+ id);

}
//Test
if (typeof describe === 'function') {
//miss typed address
describe('Test Fetch', () => {
let count =0;

const fakeFetch =(url) => 
{
const arr=url.split('/');
let id=Number(arr[arr.length-1])
if ( id <= 0 || id > 30 )
    return 'Out of range'
else
return url;
}
it('check for miss typed address', () => {

assert.equal(getAddress(fakeFetch, 15), 'https://randomuser.me/api/15');
});

it('Out of range',()=>{
assert.equal(getAddress(fakeFetch,31),'Out of range');

});
})
}else {
console.log('Only run this test')
}
function exponent()