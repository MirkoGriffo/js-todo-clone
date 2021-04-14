/*********
 * Rifare la todo list come vista insieme a lezione:
popolando gli elementi della lista con JavaScript
inserendo un nuovo todo con un input testuale e gli eventi da tastiera
Rimozione todo con click su icona
Cliccando sul testo compare uno sbarramento a indicarne il completamento
 */

$(document).ready(function () {

    var todoItems = [

    ]


    var list = $(".todo");
    var newInput = $(".add-todo");
    var template = $("#template li");

    //popolo todo list

    for (var i = 0; i < todoItems.length; i++) {
        var todo = todoItems[i];
        var item = template.clone();
        item.find("text").text(todo.text);

        //aggiunta alla lista

        list.append(item);
    }
    //inserimento todo

    newInput.keyup(function (event) {

        //console.log(event.which)

        if (event.which === 13) {

            var text = newInput.val().trim();

            if (text !== " ") {

                //template

                var item = template.clone();
                item.find(".text").text(text);

                //aggiunta alla lista

                list.append(item);

                //reset
                newInput.val(" ");


            }
        }
    })




})