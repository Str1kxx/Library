function formTable(selector) {
    var tableall = document.querySelector(selector)
    var form = tableall.getElementsByTagName("form")[0];
    var table = tableall.getElementsByTagName("table")[0];

    form.onkeyup = function(ev) {
        
        var 
            name = form.elements[0].value,
            namelibrery = form.elements[1].value,
            prof = form.elements[2].value;

        for(var i = 1; i < table.rows.length; i++){
            table.rows[i].className = "";

            if (
                table.rows[i].cells[1].innerHTML.indexOf(name) == -1 ||
                table.rows[i].cells[2].innerHTML.indexOf(namelibrery) == -1 ||
                table.rows[i].cells[3].innerHTML.indexOf(prof) == -1
            ){
                table.rows[i].className = "hide";
            }
        }    
    }
}
formTable(".tableall")