// Change page tool
function changePage(page) {
    window.location.href = page + ".html";
    console.log("Page changed to " + page);
}

//avgFloatTools
//adding and removing inputs and output skins
document.addEventListener("DOMContentLoaded", function() {
    const addBoxBtn = document.getElementById("addBoxBtn");
    const removeBoxBtn = document.getElementById("removeBoxBtn");
    const inputSkins = document.getElementById("inputSkins");

    let boxCount = 1;

    // Function to create a new box
    function createBox() {
        const box = document.createElement("div");
        box.classList.add("inputBox");
        box.id = `inputBoxNum${boxCount}`;
        box.innerHTML = `
            <div class="inputCell">
                <div class="SkinNumTitle" id="Skin${boxCount}">Input ${boxCount}:</div>
                <input class="valueInput" type="number" id="inputValueNum${boxCount}">
                <input class="multiplyerInput" type="number" id="inputValueMultiplyerNum${boxCount}" value="1" min="1" max="10">
            </div>
        `;
        return box;
    }

    // Function to update button states based on box count
    function updateButtonStates() {
        removeBoxBtn.disabled = boxCount === 2;
        addBoxBtn.disabled = boxCount === 11;
    }
    // Event listener for adding a box
    addBoxBtn.addEventListener("click", function() {
        if (boxCount < 11) {
            const newBox = createBox();
            inputSkins.appendChild(newBox);
            boxCount++;
            updateButtonStates();
        }
    });
    // Event listener for removing a box
    removeBoxBtn.addEventListener("click", function() {
        if (boxCount > 2) {
            inputSkins.removeChild(inputSkins.lastElementChild);
            boxCount--;
            updateButtonStates();
        }
    });

    // Initially add one box when the page loads
    inputSkins.appendChild(createBox());
    boxCount++;
    // Initially disable remove button since there's only one box
    updateButtonStates();
});


