/* eslint-disable import/no-unresolved, import/no-absolute-path */
import { DateTime } from '/node_modules/luxon/src/luxon.js';

const dayTime = document.querySelector('#date');
dayTime.innerText = DateTime.now();

export default dayTime;