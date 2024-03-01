var gameOver = false

$(document).ready(function (){
    get_templates()
})

function fillBlanks(random_word){
    
    //var random_word = words[Math.floor(Math.random()*words.length)]

    for(let i=0; i<random_word.word.length; i++){
        let html = `<span class="fill_blanks">_</span>`
        $("#blanks").append(html)
    }

    $("#hint").append(random_word.category)

    $(".clickable").click(function(){
        var correctGuess = false

        let id= $(this).attr("id")

        var life = parseInt($("#life").text())

        for(var i=0; i < random_word.word.length; i++){

            if(random_word.word.charAt(i).toLowerCase()==id){

                if(life>0 && ($(".fill_blanks").eq(i).html()== "_" || $(".fill_blanks").eq(i).html()==id)){
                    
                    $(".fill_blanks").eq(i).html(id)
                    correctGuess = true

                    console.log(correctGuess)
                }

                if($("#blanks").text() === random_word.word.toLowerCase()){
                    $("#result").text("You win!")
                    correctGuess = true
                    gameOver = true
                }
            }
        }
    })
}

function get_templates(){
    $.ajax({
        url : "/get-template",
        type : "get",
        success : function(result){
            fillBlanks(result.word)
        },
        error : function(result){
            alert(result.responseJSON.message)
        }
    })
}