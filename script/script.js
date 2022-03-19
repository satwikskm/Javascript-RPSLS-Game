'use strict'

let rock=document.getElementById('rock');
let paper=document.getElementById('paper');
let scissor=document.getElementById('scissor');
let spock=document.getElementById('spock');
let lizard=document.getElementById('lizard');
let choices = ["rock", "paper", "scissor",'spock','lizard'];
let num = Math.floor(Math.random()*5);
let computer_choice = choices[num];
let delayInMilliseconds = 3000;
let input =0
let user_score=10
let computer_score=10

let count=0


let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose',
        'spock':'lose',
        'lizard':'win'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win',
        'spock':'lose',
        'lizard':'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw',
        'spock':'win',
        'lizard':'lose'
    },
    'spock' : {
        'rock' : 'win',
        'scissor' : 'win',
        'paper' : 'lose',
        'spock':'draw',
        'lizard':'lose'
    },
    'lizard' : {
        'rock' : 'draw',
        'scissor' : 'lose',
        'paper' : 'win',
        'spock':'win',
        'lizard':'draw'
    }


}


rock.addEventListener('click',()=>{
    rock.style.background='green'
    rock.style.transform='translate(250px,50px)'
    document.getElementById('choice').textContent="You Have Choosed Rock"
    input='rock'
    checker(input,rock)
    var screen=document.getElementById('screen')
    screen.classList.toggle('screen-active')
    rock.style.display='block'
    
        init(rock)//your code to be executed after 1 second

    

})

paper.addEventListener('click',()=>{
    paper.style.background='green'
    paper.style.transform='translate(250px,50px)'
    document.getElementById('choice').textContent="You Have Choosed Paper"
    input='paper'
    checker(input,paper)
    var screen=document.getElementById('screen')
    screen.classList.toggle('screen-active')
    paper.style.display='block'
    init(paper)

})

scissor.addEventListener('click',()=>{
    scissor.style.background='green'
    scissor.style.transform='translate(250px,50px)'
    document.getElementById('choice').textContent="You Have Choosed Scissor"
    input='scissor'
    checker(input,scissor)
    var screen=document.getElementById('screen')
    screen.classList.toggle('screen-active')
    scissor.style.display='block'
    init(scissor)

})

lizard.addEventListener('click',()=>{
    lizard.style.background='green'
    lizard.style.transform='translate(250px,50px)'
    document.getElementById('choice').textContent="You Have Choosed Lizard"
    input='lizard'
    checker(input,lizard)
    var screen=document.getElementById('screen')
    screen.classList.toggle('screen-active')
    lizard.style.display='block'
    init(lizard)

})

spock.addEventListener('click',()=>{
    spock.style.background='green'
    spock.style.transform='translate(250px,50px)'
    document.getElementById('choice').textContent="You Have Choosed Spock"
    input='spock'
    checker(input,spock)
    var screen=document.getElementById('screen')
    screen.classList.toggle('screen-active')
    spock.style.display='block'
    init(spock)

})



function checker(input,val){
    count++;
    switch(choices_object[input][computer_choice]){
    
        case 'win':
            val.style.background="pink"
            user_score+=1;
            console.log(input,computer_choice,user_score)
            document.getElementById('output').textContent=`Your score is ${user_score} and Computer's Sore is ${computer_score}`
            break;
        case 'lose':
            val.style.background="red"
            computer_score+=1;
            console.log(input,computer_choice)
            document.getElementById('output').textContent=`Your score is ${user_score} and Computer's Sore is ${computer_score}`

            break;
        default:
            val.style.background="white"
            console.log(input,computer_choice,user_score)
            console.log(input,computer_choice)
            document.getElementById('output').textContent=`Your score is ${user_score} and Computer's Sore is ${computer_score}`

            break;
    }
    
    console.log(count)
    
    

}

function init(val){
    console.log("in")
    
    setTimeout(function() {
        var screen_active=document.getElementById('screen')
    screen_active.classList.toggle('screen-active')
        
        val.style.background='DodgerBlue'
        val.style.transform='translate(0px,0px)'
        //your code to be executed after 1 second
      }, delayInMilliseconds);
    
    

}



document.getElementById('count').textContent=`Your score is ${user_score} and Computer's Sore is ${computer_score}`




