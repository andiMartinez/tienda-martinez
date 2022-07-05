const products = [
    { id: '01', name: 'LANDING PAGE', price: 100, description: "TU LANDING", img: 'https://picsum.photos/200', stock: 5, min:1 },
    { id: '02', name: 'E_COMMERCE', price: 200, description: "TU ECOMERCE", img: 'https://picsum.photos/201', stock: 6, min:1},
    { id: '03', name: 'PHOTO PORTFOLIO', price: 100, description: "TU PORTFOLIO", img: 'https://picsum.photos/202', stock: 5, min:1 },
    { id: '04', name: 'E_COMMERCE WITH BACKEND', price: 200, description: "TU BACKEND", img: 'https://picsum.photos/203', stock: 6, min:1 },
    { id: '05', name: 'GAME', price: 500, description: "TU GAME", img: 'https://picsum.photos/204', stock: 5, min:1},
    { id: '06', name: 'APP', price: 400, description: "TU app", img: 'https://picsum.photos/205', stock: 6, min:1},
]

export const getData = new Promise((resolve, reject) => {

    let condition = true

    setTimeout(() => {
        if (condition) {
            resolve(products)
        } else {
            reject('holi')
        }
    }, 2000)
})




