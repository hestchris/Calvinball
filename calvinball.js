/*
            Calvinball (http://www.picpak.net/calvin/oldsite/images/oogy.gif) is a game with a very complicated scoring system. Your job is to write a piece of code which determines a player's final score, given their starting score, and various other details about the player which are relevant to the game.

            Provided below are three different player's starting scores. Uncomment one at a time to calculate the final score for that player.

            Calvinball Rules:
                1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
                2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
                3. A player's score is reduced by 77 if their last play was "Q"
                4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
                5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
                6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
                7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
        */

        /*
        //Player One
        var score = 193;
        var last_play = 'Q'; //Q
        var broom = "handle";
        var has_ball = true;
        var is_in_tree = false;
        var crying = false;

        // Testing Rule 1
        if ( typeof score !== 'number') {
            score = 500;
        }

        // Testing Rule 2
        if (crying) {
            score = score -300;
        }
        
        if (!crying) {
            score = score +50;
        }

        // Testing rule 3    
        if (last_play === 'Q') {
            score = score - 77;
        }

        // Testing rule 4
        if ((last_play !== 'number') && is_in_tree) {
            score = score + 395
        }

        // Testing rule 5
        if (broom === "handle") {
            score = score * 2;
        } else if (broom === "brush") {
            score = score * 3;
            } else {
                score = score / 2;
            }

        // Testing rule 6
        if (((has_ball) && !is_in_tree) && !crying) {
            score = score * 1.5;
        } else {
            score = score
        }

        // Testing rule 7
        if (typeof last_play === 'number') {
            score = score * last_play;
        }

        console.log(score)
        
*/





        
        //Player Two
        var score = 394;
        var last_play = "W";
        var broom = "none";
        var has_ball = true;
        var is_in_tree = true;
        var crying = false;
        

        // Testing Rule 1
        if ( typeof score !== 'number') {
            score = 500;
        }

        // Testing Rule 2
        if (crying) {
            score = score -300;
        }
        
        if (!crying) {
            score = score +50;
        }

        // Testing rule 3    
        if (last_play === 'Q') {
            score = score - 77;
        }

        // Testing rule 4
        if ((last_play !== 'number') && is_in_tree) {
            score = score + 395
        }

        // Testing rule 5
        if (broom === "handle") {
            score = score * 2;
        } else if (broom === "brush") {
            score = score * 3;
            } else {
                score = score / 2;
            }

        // Testing rule 6
        if (((has_ball) && !is_in_tree) && !crying) {
            score = score * 1.5;
        } else {
            score = score
        }

        // Testing rule 7
        if (typeof last_play === 'number') {
            score = score * last_play;
        }

        console.log(score)







        /*
        //Player Three
        var score = "f";
        var last_play = 1.5;
        var broom = "brush";
        var has_ball = true;
        var is_in_tree = false;
        var crying = true;
        
 // Testing Rule 1
        if ( typeof score !== 'number') {
            score = 500;
        }

        // Testing Rule 2
        if (crying) {
            score = score -300;
        }
        
        if (!crying) {
            score = score +50;
        }

        // Testing rule 3    
        if (last_play === 'Q') {
            score = score - 77;
        }

        // Testing rule 4
        if ((last_play !== 'number') && is_in_tree) {
            score = score + 395
        }

        // Testing rule 5
        if (broom === "handle") {
            score = score * 2;
        } else if (broom === "brush") {
            score = score * 3;
            } else {
                score = score / 2;
            }

        // Testing rule 6
        if (((has_ball) && !is_in_tree) && !crying) {
            score = score * 1.5;
        } else {
            score = score
        }

        // Testing rule 7
        if (typeof last_play === 'number') {
            score = score * last_play;
        }

        console.log(score)
       */

