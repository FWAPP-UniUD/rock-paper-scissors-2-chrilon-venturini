class RockPaperScissor{
    constructor(containerEl){
        const mainDiv = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = "Your Game";
        
        const button = document.createElement("button");
        mainDiv.appendChild(title);
        mainDiv.appendChild(button);
        button.textContent = "Play!";
        button.addEventListener("click", this.play.bind(this));
        //const radio0 = document.createElement("input").setAttribute("type", "radio").setAttribute("name", "choice").setAttribute("value", "0");

        containerEl.append(mainDiv);
    }
    opponentChoice(){
        this.opponent_choice= Math.floor(Math.random()*3);
        
    }

    play(event){
        const hr = document.createElement("hr");
        const oc = document.createElement("h2");
        oc.textContent=this.opponent_choice;
        this.mainDiv.appendChild(hr);
        this.mainDiv.appendChild(oc);
     }

}