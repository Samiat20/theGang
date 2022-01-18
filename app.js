// have the form popup when the sign up botton is click
// know when the button is clicked
//grab the button 
var popup= document.getElementById('popup')
var button= document.getElementById('button')
//add an event listener to the button 
button.addEventListener('click',function(e){
    //grab the popup
// make the popup show
    
    popup.style.display='block'
}
)
// know when the close button is clicked
//grab the close button
var closebutton= document.getElementById('close')
//add an event listener to the button
closebutton.addEventListener('click', function(e){
popup.style.display='none'
})
// make the popup disappear
//when the 'i want in' button is clicked i want a prompt message that say welcome username  to show
// grab the button
var iwantin= document.getElementById('iwantin')
//add an event listner to the button
iwantin.addEventListener('click',function(e){
    var input= document.getElementById('name')
    // alert( 'Welcome  ' + input.value)
    alert(`welcome ${input.value}  we love and appreciate`)

    //grab the name the user input
// make the prompt msg show
})

