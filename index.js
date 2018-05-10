class RockPaperScissor{
    constructor(containerEl){
        this.mainDiv = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = "Your Game";
        this.mainDiv.append(title);

        let radios = [];

        this.labels = ["Rock", "Paper", "Scissor"];

        for(let i = 0; i < 3; i++) {
            const radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "choice");
            radio.setAttribute("id", i);
            radio.setAttribute("value", i);
            radios.push(radio);

            const label = document.createElement("label");
            label.setAttribute("for", i);
            label.textContent = this.labels[i];
            let br = document.createElement("br");

            this.mainDiv.append(radio);
            this.mainDiv.append(label);
            this.mainDiv.append(br);
        }
        
        const button = document.createElement("button");
        button.textContent = "Play!";
        this.mainDiv.append(button);

        this.hr;
        this.oc;

        button.addEventListener("click", this.play.bind(this));

        this.result;

        containerEl.append(this.mainDiv);
    }

    
    opponentChoice(){
        this.opponent_choice = Math.floor(Math.random()*3);
        
    }

    play(event){
        this.opponentChoice();
        if (this.hr == null){
            this.hr = document.createElement("hr");
            this.head = document.createElement("h2");
            this.oc = document.createElement("h3");
            this.head.textContent = "Your opponent's choice:";
            this.oc.textContent = this.labels[this.opponent_choice];
            this.mainDiv.appendChild(this.hr);
            this.mainDiv.appendChild(this.head);
            this.mainDiv.appendChild(this.oc);    
        } else {
            this.oc.textContent = this.labels[this.opponent_choice];
        }

        if(this.result == null){
            this.result = document.createElement("h3");
            this.mainDiv.appendChild(this.result);
        }
        let currentAUX = document.querySelector('[name="choice"]:checked');
        this.current = currentAUX.getAttribute("value");
        this.controlWin();
    }
    
    controlWin(){
        if(this.current == 2 && this.opponent_choice == 0) {
            this.result.textContent="Lose";            
        } else if(this.current == 0 && this.opponent_choice == 2){
            this.result.textContent="Win!";
        } else if(this.current==this.opponent_choice){
            this.result.textContent="Tie";
        } else if(this.current > this.opponent_choice) {
            this.result.textContent="Win!";
        } else {
            this.result.textContent="Lose";        
        }
    }
}