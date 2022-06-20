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
    },
    {
        title: `Что выведет sayHi при вызове через setTimeout?
<pre>
let name = "Вася";
function sayHi() {
  alert(name);
}

setTimeout(function() {
  let name = "Петя";
  sayHi();
}, 1000);
</pre>`,
        options: [
            'Вася',
            'Петя',
            'undefined',
            'будет ошибок'
        ],
        answer: 'Вася'
    },
    {
        title: `Что выведет alert?
<pre>
let str = "Hello";
str.something = 5;
alert(str.something); // ?
</pre>`,
        options: [
            '5',
            'undefined',
            'будет ошибок',
            '3'
        ],
        answer: 'будет ошибок'
    },
    {
        title: `Какие конструкции для циклов есть в javascript?
<pre>

</pre>`,
        options: [
            'Только две: for и while.',
            'Только одна: for.',
            'Три: for, while и do...while.',
            'Только одна: while'
        ],
        answer: 'Три: for, while и do...while.'
    },
    {
        title: `Яблоко стоит 1.15, апельсин стоит 2.30.
<pre>
Сколько стоят они вместе – 
чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
</pre>`,
        options: [
            '345',
            '3.45',
            '3,45',
            'Ни один из вариантов выше.'
        ],
        answer: 'Ни один из вариантов выше.'
    },
    {
        title: `Чему равно i в конце кода?
<pre>
for(let i=0; i<10; i++) {
    console.log(i);
  }
  // i = ?
</pre>`,
        options: [
            'undefined',
            '9',
            '10',
            'Нет такой переменной после цикла.'
        ],
        answer: 'Нет такой переменной после цикла.'
    },
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
        inputEl.value = item;
        labelEl.append(inputEl, item);
        wrapperEl.append(labelEl);
        optionsWrapper.append(wrapperEl);
    })

    containerEl.innerHTML = '';
    containerEl.append(titleEl, optionsWrapper);
}

addQuestion(currentIndex)
let skip = document.querySelector(".skip")
let next = document.querySelector(".next")
next.addEventListener('click', () => {
    currentIndex++;
    addQuestion(currentIndex)
    submit.classList.remove("nan")
    skip.classList.remove("nan")
    
  
})

skip.addEventListener("click", () =>{
    let options = document.querySelectorAll("[name=answer]")
    options.forEach(option=>{
        if(questions[currentIndex].answer ===  option.value){
            option.closest('label').classList.add("correct") 
            
         } 
    })
     
})
let corrctAnswers = 0
let submit = document.querySelector('.submit')
submit.addEventListener('click', () =>{
    let options = document.querySelectorAll("[name=answer]")
   options.forEach(option=>{
    
       if(questions[currentIndex].answer ===  option.value){
          option.closest('label').classList.add("correct") 
       }
       if(questions[currentIndex].answer !==  option.value && option.checked ){
        option.closest('label').classList.add("incorrect")
       }
      
       if(questions[currentIndex].answer ===  option.value && option.checked){
          corrctAnswers++
         
       }
       
         console.log(corrctAnswers)
   })
   options.forEach(option=>
    {
      option.disabled = true  
    }
     ) 
}) 




