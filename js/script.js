// Change page tool
function changePage(page) {
    window.location.href = page + ".html";
    console.log("Page changed to " + page);
}

//avgFloatTools
//adding and removing inputs and output skins and calculations
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
        const valueInput = box.querySelector('.valueInput');
        const multiplyerInput = box.querySelector('.multiplyerInput');
        valueInput.addEventListener('input', calculate);
        multiplyerInput.addEventListener('input', calculate);
        return box;
    }
    // Function to update button states based on box count
    function updateButtonStates() {
        removeBoxBtn.disabled = boxCount === 2;
        addBoxBtn.disabled = boxCount === 11;
    }
    //average all outputs depending on how many outputs
    function calculate() {
        const valueInputs = document.querySelectorAll('.valueInput');
        const multiplyerInputs = document.querySelectorAll('.multiplyerInput');
        //defualt when no inputs made
        let product = 1;

        valueInputs.forEach((input, index) => {
            const value = parseFloat(input.value);
            const multiplyer = parseFloat(multiplyerInputs[index].value);
            if (!isNaN(value) && !isNaN(multiplyer)) {
                product *= value * multiplyer;
            }
        });

        const average = Math.pow(product, 1 / valueInputs.length);
        document.getElementById('outputText').textContent = 'Result: ' + average;
    }
    // Event listener for adding a box
    addBoxBtn.addEventListener("click", function() {
        if (boxCount < 11) {
            const newBox = createBox();
            inputSkins.appendChild(newBox);
            boxCount++;
            updateButtonStates();
            calculate();
        }
    });
    // Event listener for removing a box
    removeBoxBtn.addEventListener("click", function() {
        if (boxCount > 2) {
            inputSkins.removeChild(inputSkins.lastElementChild);
            boxCount--;
            updateButtonStates();
            calculate();
        }
    });
    // Initially add one box when the page loads
    inputSkins.appendChild(createBox());
    boxCount++;
    // Initially disable remove button since there's only one box
    updateButtonStates();
    calculate();
});
//adding and removing input and output skins
document.addEventListener("DOMContentLoaded", function() {
    const addBoxBtn = document.getElementById("addBoxBtn1");
    const removeBoxBtn = document.getElementById("removeBoxBtn1");
    const outputSkins = document.getElementById("outputSkins");
    let boxCount = 1;

    // Function to create a new box
    function createBox() {
        const box = document.createElement("div");
        box.classList.add("outputBox");
        box.id = `outputBoxNum${boxCount}`;
        box.innerHTML = `
            <div class="inputCell">
                <div class="SkinNumTitle" id="outputSkin${boxCount}">Output ${boxCount}:</div>
                <input class="valueOutput" type="number" id="outputValueNum${boxCount}">
                <div class="outputQualityContainer">
                    <input readonly type="text" id="qualityOutput" placeholder="Quality">
                    <div class"qualityOptions">
                        <div onclick="selectQualityOption('FactoryNew')">Factory New</div>
                        <div onclick="selectQualityOption('MinimalWear')">Minimal Wear</div>
                        <div onclick="selectQualityOption('FieldTested')">Field Tested</div>
                        <div onclick="selectQualityOption('WellWorn')">Well Worn</div>
                        <div onclick="selectQualityOption('BattleScarred')">Battle Scarred</div>
                    </div>
                </div>
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
            outputSkins.appendChild(newBox);
            boxCount++;
            updateButtonStates();
        }
    });
    // Event listener for removing a box
    removeBoxBtn.addEventListener("click", function() {
        if (boxCount > 2) {
            outputSkins.removeChild(outputSkins.lastElementChild);
            boxCount--;
            updateButtonStates();
        }
    });

    // Initially add one box when the page loads
    outputSkins.appendChild(createBox());
    boxCount++;
    // Initially disable remove button since there's only one box
    updateButtonStates();
});

//function to select quality option
function selectQualityOption(option) {
    document.getElementById('qualityOutput').value = option;
}
