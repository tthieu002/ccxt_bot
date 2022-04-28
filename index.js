const ccxt = require("ccxt");

const candle = require("./core/candle");
const constant = require("./config/constant");
const binanceusdm = new ccxt.binanceusdm({
        apiKey: '3b8a1940a3831a1bb88230ff25bbe0155369fbeae36b79e7a68ebb0afded6e7c',
        secret: '330faf044231d614a03bb85bc3e1ac6b1217c3dc6d8b0e6999f9f024cca25ad0',
    }
);
binanceusdm.setSandboxMode(true);

async function printBalance() {
    const balance = await binanceusdm.fetchBalance();
    console.log(balance);
}

async function main() {

    const prices = await binanceusdm.fetchOHLCV('NEAR/USDT', "15m", undefined, 2);
    const bPrices = prices.map(prices => {
        return candle.structCandle(prices);
    });
    bPrices.forEach(element => {
        console.log(element);
        console.log(candle.isDojiCandle(element));
    });
    // console.log(prices);
}

main();
//printBalance();