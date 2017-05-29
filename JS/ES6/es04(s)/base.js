//import { projectId as id, projectName } from 'module1.js';
//console.log(`${projectName} has id: ${id}`);

/*
console.log('starting in base');
import { projectId } from 'module1.js';
console.log('ending in base');
*/

//import someValue from 'module1.js';
//console.log(someValue);

//import * as values from 'module1.js';
//console.log(values.projectId + " " + values.projectName);

//part 2
/*
import { project, showProject } from 'module1.js';
project.projectId = 8000;
showProject();
console.log(project.projectId);
*/

import { showProject, updateFunction } from 'module1.js';
showProject();
updateFunction();
showProject();
