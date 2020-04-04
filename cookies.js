//sets current index cookie to index of given select element
function getProblemCookie () {
    return cookie.get('savedIndex', 0);
}

//sets current index cookie to index of given select element
function setProblemCookie (select) {
    cookie.set('savedIndex', select.selectedIndex);
}

//gets code from based on problem name
function getCodeCookie(name) {
    return cookie.get(name, '');
}

//sets code to cookie based on problem name
function setCodeCookie (name, codeString) {
    cookie.set(name, codeString);
}