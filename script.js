//get html elements
var promptPara = document.querySelector('.prompt');
var runButton = document.querySelector('.run');
var resultPara = document.querySelector('.result');

//create code editor from textarea
var editor = CodeMirror.fromTextArea(

    //get textarea object to upgrade
    document.querySelector('.editor'), 

    //options
    {
    lineNumbers: true,
    mode: 'javascript',
    }
);

//execute code on button press
document.querySelector('.run').addEventListener('click', function () {
    
    //get code from editor
    let code = editor.getValue();

    //try all following code and catch errors to display to user
    try {

        //create function from code and execute it
        let codeFunction = new Function(code);
        codeFunction();

        let userFunction = new Function("return hello")();

        userFunction();
    }   
    catch (error) {
        resultPara.innerHTML = error.message;
    }
    
});