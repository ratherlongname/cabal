/////////////////////
// Event Listeners //
/////////////////////


// Add listeners initially //

// Add interest to list when enter is pressed on interest input field
const interest_input_field = document.getElementById('interest');
interest_input_field.addEventListener('keyup', addInterestToList);

// Delete interest from list when clicked
const interest_buttons = document.getElementById("interest-list").children;
console.log(interest_buttons);
for (let btn of interest_buttons) {
    btn.addEventListener('click', deleteInterestFromList);
}


// Relevant functions //

function addInterestToList(e) {
    if (e.key !== "Enter") return;

    // Grab interest string
    let s = e.target.value
    console.log(s)

    // Clear input field
    e.target.value = ""

    // Check string validity
    s = s.trim()
    if (s === "") return;

    // Sanitise input, create text node
    const text_node = document.createTextNode(s)

    // Create button
    const btn = document.createElement("button")
    btn.setAttribute("type", "button")
    btn.appendChild(text_node)

    // Delete button from list when clicked
    btn.addEventListener("click", deleteInterestFromList)

    // Inject button into DOM
    const l = document.getElementById("interest-list")
    l.appendChild(btn)

    return
}

function deleteInterestFromList(e) {
    // Remove clicked button
    e.target.remove()
    return
}