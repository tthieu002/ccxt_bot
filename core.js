function checkCandle() {

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


module.exports.isRedCandle = isRedCandle;
module.exports.isGreenCandle = isGreenCandle;
module.exports.getBodyCandle = getBodyCandle;
module.exports.getUpperShadow = getUpperShadow;
module.exports.getBelowShadow = getBelowShadow;