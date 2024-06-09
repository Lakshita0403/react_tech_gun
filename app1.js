// Export and Import(Modules)

import{ hello, data as da}from './sell.js';

// import{ data as da}from './sell.js';

hello();
console.log(da);

// to access all at a time using * 

import * as bundle from './sell.js';

bundle.hello();
console.log(bundle.data);

import per from './customer.js';
console.log(per);

