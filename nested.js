/**
 * const money = 101;

if (money > 300){
    console.log('Chicken');
}
else{
    if(money > 100){
        console.log('Rice');
    }
    else {
        if(money > 0){
            console.log('nothing');
        }
    }
}
 */

/**
 * /***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
 
let myScore = 85;
let friendScore = 39;

if (myScore > 80) {
    if (friendScore > 80) {
        console.log('go for a lunch with friend');
    } else if (friendScore < 80 && friendScore >= 60) {
        console.log('good luck next time.');
    } else if (friendScore < 60 || friendScore == 40){
        console.log('keep your friends message unseen');
    } else if (friendScore < 40){
        console.log('block your friend');
    }
}
else {
    console.log('Go home, sleep');
}

