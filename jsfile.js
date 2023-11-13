var boardDict = {};
    var strengthDict = {};


function initDicts(){
    

    // Loop through rows A to H
    for (var row = 'A'.charCodeAt(0); row <= 'H'.charCodeAt(0); row++) {
        for (var col = 1; col <= 8; col++) {
            var key = String.fromCharCode(row) + col;
            boardDict[key] = "";
        }
    }

    boardDict['A1'] = "wR1";
    boardDict['B1'] = "wN1";
    boardDict['C1'] = "wB1";
    boardDict['D1'] = "wQ";
    boardDict['E1'] = "wK";
    boardDict['F1'] = "wB2";
    boardDict['G1'] = "wN2";
    boardDict['H1'] = "wR2";
    boardDict['A2'] = "wP1";
    boardDict['B2'] = "wP2";
    boardDict['C2'] = "wP3";
    boardDict['D2'] = "wP4";
    boardDict['E2'] = "wP5";
    boardDict['F2'] = "wP6";
    boardDict['G2'] = "wP7";
    boardDict['H2'] = "wP8";
    boardDict['A7'] = "bP1";
    boardDict['B7'] = "bP2";
    boardDict['C7'] = "bP3";
    boardDict['D7'] = "bP4";
    boardDict['E7'] = "bP5";
    boardDict['F7'] = "bP6";
    boardDict['G7'] = "bP7";
    boardDict['H7'] = "bP8";
    boardDict['A8'] = "bR1";
    boardDict['B8'] = "bN1";
    boardDict['C8'] = "bB1";
    boardDict['D8'] = "bQ";
    boardDict['E8'] = "bK";
    boardDict['F8'] = "bB2";
    boardDict['G8'] = "bN2";
    boardDict['H8'] = "bR2";



    strengthDict["wR1"] =Math.floor(Math.random() * (80)) ;
    strengthDict["wN1"] = Math.floor(Math.random() * (60));
    strengthDict["wB1"] = Math.floor(Math.random() * (40)) ;
    strengthDict["wQ"] = Math.floor(Math.random() * (90 - 9) + 9);
    strengthDict["wK"] = 100;
    strengthDict["wB2"] = Math.floor(Math.random() * (40)) ;
    strengthDict["wN2"] = Math.floor(Math.random() * (60));
    strengthDict["wR2"] = Math.floor(Math.random() * (80) );
    strengthDict["wP1"] = Math.floor(Math.random() * (10 ) );
    strengthDict["wP2"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["wP3"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["wP4"] = Math.floor(Math.random() * (10 ) );
    strengthDict["wP5"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["wP6"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["wP7"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["wP8"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["bP1"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["bP2"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["bP3"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["bP4"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["bP5"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["bP6"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["bP7"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["bP8"] = Math.floor(Math.random() * (10 )) ;
    strengthDict["bR1"] = Math.floor(Math.random() * (80)) ;
    strengthDict["bN1"] = Math.floor(Math.random() * (60));
    strengthDict["bB1"] = Math.floor(Math.random() * (40)) ;
    strengthDict["bQ"] = Math.floor(Math.random() * (90 - 9) + 9);
    strengthDict["bK"] = 100;
    strengthDict["bB2"] = Math.floor(Math.random() * (40)) ;
    strengthDict["bN2"] = Math.floor(Math.random() * (60));
    strengthDict["bR2"] = Math.floor(Math.random() * (80) );

}


var button = document.getElementById("start");


button.addEventListener("click", createBoard);




function createBoard(){
    initDicts()
    clearOldBoard()

    //8 boxes in 1 row div
    for(i = 1; i <=8 ; i++){
        var newDiv = document.createElement('div');
        newDiv.id = "Row"+ i
        newDiv.style.cssText = "width: 80px;height: 80px;background-color: black; border: 2px solid #2980b9; white-space: nowrap;"
        document.getElementById("cover-div").appendChild(newDiv);
        for(j = 1; j <=8; j++){
            if((i+j)%2 == 0)
                createBlackSquare(i,j)
            else
                createWhiteSquare(i,j)
        }
    }
    
}


function clearOldBoard(){
    
    const coverdiv = document.getElementById("cover-div");
    while (coverdiv.firstChild) {
        coverdiv.removeChild(coverdiv.firstChild);
    }
}


function createBlackSquare(i,j){
    asciiNum = 64
    var newDiv = document.createElement('div');

    newDiv.style.cssText = "width: 80px;height: 80px;background-color: brown;border: 2px solid #2980b9; display: inline-block;"
    //adding id to square
    //from left to right a to h
    var asciiChar = String.fromCharCode(asciiNum+j);
    squareId = asciiChar + i;
    newDiv.id = asciiChar + i;
    
    elementIdStr = "Row"+i
    document.getElementById(elementIdStr).appendChild(newDiv);

    //attaching chess piece to square
    if(!(boardDict[squareId] === "")){
        var image = document.createElement('img');
        var imgDiv = document.createElement('div');
        pieceType = boardDict[squareId]

        image.src = 'img/'+pieceType+'.png';
        image.id = pieceType
        imgDiv.id = 'imgwrap'
        imgDiv.style.cssText = "position:absolute"

        //level of piece depicter
        
        var strendiv = document.createElement('div');
        strendiv.textContent = strengthDict[pieceType]
        strendiv.style.cssText = "width: 25px;height: 20px;background-color: green;position:absolute;color:white;text-align: center;"

        imgDiv.appendChild(image);
        newDiv.appendChild(imgDiv);
        imgDiv.appendChild(strendiv);
    }
}


function createWhiteSquare(i,j){
    asciiNum = 64
    var newDiv = document.createElement('div');

    newDiv.style.cssText = "width: 80px;height: 80px;background-color: beige;border: 2px solid #2980b9; display: inline-block;"
    //adding id to square
    //from left to right a to h
    var asciiChar = String.fromCharCode(asciiNum+j);
    squareId = asciiChar + i;
    newDiv.id = asciiChar + i;
    
    elementIdStr = "Row"+i
    document.getElementById(elementIdStr).appendChild(newDiv);

    //attaching chess piece to square
    if(!(boardDict[squareId] === "")){
        var image = document.createElement('img');
        var imgDiv = document.createElement('div');
        pieceType = boardDict[squareId]

        image.src = 'img/'+pieceType+'.png';
        image.id = pieceType
        imgDiv.id = 'imgwrap'
        imgDiv.style.cssText = "position:absolute; "

        //level of piece depicter
        
        var strendiv = document.createElement('div');
        strendiv.textContent = strengthDict[pieceType]
        strendiv.style.cssText = "width: 25px;height: 20px;background-color: green;position:absolute;color:white;text-align: center;"

        
        imgDiv.appendChild(image);
        imgDiv.appendChild(strendiv);
        newDiv.appendChild(imgDiv);
    }
}



