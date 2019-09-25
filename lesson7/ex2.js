// Ваш код тут
function Tiger() {
	this.energy = 100;
    this.hungry = 0;
}

Tiger.prototype.act = function(context) {
    var space = context.find(" ");
    var plantEater = context.find("O");
    var plant = context.find("*");
    if (this.energy > 120 && space) {
        return {type: "reproduce", direction: space};
    }
    if (plant) {
        return {type: "move", direction: space};
    }
    if (space) {
        return {type: "move", direction: space};
    }
    if (plantEater) {
        return {type: "eat", direction: plantEater};
    }
};
animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O@O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // из предыдущего упражнения
   "*": Plant}
));