class RockPaperScissor{
<<<<<<< HEAD
    constructor(containerEl){
        const mainDiv = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = "Your Game";
        
        const button = document.createElement("button");
        mainDiv.appendChild(title);
        mainDiv.appendChild(button);
        button.textContent = "Play!";
        //const radio0 = document.createElement("input").setAttribute("type", "radio").setAttribute("name", "choice").setAttribute("value", "0");
=======
    constructor(){
>>>>>>> f514e84965aab04d4a24af5ba7241fa322dc7027

        containerEl.append(mainDiv);
    }
<<<<<<< HEAD
=======
    opponentChoice(){
        this.opponent_choice= Math.floor(Math.random()*3);
    }

>>>>>>> f514e84965aab04d4a24af5ba7241fa322dc7027
}