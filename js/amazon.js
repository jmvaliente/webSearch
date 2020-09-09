require("dotenv").config();

const commonParameters = {
    'AccessKey' : process.env.ID,
    'SecretKey' : process.env.SECRET,
    'PartnerTag' : process.env.COUNT, // yourtag-20
    'PartnerType': 'Associates', // Optional. Default value is Associates.
    'Marketplace': 'www.amazon.com' // Optional. Default value is US.
};
 
const requestParameters = {
    'ASIN' : 'B07H65KP63',
    'Resources' : [
        'ItemInfo.Title',
        'Offers.Listings.Price',
        'VariationSummary.VariationDimension'
      ]
};
 

module.exports = {commonParameters, requestParameters}