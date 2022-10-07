const phone = {
    color: 'black', 
    price: 40000, 
    model: 'htc100', 
    ram: '4GB', 
    incluren: true
};
for( const phones in phone){
    console.log(phones,phone[phones]);
}
