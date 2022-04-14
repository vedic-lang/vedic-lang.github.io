// Retrieve Elements
const consoleLogList = document.getElementById('console-logs');
const executeCodeBtn = document.getElementById('btn-run');
const resetCodeBtn = document.getElementById('btn-clear');

// Setup Ace
let codeEditor = ace.edit("editor");
let defaultCode = `console.log(\`संस्कृत श्लोक - Sanskrit Shlok
अन्यायोपार्जितं वित्तं दस वर्षाणि तिष्ठति।
प्राप्ते चैकादशेवर्षे समूलं तद् विनश्यति।।
अर्थ– गलत तरीके से और अन्याय करके कमाया हुआ धन 10 वर्षों तक ही संचित किया हुआ रह सकता है। लेकिन वह धन अपने मूलधन सहित पूरा ग्यारहवें वर्ष नष्ट हो जाता है।\`)`;
let consoleMessages = [];

let editorLib = {
    clearConsoleScreen() {
        consoleMessages.length = 0;

        // Remove all elements in the log list
        while (consoleLogList.firstChild) {
            consoleLogList.removeChild(consoleLogList.firstChild);
        }
    },
    printToConsole() {
        consoleMessages.forEach(log => {
            const newLogItem = document.createElement('li');
            const newLogText = document.createElement('pre');

            newLogText.className = log.class;
            newLogText.textContent = `> ${log.message}`;

            newLogItem.appendChild(newLogText);

            consoleLogList.appendChild(newLogItem);
        })
    },
    // Configure Ace
    init() {
    
        // Set Options
        codeEditor.setOptions({
            fontFamily: 'EK Mukta',
            fontSize: '1.40em;',
            wrap: true,   // wrap text to view
            indentedSoftWrap: false, 
            behavioursEnabled: false, // disable autopairing of brackets and tags        
        });

        // Set Default Code
        codeEditor.setValue(defaultCode);
    }
}

// Events
executeCodeBtn.addEventListener('click', () => {
    // Get input from the code editor
    const userCode = codeEditor.getValue();

    // Run the user code
    try {
        eval(userCode);
    } catch (err) {
        console.error(err);
    }

    // Print to the console
    editorLib.printToConsole();
});

resetCodeBtn.addEventListener('click', () => {
    // Clear ace editor
    codeEditor.setValue(defaultCode);

    // Clear console messages
    editorLib.clearConsoleScreen();
})

editorLib.init();