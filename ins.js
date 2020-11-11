//list of new words
let words = [
    { word: 'Software engineer', definition: 'someone who is employed to make, edit or update programs which can run in various devices' },
    { word: 'web-developers', definition: 'A programmer who designs and makes websites.' },
    { word: 'HTML', definition: 'A language that is used to display content for a website.' },
    { word: 'CSS', definition: 'A language that is used to program the look and feel of a website.' },
    { word: 'Javascript', definition: 'A real programing language which is not like HTML and CSS and is used to program the behavior of a website.' },
    { word: 'Browser', definition: 'A program that assists us to use the internet and view websites. For example, Google chrome, Safari etc' },
    { word: 'Visual Studio code', definition: 'This is a code platform that is free and easy to use that will help us write code' },
    { word: 'file extension', definition: 'The Part of a file name that determins the file type exmaple .txt would be a text file and .docx would be a word document' }
]

let selectedWord = '';


$('strong').click(function() {
    //making the overlay visible
    $('.overlay').css('display', 'block');
    //defining the popup element
    for (let i = 0; i < words.length; i++) {
        if (words[i].word == $(this)[0].textContent) {
            selectedWord = words[i].definition;
        }
    }
    let popupElement = document.createElement('div');
    popupElement.innerHTML = `
    <div class="head">Key term - ${$(this)[0].textContent}</div>
    <div class="mid"> ${selectedWord}</div>
    <div class="footing"></div>`;
    popupElement.className = 'popup';
    //appending the popup element
    document.querySelector('#body').appendChild(popupElement);
    console.log(popupElement);
    //function to handle the removal of the popup
    $('.overlay').click(function() {
        $(this).hide();
        let bodyChildren = document.querySelector('#body').childNodes;
        //if statement to only delete popup element if it exists
        if (bodyChildren[bodyChildren.length - 1].className == 'popup') {
            document.querySelector('#body').removeChild(document.querySelector('.popup'));
            popupElement = null;
        }
    })
})