let AppQuestions = [

    {
        Question:"Q1 : What Is The Full Form Of HTML ?",
        a: "Hyper text makeup language",
        b: "Higher text markup language",
        c: "HyperText Markup Language",
        d: "HyyperText Language",
        answer: "ans1"
    },



    {
        Question:"Q2 : What Is The Full Form Of CSS ?",
        a: "Cascading style Sheep",
        b: "Cascading style sheet",
        c: "Cascading style Shift",
        d: "Cascading style set",
        answer : "ans2"
    },


    {
        Question:"Q3 : Which of the following keywords is used to define a variable in Javascript? ?",
        a: "Var",
        b: "Let",
        c: "Both A & B",
        d: "None Of Above",
        answer : "ans3"
    },


    {
        Question:"Q4 :Javascript is an _______ language?",
        a: "Object based",
        b: "Procedural",
        c: "None Of Above",
        d: "Object Oriented",
        answer : "ans4"
    },


];




const  question = document.querySelector('.Question')

const option1 = document.querySelector('#option1')              //  ]
const option2 = document.querySelector('#option2')              //  ]
const option3 = document.querySelector('#option3')              //  ]--------->> selecting the options of the Quiz   
const option4 = document.querySelector('#option4')              //  ]


const submit = document.querySelector('#submit')         // slecting button by its id
const show = document.querySelector("#showScore")       //  -->>   selecting the score box from it's ID
const answers = document.querySelectorAll('.answer')    //   --->   seleccting answers of the app

let QuestionCount = 0;   // first question count  0
let score = 0;       

const LoadQuestion =()=>{


    const questionList = AppQuestions[QuestionCount]       //question and question counts
    question.innerText = questionList.Question      


    option1.innerText = questionList.a;                     //  ]
    option2.innerText = questionList.b;                     //  ]
    option3.innerText = questionList.c;                     //  ]-------->>>> selecting all the options or radio buttons of the quiz
    option4.innerText = questionList.d;                     //  ]
}

LoadQuestion()


const getCheckAnswer =()=>{
    let answer;

    answers.forEach((curruntElm)=>{
        if (curruntElm.checked) {
            answer = curruntElm.id;
        }
        
    });

    return answer
};


const AutoDeselectAll = () =>{
    answers.forEach((curruntElm)=> curruntElm.checked = false)    // this code is for deselecct the auto option 
}


submit.addEventListener('click',()=>{

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);



    if (checkedAnswer === AppQuestions[QuestionCount].answer) {     // this code is for the when answer is correct it will plus 1 mark  out of 4
        score++;
    };

    QuestionCount ++;                   // when we click submit button iit will go to next question 
    AutoDeselectAll()                   // this is function calll of deselect the auto option

    if(QuestionCount<AppQuestions.length){
        LoadQuestion()
    }


    else{
        show.innerHTML =
        `<h3 align="center">Your Score ${score}/${AppQuestions.length}</h3> 
        <button onclick="location.reload()" class="submit">Reload</button>
        `;

        show.classList.remove('ScroeArea');
    }

});
