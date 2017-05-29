/*export let projectId = 99;
export let projectName = 'BuildIt';
console.log('in module1');
*/
/*
let projectId = 99;
let projectName = 'BuildIt';
//export default projectName;
export { projectId, projectName };
//export { projectId as default, projectName };
*/

//part 2
/*
export let project = { projectId: 99 };

export function showProject() {
    console.log(project.projectId);
}
*/
export function showProject() { console.log('in original'); }
export function updateFunction() {
    showProject = function() { console.log('in updated'); };
}
