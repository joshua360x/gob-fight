// import functions and grab DOM elements
import { renderGoblin } from './utils.js';


const goblinForm = document.querySelector('#new-goblin-form');
const playerHP = document.querySelector('.playerHP');
// const playerChar = document.querySelector('.player-Char');
const goblinChars = document.querySelector('.evil-Goblins');
const goblinDefeated = document.querySelector('.numberDefeated');

// let state
// let goblin = {
//     name: '',
//     hp: 0
// };

let newGob = [
    {
        name: 'Curry',
        hp: 1
    },
    {
        name: 'pizza',
        hp: 5
    },
    {
        name: 'yoyo',
        hp: 2
    }
];
let defeated = 0;
let playerHealth = 10;

// let defeatedGoblin = [
//     {
//         name: ''
//     }
// ];

// set event listeners 
  // get user input
goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let goblinNew = new FormData(goblinForm);
    let name = `${goblinNew.get('goblin-name') === '' ? 'Guy' + (Math.ceil(Math.random() * 100)) : goblinNew.get('goblin-name')}`;
    let obj = {
        name,
        hp: (Math.ceil(Math.random() * 5))
    };

    newGob.push(obj);
    displayGodblins();
});
  // use user input to update state 
function displayGodblins() {
    goblinChars.textContent = '';
    
    for (let goblin of newGob) {

        let goblinList = renderGoblin(goblin);


        goblinList.addEventListener('click', () => {
            if ((Math.random() * 5) > 2) {
                alert('you have hit the goblin');
                goblin.hp = goblin.hp - (Math.ceil(Math.random() * 3));

                if (goblin.hp <= 0) {
                    goblin.hp = 0;
                    defeated++;
                    goblinDefeated.textContent = defeated;
                    alert(`you have defeated ${goblin.name}`);
                    displayGodblins(); 
                }
                
                if ((Math.random() * 5) > 3) {
                    alert('player has been hit');
                    playerHealth--;
                    playerHP.textContent = playerHealth;
                    if (playerHealth === 0) {
                        alert('Game Over');
                    }
                }
                displayGodblins(); 
            } 

            // if (goblin.hp <= 0) {
            //     goblin.hp = 0;
            //     defeatedGoblin.push(goblin);
            //     defeated++;
            //     goblinDefeated.textContent = defeated;
            //     alert(`you have defeated ${goblin.name}`);
            //     if ((Math.random() * 5) > 3) {
            //         alert('player has been hit');
            //         playerHealth--;
            //         playerHP.textContent = playerHealth;
            //     } 
            //         // console.log("🚀 ~ file: app.js ~ line 66 ~ goblinList.addEventListener ~ defeatedGoblin", defeatedGoblin)
          
            //     displayGodblins(); 
            // }



        //   if (goblin.hp > 0) {
        //              alert('you have hit the goblin')
        //              goblin.hp = goblin.hp - (Math.ceil(Math.random() * 3))
        //              displayGodblins() 
        //            }
        // }
            else if ((Math.random() * 5) < 2.5) {
                alert('you have missed the goblin');


          // console.log("🚀 ~ file: app.js ~ line 66 ~ goblinList.addEventListener ~ defeatedGoblin", defeatedGoblin)

                displayGodblins(); 
            }

        
        });

        goblinChars.append(goblinList);

    }
}
  // update DOM to reflect the new state
displayGodblins();