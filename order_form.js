/*Oliver Amparo
12/16/2021
00316561@student.necc.edu
javascipt for the table of order 

*/

/* setting when the user clicks off each element it gets the value and calculates all the values*/
var tax_count = 0;
function blu() { 
    
    /* getting the quantity when they click on the input field*/
    var val = document.getElementById("first").value;
    var feet = document.getElementById("feet").innerText;
    /*multiplying the number of feet*/
    document.getElementById("cub_feet").innerHTML = val * feet;
        /*multiplying the total cost*/
    var cost = document.getElementById("amount").innerText;
    document.getElementById("total_cost").innerHTML = cost * val;
}
/* adding a blur option for each input*/
function blu2() { 
    var val = document.getElementById("second").value;
    var feet = document.getElementById("feet2").innerText;
    document.getElementById("cub_feet2").innerHTML = val * feet;
    var cost = document.getElementById("amount2").innerText;
    document.getElementById("total_cost2").innerHTML = cost * val;
}
/* probably could have used a for loop */
function blu3() { 
    /*adding 1 to all of the ids to make them match*/
    var val = document.getElementById("thrid").value;
    var feet = document.getElementById("feet3").innerText;
    document.getElementById("cub_feet3").innerHTML = val * feet;
    var cost = document.getElementById("amount3").innerText;
    document.getElementById("total_cost3").innerHTML = cost * val;
}
/* last season wood 25 percent moisture*/
function blu4() { 
    var val = document.getElementById("fourth").value;
    var feet = document.getElementById("feet4").innerText;
    document.getElementById("cub_feet4").innerHTML = val * feet;
    var cost = document.getElementById("amount4").innerText;
    document.getElementById("total_cost4").innerHTML = cost * val;
}
/* seasoned wood 40 percent moisture*/
function blu5() { 

    var val = document.getElementById("fifth").value;
    var feet = document.getElementById("feet5").innerText;
    document.getElementById("cub_feet5").innerHTML = val * feet;
    var cost = document.getElementById("amount5").innerText;
    document.getElementById("total_cost5").innerHTML = cost * val;
}
/* 1/2 cord of wood for seasoned 40%*/
function blu6() { 
    var val = document.getElementById("sixth").value;
    var feet = document.getElementById("feet6").innerText;
    document.getElementById("cub_feet6").innerHTML = val * feet;
    /*getting the inter text of the cost of that wood*/
    var cost = document.getElementById("amount6").innerText;
    document.getElementById("total_cost6").innerHTML = cost * val;
}
/* 3/4 cord of wood for seasoned 40%*/
function blu7() { 
    var val = document.getElementById("seventh").value;
    var feet = document.getElementById("feet7").innerText;
    document.getElementById("cub_feet7").innerHTML = val * feet;
    var cost = document.getElementById("amount7").innerText;
    document.getElementById("total_cost7").innerHTML = cost * val;
}

/* 1 cord last of seasoned wood 40%*/
function blu8() { 
    var val = document.getElementById("eighth").value;
    var feet = document.getElementById("feet8").innerText;
    document.getElementById("cub_feet8").innerHTML = val * feet;
    var cost = document.getElementById("amount8").innerText;
    document.getElementById("total_cost8").innerHTML = cost * val;
}
/* 1/4 green firewood*/
function blu9() { 
    var val = document.getElementById("ninth").value;
    /* getting the amount of feet*/
    var feet = document.getElementById("feet9").innerText;
    document.getElementById("cub_feet9").innerHTML = val * feet;
    var cost = document.getElementById("amount9").innerText;
    /* multipluing for total cost*/
    document.getElementById("total_cost9").innerHTML = cost * val;
}
/* 1/4 green firewood 20%*/
function blu10() { 
    var val = document.getElementById("tenth").value;
    var feet = document.getElementById("feet10").innerText;
    document.getElementById("cub_feet10").innerHTML = val * feet;
    var cost = document.getElementById("amount10").innerText;
    document.getElementById("total_cost10").innerHTML = cost * val;
}
/* calling this function when quantity loses focus*/
function blu11() { 
    var val = document.getElementById("eleventh").value;
    var feet = document.getElementById("feet11").innerText;
    document.getElementById("cub_feet11").innerHTML = val * feet;
    var cost = document.getElementById("amount11").innerText;
    document.getElementById("total_cost11").innerHTML = cost * val;
}
/* last table element green firewood*/
function blu12() { 
    var val = document.getElementById("twelve").value;
    var feet = document.getElementById("feet12").innerText;
    document.getElementById("cub_feet12").innerHTML = val * feet;
    var cost = document.getElementById("amount12").innerText;
    /* multiply all the values */
    document.getElementById("total_cost12").innerHTML = cost * val;
}
/* when calculate is pressed run this script*/
function calculate() {
    /* selecting all the total classes*/
    var total = document.querySelectorAll(".total").length;
    /* starting a count variable*/
    var counting = 0;
/* for every total check the value*/
    
    for (var i = 0; i < total; i++) {
        /* if the value isnt 0*/
        if (document.querySelectorAll(".total")[i].innerText != 0) {
/* add to the count variable*/
            var some = document.querySelectorAll(".total")[i].innerText
            counting += Number(some);
        }
        

    }
    console.log(counting)
    /* set wood_total field to counting*/
    document.getElementById("wood_total").innerHTML = counting;

/* selecting all the .total_num which is the total cost coloumn*/
    var cost_total = document.querySelectorAll(".total_num").length;

  /* for each value not equal to 0*/
    for (var temp = 0; temp < cost_total; temp++) {
        /* add to tax_count*/
        if (document.querySelectorAll(".total_num")[temp].innerText != 0) {

            var tax = document.querySelectorAll(".total_num")[temp].innerText
            tax_count += Number(tax);
            
        }


    }
    /* tax is */
    var total_tax = tax_count * .10
    document.getElementById("tax").innerHTML = total_tax.toFixed(2);

/*getting the value of the tip input */
    var input_tip = document.getElementById("tip1").value;
    /* basic calculation to get the tip*/
    var total_tip = (input_tip / 100) * tax_count;

    /* getting it to only show 2 decimals. setting the tip to the table*/
    document.getElementById("tip").innerHTML = total_tip.toFixed(2);
    /* calculate the total value including tip and tax*/
    var grand_total = total_tip + total_tax + tax_count;
/*writing that to the table */
    document.getElementById("grand_total").innerHTML = grand_total.toFixed(2);
}
