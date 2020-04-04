//get current problem index
var problemIndex = cookie.get('problemIndex', 0);

//sets current index cookie to index of given select element
function setProblemCookie (select) {
    cookie.set('problemIndex', select.selectedIndex);
}

//get text for each problem
var savedCode = {};
for (let name in problems) {
    savedCode[name] = cookie.get(name, '');
}

//sets to cookie based on problem name
function setCodeCookie (name, codeString) {
    savedCode[name] = codeString;
    cookie.set(name, codeString);
}