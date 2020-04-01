//get html elements
var promptPara = document.querySelector('.prompt');
var runButton = document.querySelector('.run');
var errorPara = document.querySelector('.error');
var resultPara = document.querySelector('.result');

//create code editor from textarea
var editor = CodeMirror.fromTextArea(

    //get textarea object to upgrade
    document.querySelector('.editor'), 

    //options
    {
        lineNumbers: true,
        mode: 'javascript',
        indentUnit: 4,
        tabSize: 4,
        autoCloseBrackets: true,
    }
);

//set default value for editor
editor.setValue(`function myFunction (str1, str2) {
    
}`);

//execute code on button press
document.querySelector('.run').addEventListener('click', function () {
    
    //get code from editor
    let code = editor.getValue();

    //try to run and test user's code
    try {

        //execute user's code
        eval(code);
        

    }   
    //catch errors to display to user
    catch (error) {
        console.log()
        errorPara.innerHTML = error.toString();
        //clear any old result
        resultPara.innerHTML = "";
    }
    
});