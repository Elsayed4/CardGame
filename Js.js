/*
if(document.readyState === "loading"){
    document.addEventListener('DOMContentLoaded',ready());
} else {
    ready();
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click',() => {
            overlay.classList.remove('visible');
            //ReStart Game()
        });
    });


    cards.forEach(card => {
        card.addEventListener('click',() => {
            //game.flipcard(card)
        });
    });

}
*/

let cards = Array.from(document.getElementsByClassName('card'));
let cardBack = Array.from(document.getElementsByClassName('card-back'));
let cardFront = Array.from(document.getElementsByClassName('card-front'));
let flips = document.getElementById('flips');
flipsNumber = Number(flips.innerHTML);
console.log(cardBack)

let flag = 0;
let temp = 1;
for(let x = 0; x< cards.length ;x+=2){
    cards[x].name =(x/2);
}

for(let x = 0; x< cards.length ;x+=2){
    cards[x+1].name =(x/2);
}



console.log()

function resetAllCards(){

    for(let r = 0 ; r<cards.length;r++){
      cardBack[r].classList.remove("flip1");
      cardFront[r].classList.remove("flip1");
      
      
      console.log("remove")
   }

}

    cards.forEach(card => {
        card.addEventListener('click',() => {
            //game.flipcard(card)
            card.querySelector('.card-back').classList.add("flip1");
            card.querySelector('.card-front').classList.add("flip2");
           
            if(flag % 2 == 0){
                temp = card.name;
            }else{
                if(temp == card.name){
                    setTimeout(function(){
                        card.classList.add('removeCard');
                        for(let c=0;c<cards.length;c++){
                            if(cards[c].name == temp){
                                cards[c].classList.add('removeCard');
                            }

                        }
                        flips.innerHTML = --flipsNumber
                    },1000)
                    
                    ;
                }else{
                    console.log("cry");
                    //resetAllCards();
                    for(let r = 0 ; r<cards.length;r++){
                      setTimeout(function(){
                        cardBack[r].classList.remove("flip1");
                        cardFront[r].classList.remove("flip2");
                      },1000)
                     }
                }
            }
            flag++;    
        });
    });

    