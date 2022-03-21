let questions = [
    {
        title: `Чему равна длина arr.length массива arr?
<pre>
let arr = [];
arr[1] = 1;
arr[3] = 33;
</pre>`,
        options: ['1', '2', '3', '4'],
        answer: '4'
    },
    {
        title: `Что выведет этот код?
<pre>
function F() { return F; }
alert( new F() instanceof F );
alert( new F() instanceof Function );
</pre>`,
        options: [
            'false, false',
            'false, true',
            'true, false',
            'true, true'
        ],
        answer: 'false, true'
    }
];

let currentIndex = 0;

let containerEl = document.getElementById('container');

function addQuestion(index) {
    let data = questions[index]

    let titleEl = document.createElement('div');
    titleEl.innerHTML = `${index + 1}. ${data.title}`;
    titleEl.classList.add('question');

    let optionsWrapper = document.createElement('div');
    optionsWrapper.classList.add('options-wrapper');

    data.options.forEach(item => {
        let wrapperEl = document.createElement('div');
        let labelEl = document.createElement('label');
        let inputEl = document.createElement('input');
        inputEl.type = 'radio';
        inputEl.name = 'answer';
        labelEl.append(inputEl, item);
        wrapperEl.append(labelEl);
        optionsWrapper.append(wrapperEl);
    })

    containerEl.innerHTML = '';
    containerEl.append(titleEl, optionsWrapper);
}

addQuestion(currentIndex)


document.addEventListener('click', () => {
    currentIndex++;
    addQuestion(currentIndex)
})


