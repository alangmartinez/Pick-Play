const products = [
    {
        id: 1,
        title: 'FIFA 22',
        img: './images/PSGames/fifa22.jpeg',
        price: '$49,99',
        stock: 12
    },
    {
        id: 2,
        title: 'Red Dead Redemption 2',
        img: './images/ComputerGames/read-dead-redemption-ll.jpeg',
        price: '$42,99',
        stock: 8
    },
    {
        id: 3,
        title: 'Crysis 3 Remastered',
        img: './images/ComputerGames/crysis-3-remastered.jpeg',
        price: '$54,99',
        stock: 17
    },
    {
        id: 4,
        title: 'NBA 2K22',
        img: './images/PSGames/NBA-2K22.jpeg',
        price: '$47,99',
        stock: 10
    }
];

export const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}