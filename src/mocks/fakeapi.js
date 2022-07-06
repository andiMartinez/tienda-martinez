const products = [
    { id: '01', name: 'LANDING PAGE', price: 100, description: "TU LANDING", img: 'https://picsum.photos/250/350', stock: 5, min: 1 },
    { id: '02', name: 'E_COMMERCE', price: 200, description: "TU ECOMERCE", img: 'https://picsum.photos/250/350', stock: 6, min: 1 },
    { id: '03', name: 'PHOTO PORTFOLIO', price: 100, description: "TU PORTFOLIO", img: 'https://picsum.photos/250/350', stock: 5, min: 1 },
    { id: '04', name: 'E_COMMERCE WITH BACKEND', price: 200, description: "TU BACKEND", img: 'https://picsum.photos/250/350', stock: 6, min: 1 },
    { id: '05', name: 'GAME', price: 500, description: "TU GAME", img: 'https://picsum.photos/250/350', stock: 5, min: 1 },
    { id: '06', name: 'APP', price: 400, description: "TU app", img: 'https://picsum.photos/250/350', stock: 6, min: 1 },
]

/* const product = [
    { id: '01', name: 'LANDING PAGE', price: 100, description: "TU LANDING", img: 'https://picsum.photos/200', stock: 5, min:1 },
] */

export const getProducts = new Promise((resolve, reject) => {

    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(products)
        } else {
            reject('error resolviendo la promise getProducts')
        }
    }, 2000)
})

export const product = {
    id: '01',
    name: 'Landing Page',
    price: '$192',
    stock: 10,
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Web', href: '#' },
        { id: 2, name: 'Landing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    highlights: [
        'Totalmente responsive',
        'Vas a vender una banda',
        'Garantia asegurada',
        'Envio gratuito',
    ],
    details:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
}
export const reviews = { href: '#', average: 4, totalCount: 117 }

export const getProduct = new Promise((resolve, reject) => {

    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(product)
        } else {
            reject('holi')
        }
    }, 2000)
})