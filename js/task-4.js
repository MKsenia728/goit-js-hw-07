console.log('Task - 4');

function getShippingCost(country) {
  switch (country) {
    case 'China' : return `Shipping to ${country} will cost 100 credits`;
    case 'Chile' : return `Shipping to ${country} will cost 250 credits`;
    case 'Australia' : return `Shipping to ${country} will cost 170 credits`;
    case 'Jamaica' : return `Shipping to ${country} will cost 120 credits`;
    default : return 'Sorry, there is no delivery to your country';
  }
}

// variant 2

// function getShippingCost(country) {
//   let prise;
//   switch (country) {
//     case 'China' : prise =  100; break;
//     case 'Chile' : prise = 250; break;
//     case 'Australia' : prise = 170; break;
//     case 'Jamaica' :  prise = 120; break;
//     default :  prise = -1;
//   }
//     return (prise < 0) ? 'Sorry, there is no delivery to your country' : `Shipping to ${country} will cost ${prise} credits`;
// }

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"