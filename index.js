class RockPaperScissor{
    constructor(containerEl){
        const mainDiv = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = "Your Game";
        
        const button = document.createElement("button");
        mainDiv.appendChild(title);
        mainDiv.appendChild(button);
        button.textContent = "Play!";
        //const radio0 = document.createElement("input").setAttribute("type", "radio").setAttribute("name", "choice").setAttribute("value", "0");

        containerEl.append(mainDiv);
    }
}