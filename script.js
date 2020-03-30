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

    
});