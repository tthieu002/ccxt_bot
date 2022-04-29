const constant = require("../config/constant");
const moment = require("moment");

function checkCandle() {

}

function structCandle(candle) {
    var open = candle[1];
    var close = candle[4];
    return {
        timestamp: moment(candle[0]).format(), // thời gian
        open: open, // giá mở
        highest: candle[2], // giá trần
        low: candle[3], // giá sàn
        close: close, // giá đóng
        volume: candle[5], // khối lượng mua
        amplitude: getAmlitude(open,close), // biên độ
        change: (open / close) * 100, // biến động
    };
}

// Tính biên độ
function getAmlitude(open,close){
    return ((close*100)/open - 100).toFixed(2);
}


// Kiểm tra nến là xanh hay đỏ
function isRedCandle(candle) {
    return (candle.open > candle.close) ? true : false;
}

// Kiểm tra nến là xanh hay đỏ
function isGreenCandle(candle) {
    return (candle.open < candle.close) ? true : false;
}

// Độ dài phần  thân của nến
function getBodyCandle(candle) {
    return candle.open - candle.close;
}

// Độ dài phần bóng trên
function getUpperShadow(candle) {
    return candle.highest - candle.open;
}

// Độ dài phần bóng dưới
function getBelowShadow(candle) {
    return candle.close - candle.low;
}

function getBodyPercent(candle) {
    // var percent = (candle.open / candle.close);
    // if (candle.close > candle.open) {
    //     percent = (candle.close / candle.close);
    // }
}

function isDojiCandle(candle) {
    var isDoji = false;
    return isDoji;
}


module.exports.structCandle = structCandle;
module.exports.isRedCandle = isRedCandle;
module.exports.isGreenCandle = isGreenCandle;
module.exports.getBodyCandle = getBodyCandle;
module.exports.getUpperShadow = getUpperShadow;
module.exports.getBelowShadow = getBelowShadow;
module.exports.isDojiCandle = isDojiCandle;