class RockPaperScissor{
    constructor(containerEl){
        this.mainDiv = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = "Your Game";
        this.mainDiv.append(title);

        let radios = [];

        const labels = ["Rock", "Paper", "Scissor"];

        for(let i = 0; i < 3; i++) {
            const radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "choice");
            radio.setAttribute("id", i);
            radio.setAttribute("value", i);
            radios.push(radio);

            const label = document.createElement("label");
            label.setAttribute("for", i);
            label.textContent = labels[i];
            let br = document.createElement("br");

            this.mainDiv.append(radio);
            this.mainDiv.append(label);
            this.mainDiv.append(br);
        }
        
        const button = document.createElement("button");
        button.textContent = "Play!";

        this.mainDiv.append(button);    

        containerEl.append(this.mainDiv);
    }

    opponentChoice(){
        this.opponent_choice= Math.floor(Math.random()*3);
    }

}