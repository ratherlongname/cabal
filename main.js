/////////////////////
// Event Listeners //
/////////////////////


// Add listeners initially //

// Get location access
const location_input_field = document.getElementById("location");
location_input_field.onclick = getCurrentLocation;
location_input_field.onkeydown = doNothing;

// Add interest to list when enter is pressed on interest input field
const interest_input_field = document.getElementById('interest');
interest_input_field.onkeyup = addInterestToList;

// Delete interest from list when clicked
const interest_buttons = document.getElementById("sign-up-interest-list").children;
for (let btn of interest_buttons) {
    btn.onclick = deleteInterestFromList;
}

const submit_button = document.getElementById("sign-up-submit");
submit_button.onclick = (e) => {
    e.preventDefault()
}

// Relevant functions //

function getCurrentLocation(e) {
    const status = e.target;

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.value = `${latitude} °, ${longitude} °`;
    }

    function error() {
        status.value = 'Unable to retrieve your location. Click to retry.';
    }

    if(!navigator.geolocation) {
        status.value = 'Geolocation is not supported by your browser.';
    } else {
        status.value = 'Locating ...';
        navigator.geolocation.getCurrentPosition(success, error);
    }

    return
}

function doNothing(e) {
    e.preventDefault();
    return
}

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
    btn.setAttribute("class", "interest-btn")
    btn.appendChild(text_node)

    // Delete button from list when clicked
    btn.onclick = deleteInterestFromList;

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