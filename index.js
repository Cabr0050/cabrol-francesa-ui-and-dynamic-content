let form = document.querySelector('form');
// Save the reference to text-field into a variable. | <input type="text">
let textInput = document.getElementById('entry');
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let button = document.getElementById('btn');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let collected = document.getElementById('collected-items');
// Save the reference to paragraph for feedback | <p class="feedback"></p>
let fb = document.getElementById('feedback');

// Start function addItem.
function addItem (ev){
   //prevent default behaviour of form 
   ev.preventDefault(); 
   
   fb.textContent = '';
   
   // Create list-item and store output in a variable.
    let li = document.createElement('li'); 
   // Check if user entered the value in input text-field.
    if (textInput.value !== '') {
      // Use textContent property on created list-item and assign it with the value of the text written in the text-field
      li.textContent = textInput.value; 
      // Append list item to unordered list.
      collected.appendChild(li); 
      // Clear the text-field.
      form.reset();
      // Clear a feedback-message.
      fb.reset(); 
      // Put the cursor back to text-field (textField.focus())
      form.focus()
    } else {
       // Print the message nothing entered in the paragraph "feedback"
      fb.innerText = "Please add to order!";
   }   
}
// Register your function addItem for click event on button.

form.addEventListener('submit', addItem); 
