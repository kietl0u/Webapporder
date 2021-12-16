



function loadJson(){ //json
    var row = table.insertRow;
    var number=row.insertCell;
    var name=row.insertCell;
    var quality=row.insertCell;
    var Extras=row.insertCell;
    var size=row.insertCell;
    var price=row.insertCell;
    var total=row.insertCell;  
}

function Purchase() { // alertdisplay
    alert("Purchase success!, Thanks for your order ")
    location.reload();
}

function coffeechoosesize(){ //type
    if (document.getElementById('espresso').checked){
            document.getElementById('all-size').style.visibility = 'visible';
            document.getElementById('small').style.display = 'none';
            document.getElementById('medium').style.display = 'none';
            document.getElementById('large').style.display = 'none';
            document.getElementById('single').style.display = 'block';
            document.getElementById('double').style.display = 'block';
            document.getElementById('size').value = "Double";
    }
    else if(document.getElementById('chemex').checked){
            document.getElementById('all-size').style.visibility = 'visible';
            document.getElementById('small').style.display = 'none';
            document.getElementById('medium').style.display = 'none';
            document.getElementById('large').style.display = 'none';
            document.getElementById('single').style.display = 'none';
            document.getElementById('double').style.display = 'none';
            document.getElementById('size').value = 0;

    }
    else{
        document.getElementById('all-size').style.visibility = 'visible';
        document.getElementById('small').style.display = 'block';
        document.getElementById('medium').style.display = 'block';
        document.getElementById('large').style.display = 'block';
        document.getElementById('single').style.display = 'none';
        document.getElementById('double').style.display = 'none';
        document.getElementById('size').value = "Medium";
    }
}

function coffeechoosecoffee(){ //coffee
    if (document.getElementById('pour-over').checked||document.getElementById('chemex').checked){
        document.getElementById('all-coffee').style.visibility = 'visible';
        document.getElementById('house-espresso').style.display = 'none';
        document.getElementById('guest-espresso').style.display = 'none';
        document.getElementById('single-origin').style.display = 'block';
        document.getElementById('house-blend').style.display = 'block';
        document.getElementById('coffee').value = "house blend";
        
    } else {
        document.getElementById('all-coffee').style.visibility = 'visible';
        document.getElementById('house-espresso').style.display = 'block';
        document.getElementById('guest-espresso').style.display = 'block';
        document.getElementById('single-origin').style.display = 'none';
        document.getElementById('house-blend').style.display = 'none';
        document.getElementById('coffee').value = "house espresso";
    }
}

//0

function drinkdisplay(){ //drdisplay
    var z = document.getElementById('display')
    if(document.getElementById('espresso').checked){
        z.innerHTML = 'espresso';   
    }
    else if(document.getElementById('americano').checked){
        z.innerHTML = 'americano';
    }
    else if(document.getElementById('cappuccino').checked){
        z.innerHTML = 'cappucino';
    }
    else if(document.getElementById('pour-over').checked){
        z.innerHTML = 'pour over';
    }
    else if(document.getElementById('chemex').checked){
        z.innerHTML = 'chemex';
    }
}


//1
function coffeedisplay(obj){ //cfdisplay
    var y = document.getElementById("display1");
    var value = obj.value;
    if (value === 'house espresso'){
        y.innerHTML =  "house espresso";
    }
    else if (value === 'guest espresso'){
        y.innerHTML =  'guest espresso';
    }
    else if (value === 'single origin'){
        y.innerHTML =  'single origin';
    }
    else if (value === 'house blend'){
        y.innerHTML = 'house blend';
    }
}
//2
function sizedisplay(obj){  //szdisplay
    var x = document.getElementById("display2");
    var value = obj.value;
    if (value === 'Small'){
        x.innerHTML = "Small";
    }
    else if (value === 'Medium'){
        x.innerHTML = 'Medium';
    }
    else if (value === 'Large'){
        x.innerHTML = 'Large';
    }
    else if (value === 'Single'){
        x.innerHTML = 'Single';
    }
    else if (value === 'Double'){
        x.innerHTML = 'Double';
    }
}

//3
function extradisplay(obj){ //exdisplay
    var y = document.getElementById("display3");
    var value = obj.value;
    if (value === '0'){
        y.innerHTML =  "no extras";
    }
    else if (value === 'cold milk'){
        y.innerHTML =  'cold milk';
    }
    else if (value === 'hot milk'){
        y.innerHTML =  'hot milk';
    }
    else if (value === 'chocolate dusting'){
        y.innerHTML = 'chocolate dusting';
    }
    else if (value === 'marshmallows'){
        y.innerHTML = 'marshmallows';
    }
    else if (value === 'whipped cream'){
        y.innerHTML = 'whipped cream';
    }
}



function price(){ // prcdisplay
    var s = document.getElementById('size').value;
    var p = document.getElementById('price');
    var ex = document.getElementById('extra').value;
    var sc = 30000;
    var sa = 25000;
    var sp = 40000;
    var price = 0;
    if(document.getElementById('espresso').checked){
        if(s === 'Single'){
            price = price + 25000;
        }
        else if(s === 'Double'){
            price = price + 50000;
        }
    }
    else if(document.getElementById('cappuccino').checked){
        if(s === 'Small'){
            price = price + sc;
        }
        else if(s === 'Medium'){
            price = price + sc*1.5;
        }
        else if(s === 'Large'){
            price = price + sc*1.5*.15;
        }
    }
    else if(document.getElementById('americano').checked){
        if(s === 'Small'){
            price = price + sa;
        }
        else if(s === 'Medium'){
            price = price + sa*1.5;
        }
        else if(s === 'Large'){
            price = price + sa*1.5*1.5;
        }
    }
    else if(document.getElementById('pour-over').checked){
        if(s === 'Small'){
            price = price + sp;
        }
        else if(s === 'Medium'){
            price = price + sp*1.5;
        }
        else if(s === 'Large'){
            price = price + sp*1.5*1.5;
        }
    }
    else if(document.getElementById('chemex').checked){
        price = price + 80000;
    }
    if(ex !== '0'){
        price = price + 10000;
    }
p.innerHTML =   price + 'vnd' ; 
}


