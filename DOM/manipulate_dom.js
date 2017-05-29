// creating elements
var newPar = document.createElement('article');
var newSect = document.createElement('section');
var newAsi = document.createElement('aside');
var newTextNode = document.createTextNode('Hey! That is text of paragraph!');
var newFragm = document.createDocumentFragment();
//console.log(newFragm);
newFragm.appendChild(document.getElementById('sport').cloneNode(true));

//console.log(document.getElementById('firstname')); /*first one*/
//console.log(document.getElementsByClassName('work space')); /*order isn't matter*/
//console.log(document.getElementsByTagName('input')); /*all inputs*/
//console.log(document.querySelector('.space.work')); /*order isn't matter*/
//console.log(document.querySelectorAll('.space.work')); /*all el with css sel*/
/* console.log(document.nodeName + " " + document.nodeType + "|" + newPar.nodeName
+ " " + newPar.nodeType + "|" + newTextNode.nodeName + " " +
newTextNode.nodeType + " Value: " + newTextNode.nodeValue + "|"
+ document.childNodes[1].firstChild.nodeName + " " +
document.childNodes[1].firstChild.nodeType); // 1-el 2-att 3-text 8-comment 9-document */

/*
var selSport = document.getElementById('sport');
var emp = document.getElementById('emp');
//console.log(selSport.childNodes); // An array with all child nodes of the node
//console.log(selSport.firstChild); // The first child node of the node
//console.log(selSport.hasChildNodes() + " " + emp.hasChildNodes());
//console.log(selSport.lastChild); // The last child node of the node
//console.log(selSport.parentNode); // The parent node of the node
//console.log(selSport.nextSibling); //The next sibling node of the node
//console.log(selSport.previousSibling); //The previous sibling node of the node

//console.log(selSport.childElementCount); //The number of element children
//console.log(selSport.children); //An array with all child element nodes of the node
//console.log(selSport.firstElementChild); //The first child that is an element node
//console.log(selSport.lastElementChild); //The last child that is an element node
//console.log(document.getElementById('firstname').nextElementSibling); //The next element node sibling
//console.log(document.getElementById('firstname').previousElementSibling); //The previous element node sibling
*/
/*
var node1 = document.querySelector('#sport');
var node2 = document.querySelector('#emp');
//node1.appendChild(node2);
var clone1 = node1.cloneNode(true);
var clone2 = node1.cloneNode(false);
//document.body.appendChild(clone1);
//document.body.insertBefore(newPar, document.body.firstChild);
//document.body.replaceChild(document.createElement('video'),
//document.querySelector('table'));
//document.body.removeChild(document.querySelectorAll('video')[0]);
*/
//short methods
/*
document.querySelector('#sport').after(newSect);
document.querySelector('#sport').before(newSect);
document.querySelector('#sport').append(newAsi);
document.querySelector('#sport').prepend(newAsi);
//document.querySelector('#sport').remove();
document.querySelector('#sport').replace(newAsi);
*/
//attributes
/*
var newAt1 = document.createAttribute('name');
var newAt2 = document.createAttribute('value');
newAt1.value = 'gender';
newAt2.value = 'male';
var genIn = document.body.children[9];
console.log(genIn.hasAttributes());
genIn.setAttributeNode(newAt1);
console.log(genIn.hasAttributes() + "|" + genIn.hasAttribute('name'));
console.log(genIn.getAttribute('name'));
console.log(genIn.getAttributeNode('name'));
//genIn.removeAttribute('name');
genIn.setAttributeNode(newAt2);
genIn.setAttribute('value', 'female');
console.log(genIn.getAttribute('value'));
console.log(document.getElementsByName('gender'));
*/
//for HTML
/*
var nodeExam = document.querySelector('#sport');
//console.log(nodeExam);

var nodeNav = document.querySelector('nav');
//nodeNav.innerHTML = "Haha!<em> Some text </em>Deleted!";
//console.log(nodeNav.innerHTML);
//nodeNav.innerText = "Haha!<em>Hello!</em>Deleted!";
//console.log(nodeNav.innerText);
//console.log(nodeNav.outerHTML);
//console.log(nodeNav.outerText);
//console.log(nodeNav.textContent);
*/

var targetNode = document.getElementById('policy');
var news = document.createDocumentFragment();
//targetNode.insertAdjacentHTML('beforeend', "<p>This paragraph added from JS</p>");
//targetNode.insertAdjacentElement('beforebegin', document.getElementById('sport'));
//console.log(news);

//classes

var clNo = document.querySelector('#cl');
console.log(clNo.className);
var clNames = clNo.classList;
console.log(clNames);
clNames.add("red");
console.log(clNames.contains("blue") + " | " + clNames.contains("green"));
clNames.toggle("red");
clNames.toggle("red");
//clNames.remove("images");

//console.log(clNo.id);
//console.log(document.doctype);
