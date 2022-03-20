let data = {
    title: '1. Which language runs in a web browser?',
    options: ['im hancharex parasxan', 'A2', 'A3', 'A4'],
    answer: 'A2'
}

let containerEl = document.getElementById('container');

function addQuestion(data) {
    let titleEl = document.createElement('div');
    titleEl.innerText = data.title;
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

    containerEl.append(titleEl, optionsWrapper);
}

addQuestion(data)




