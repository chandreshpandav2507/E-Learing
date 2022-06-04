document.forms.myForm.onChange = outputCall;

function outputCall(){
    console.log(event.target);
}