let amount = document.querySelector(".inputAmount");
let ttype = document.querySelector("#transactionType");
let date = document.querySelector(".date");
let addButton = document.querySelector(".addbutton");
let table = document.querySelector("#table");
let income = document.querySelector("#income");
let expense = document.querySelector("#expense");
let balance = document.querySelector("#balance");
income.innerText=0;
expense.innerText=0;
balance.innerText=0;
addButton.addEventListener("click",()=>{
    if(amount.value==""){
        return
    }
    if(date.value ==""){
        return
    }
    if(ttype.value == "Transaction Type"){
        return
    }
    // table.innerHTML += `<tr> <td> ${amount.value} </td> <td> ${ttype.value} </td> <td> ${date.value} </td> <td><button class="btn btn-md deletebuton"><i class="fa-solid fa-trash-can"></i></button> <td> </tr>`;

    let row=document.createElement("tr");
    let tableAmount = document.createElement("td");
    let tableTtype = document.createElement("td");
    let tableDate = document.createElement("td");
    let tableAction = document.createElement("td");

    tableAmount.innerText=amount.value;
    tableTtype.innerText=ttype.value;
    tableDate.innerText=date.value;
    tableAction.innerHTML=`<button class="btn btn-md deletebuton"><i class="fa-solid fa-trash-can"></i></button>`
    row.appendChild(tableAmount);
    row.appendChild(tableTtype);
    row.appendChild(tableDate);
    row.appendChild(tableAction);
    table.appendChild(row);
    if(ttype.value == 'Income'){
        income.innerText = Number(income.innerText) + Number(amount.value);
    }else if(ttype.value =='Expense'){
        expense.innerText = Number(expense.innerText) + Number(amount.value);
    }
    balance.innerText = Number( income.innerText)-Number(expense.innerText);
    reset() 
    let Delete = document.querySelectorAll(".deletebuton");
    for (let i=0 ; i<Delete.length ;i++){
        Delete[i].addEventListener("click",()=>{
            let c=Delete[i].parentNode;
            c.parentNode.remove();
            
        })
    }
    
})

function reset() {
    amount.value='';
    ttype.value="Transaction Type";
    date.value='';
}