// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

getProfit = (prices)=>{
    let profit = 0,buy = prices[0]

    for(let i = 0; i < prices.length ; i++){
        let sell = prices[i];
       
        if(buy > sell) buy = sell
         if(sell - buy > profit )  profit = sell - buy
       
    }
    return profit; 
}

console.log(getProfit([70,1,69,3,6,4]))