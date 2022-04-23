let data = 
[
{
    product: 'Computer',
    price: '250'
},
{
    product: 'Phone',
    price: '150'
},
{
    product: 'Piano',
    price: '200'
},
{ 
    product: 'Mate',
    price: '50'
},
{
    product: 'Screen',
    price: '100'
},
{ 
    product: 'Headphones',
    price: '25'
}
];


const info = document.querySelector('#info');

let details = data.map(function(item) {
    return (
        '<div>' + item.product + ' ' + 'is ' + item.price + ' USD' + '</div>'
    )
})

info.innerHTML = details.join('\n');
