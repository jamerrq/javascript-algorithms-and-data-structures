let currencies = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER",
                  "DIME", "NICKEL", "PENNY"];
let values     = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];


function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let chtmp  = change;
    let org_arr = [...cid];
    cid.sort((a, b) => {
        return currencies.indexOf(a[0]) - currencies.indexOf(b[0]);
    })
    let index = 0;
    let obj = {
        status: undefined,
        change: [],
    };
    while(change && index < cid.length){
        let tickets = parseInt(Math.min(change, cid[index][1]) / values[index]);
        if(tickets * values[index] <= cid[index][1])
        {
            change -= tickets * values[index];
            change = Math.floor(change * 100 + 0.05) / 100;
        }
        if(tickets){
            obj["status"] = "OPEN";
            obj.change.push([currencies[index], tickets * values[index]])
        }
        index += 1;
    }
    if(change >= 0.01){
        console.log(change);
        return {
            "status": "INSUFFICIENT_FUNDS",
            "change": [],
        };
    }else{
        let suma_total = cid.reduce(
            (acc, value, index) => acc + value[1], 0
        );
        if(suma_total == chtmp){
            return {
                "status": "CLOSED",
                "change": org_arr,
            };
        }
        return obj;
    }
}


console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 1.01]
        , ["NICKEL", 2.05]
        , ["DIME", 3.1]
        , ["QUARTER", 4.25]
        , ["ONE", 90]
        , ["FIVE", 55]
        , ["TEN", 20]
        , ["TWENTY", 60]
        , ["ONE HUNDRED", 100]
    ])
);
