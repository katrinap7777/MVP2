const FormatPrice = (num) => {
    const number = (num / 100).toFixed(2);
    const dollarSign = '$' + number;
    return dollarSign;

 }
 export default FormatPrice;

//  num.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });

//  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g

// function insertDecimal(num) {
//     return (num / 100).toFixed(2);
//  }

// return ('$' + num) && ((num / 100).toFixed(2));