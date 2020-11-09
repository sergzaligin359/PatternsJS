import { numbers, jedis } from '../data.js';

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);
console.log('Sum', sum); // 30

const countJedi = jedis.reduce((count, jedi) => {
    if(jedi.jedi) count++;
    return count;
}, 0);
console.log('countJedi', countJedi); // 2

const arrNameJedi = jedis.reduce((arr, jedi) => {
    if(jedi.jedi) arr.push(jedi.name);
    return arr;
}, []);
console.log('arrNameJedi', arrNameJedi); // ["Khenobi", "Anakin"]