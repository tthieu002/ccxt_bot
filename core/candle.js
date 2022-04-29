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

//Nến Doji
function isDojiCandle(candle) {
    try {
        let isDoji = false;
        const amlitude = getAmlitude(candle.open, candle.close);
        if (amlitude >= constant.Doji.min && amlitude <= constant.Doji.max) {
            isDoji = true;
        }
        return isDoji;
    } catch (error) {

    }

}

//Nến bia mộ (Gravestone Doji)
//Doji hình bia mộ với thân nến nhỏ, bóng nến trên dài và không có bóng nến dưới. Nến này chủ yếu xuất hiện ở đỉnh của xu hướng tăng giá.
function isGravestoneDoji(candle) {
    let isGravestoneDoji = false;
    const upperShadow = getUpperShadow(candle);
    const belowShadow = getBelowShadow(candle);
    if (isDojiCandle(candle) && (belowShadow == 0) && (upperShadow > belowShadow)) {
        isGravestoneDoji = true;
    }
    return isGravestoneDoji;
}

module.exports.structCandle = structCandle;
module.exports.isDojiCandle = isDojiCandle;
