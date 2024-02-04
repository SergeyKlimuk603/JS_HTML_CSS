import { sum, sub, mult, pi, ex } from './moduleOne.js'

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));
console.log(pi);
console.log(ex);

/*
3
-1
2
3.14
2.7
*/

import defaultExport from './moduleOneDefault.js'

console.log(defaultExport.sum(1, 2));
console.log(defaultExport.sub(1, 2));
console.log(defaultExport.pi);
console.log(defaultExport.ex);

/*
3
-1
3.14
undefined
*/
