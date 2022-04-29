const constant = require("../config/constant");
const moment = require("moment");

function checkCandle() {

}

function structCandle(candle) {
    return {
        timestamp: moment(candle[0]).format(), // thời gian
        open: candle[1], // giá mở
        highest: candle[2], // giá trần
        low: candle[3], // giá sàn
        close: candle[4], // giá đóng
        volume: candle[5], // khối lượng mua
    };
}

// Tính biên độ
function getAmlitude(open, close) {
    return Math.abs(((close * 100) / open - 100).toFixed(2));
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

function is(candle) {
    // var percent = (candle.open / candle.close);
    // if (candle.close > candle.open) {
    //     percent = (candle.close / candle.close);
    // }
}

function isDojiCandle(candle) {
    var isDoji = false;
    var amlitude = getAmlitude(candle.open, candle.close);
    if (amlitude >= constant.Doji.min && amlitude <= constant.Doji.max) {
        isDoji = true;
    }
    return isDoji;
}

module.exports.structCandle = structCandle;
module.exports.isDojiCandle = isDojiCandle;
