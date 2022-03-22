import { DateTime } from './node_modules/luxon/src/luxon.js';

const dayTime = document.querySelector('#date');
dayTime.innerText = DateTime.now().toFormat('MMMM dd, yyyy');
