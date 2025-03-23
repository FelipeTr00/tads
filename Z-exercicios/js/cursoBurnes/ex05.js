//laço para contar de 1 a 10
/*
for(var i = 1; i <= 100; i++) {
    document.write("<br>",i)
}
*/
i = 1;
while (i <=10) {
    // i é par?
    if (i % 2 === 0) {
    document.write("<div class='coluna pares'>"+i+"</div>");
    } else {
            document.write("<div class='coluna'>"+i+"</div>");
        }
    i++;
}