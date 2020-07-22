const htmls = {
    main : `
        <label><h3>Please enter your order number</h3></label>
        <p>Try empty, "111111" and "222222" for different results</p>
        <input id="orderID" type="text">
        <button class="submit" onclick="orderSubmit()">Submit</button>
        <p><a href="#" onclick="getOrderID()">I don't have an order ID</a></p>
    `,
    mailInfo : `
        <h1>Thank you!</h1>
        <p>You order information has been sent to the registered email</p>
        <p>n***v@g***l.com</p>

        <button class="back" onclick="goBack()">Go Back</button>
    `,
    showInfo : `
        <h1>Shipped</h1>
        <p><strong>Shipping Address:</strong><br>
        <strong>Abraham Lincoln</strong><br>
        1600 Pennsylvania Av NW.,<br>
        Washington, DC 20500</p>

        <p><strong>Items:</strong><br>
        5 ACTNow COVID-19 Test Kits</p>

        <p><strong>Order Total:</strong><br>
        $125.00</p>

       <button class="back" onclick="goBack()">Go Back</button> 

    `,
    mailOrderID : `
        <label><h3>Please enter your email address</h3></label>
        <input id="email" type="text">
        <button class="submit" onclick="emailOrderID()">Submit</button>      
    `,
    foundEmail : `
        <h1>Thank you!</h1>
        <p>Any information recorded under your email has been sent to your inbox.</p>

        <button class="back" onclick="goBack()">Go Back</button>    
    `
}

function goBack(){
    const content = document.getElementById("content");

    content.innerHTML = htmls.main;
}

function getOrderID(){
    const content = document.getElementById("content");

    
    content.innerHTML = htmls.mailOrderID;
}

function emailOrderID(){

    const email = document.getElementById("email").value;
    const content = document.getElementById("content");
    
    if (email === "") 
        alert("Please enter a valid email");
    else
        content.innerHTML = htmls.foundEmail;
}

function orderInfo(choise){

    const content = document.getElementById("content");

    choise === 1 ? 
        content.innerHTML = htmls.mailInfo :
        content.innerHTML = htmls.showInfo;

}

function orderSubmit() {
    const orderID = document.getElementById('orderID').value;
    switch (orderID){
        case "" : 
            alert("Please enter an Order ID");
            break;

        case "111111" :
            orderInfo(1);
            break;

        case "222222":
            orderInfo(2);
            break;

        default :
            alert("No order found under that ID");
            break;
    }
}