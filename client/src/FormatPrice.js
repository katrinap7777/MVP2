const FormatPrice = (num) => {
    const number = (num / 100).toFixed(2);
    const dollarSign = '$' + number;
    return dollarSign;

 }
 export default FormatPrice;