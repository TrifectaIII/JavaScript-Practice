//sets current index cookie to index of given select element
function getProblemCookie () {
    return cookie.get('savedName', '');
}

//sets current index cookie to index of given select element
function setProblemCookie (select) {
    cookie.set('savedName', select.value);
}

//gets code from based on problem name
function getCodeCookie(name) {
    return cookie.get(name, '');
}

//sets code to cookie based on problem name
function setCodeCookie (name, codeString) {
    cookie.set(name, codeString);
}

//deletes all cookies
function deleteAllCookies () {
    cookie.empty();
}