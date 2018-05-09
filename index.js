class RockPaperScissor{
    constructor(containerEl){
        this.hr;
        this.oc;
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
        button.addEventListener("click", this.play.bind(this));
        containerEl.append(this.mainDiv);
    }

    
    opponentChoice(){
        this.opponent_choice= Math.floor(Math.random()*3);
        
    }

    play(event){
        this.opponentChoice();
        if (this.hr==null){
            this.hr = document.createElement("hr");
            this.oc = document.createElement("h2");
            this.oc.textContent=this.opponent_choice;
            this.mainDiv.appendChild(this.hr);
            this.mainDiv.appendChild(this.oc);    
        }else{
            this.oc.textContent=this.opponent_choice;
        }

        if(this.result==null){
            const br =document.createElement("br");
            this.result=document.createElement("h1");
            this.mainDiv.appendChild(br);
            this.mainDiv.appendChild(this.result);
        }
        this.controlWin();
    }
    
    controlWin(){
        if(this.current>this.opponent_choice || (this.current==0 && this.opponent_choice==2)){
            this.result.textContent="Win!";
        }else if(this.current==this.opponent_choice){
            this.result.textContent="Tie";
        }else {
            this.result.textContent="Lose";
        }
    
    }

}