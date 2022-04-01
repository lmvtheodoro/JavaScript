//Global Variables
const GAME_CONTAINER = window.document.querySelector('section#game-container')
const GAME_START_BUTTON = window.document.getElementById("start-game-button")

// Design Pattern => Object Literals
const game = {
    //Game Structure
    cellContent: ['','','','','','','','',''],
    gameDivs: [],
    //Game Rules
    gameStarted: false,
    wichPlayer: 1,   //1 - X / 2 - O
    playerSymbol: ['X','O'],
    victoryConditions: [
        [0,1,2],  
        [3,4,5], 
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    gameIsOver: false,
    //Game Functions
    startGame: ()=>{
        if(game.gameStarted === true){
            alert('[ERRO] - O jogo já começou!')
        }else{
            GAME_CONTAINER.style.gridTemplate = "repeat(3, 1fr) / repeat(3, 1fr)"
            GAME_START_BUTTON.style.display = "none"
            game.onDrawBoard()
        }
    },
    onDrawBoard: function(){
        if(this.gameStarted === false){
            //First Draw/Restart
            for(let i = 0; i < 9 ; i++){
                console.log('Div'+ (i+1) +'Criada')
                this.gameDivs[i] = GAME_CONTAINER.appendChild(window.document.createElement('div'))
                this.gameDivs[i].setAttribute('id', `${i}`)
                this.gameDivs[i].setAttribute('onclick', 'game.playTurn(this.id)')
                this.gameDivs[i].innerHTML = this.cellContent[i]
            }
            this.gameStarted = true
        }
    },
    playTurn: function(clicked){
        let clickedDiv = document.getElementById(clicked)
        if(this.gameIsOver === false){
            if(clickedDiv.innerText == ''){
                let result = this.onCheckSymbol()
                this.cellContent[clickedDiv.id] = result
                clickedDiv.innerText = result
                if(this.checkWin(result)){
                    alert(`O jogador ${this.wichPlayer} venceu!`)
                    this.gameIsOver = true
                }else{
                    this.changePlayer()
                }
            }
        }else{
            alert('[ERRO] O jogo já terminou, por favor, reinicie para jogar novamente!')
        }
    },
    changePlayer: function(){
        this.wichPlayer === 1 ? this.wichPlayer = 2 : this. wichPlayer = 1
    },
    onCheckSymbol: function(){
        if(this.wichPlayer === 1){
            return this.playerSymbol[0]
        }else{
            return this.playerSymbol[1]
        }
    },
    checkWin: function(symbol){
        for(arr in this.victoryConditions){
            if( this.cellContent [ this.victoryConditions[arr][0] ] == symbol &&
                this.cellContent [ this.victoryConditions[arr][1] ] == symbol &&
                this.cellContent [ this.victoryConditions[arr][2] ] == symbol){
                // console.log('venceu com '+ this.victoryConditions[arr])
                console.log(symbol)
                return true
            }
        }
    }
}