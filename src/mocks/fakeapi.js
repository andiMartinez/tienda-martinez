/* const productss = [
    { id: 1, name: 'LANDING PAGE', categories:'web', price: 100, description: "TU LANDING", img: 'https://picsum.photos/250/350', stock: 5, min: 1 },
    { id: 2, name: 'E_COMMERCE',categories:'web', price: 200, description: "TU ECOMERCE", img: 'https://picsum.photos/250/350', stock: 6, min: 1 },
    { id: 3, name: 'PHOTO PORTFOLIO', categories:'web' ,price: 100, description: "TU PORTFOLIO", img: 'https://picsum.photos/250/350', stock: 5, min: 1 },
    { id: 4, name: 'E_COMMERCE WITH BACKEND',categories:'3d' ,price: 200, description: "TU BACKEND", img: 'https://picsum.photos/250/350', stock: 6, min: 1 },
    { id: 5, name: 'GAME', price: 500,categories:'mobile', description: "TU GAME", img: 'https://picsum.photos/250/350', stock: 5, min: 1 },
    { id: 6, name: 'APP', price: 400,categories:'mobile' ,description: "TU app", img: 'https://picsum.photos/250/350', stock: 6, min: 1 },
] */

export const products = [
  {
    id: 1,
    name: "Simple Landing Page",
    categories: "web",
    price: "100",
    stock: 10,
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Web", href: "#" },
      { id: 2, name: "Landing", href: "#" },
    ],
    images: [
      {
        src: "https://img.freepik.com/psd-gratis/smartphone-3d-mensajeria-texto_23-2148938938.jpg?w=740",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.freepik.com/free-vector/flat-design-minimal-technology-landing-page_23-2149138461.jpg?t=st=1657229758~exp=1657230358~hmac=09988e617e76e10811440087305297803459fef824b8e42a31e21246c57a8edc&w=1380",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.freepik.com/free-psd/landing-page-template-businesswoman_23-2148782725.jpg?t=st=1657231338~exp=1657231938~hmac=804a314a20746ca8672657afadaf771ede3e26ff299cc7734cd1c66ca416a3b7&w=1380",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://josefacchin.com/wp-content/uploads/2016/02/landing-page-wordpress.png",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    highlights: [
      "Totalmente responsive",
      "Vas a vender una banda",
      "Garantia asegurada",
      "Envio gratuito",
    ],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    name: "Custom Portfolio",
    categories: "web",
    price: "150",
    stock: 10,
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Web", href: "#" },
      { id: 2, name: "Landing", href: "#" },
    ],
    images: [
      {
        src: "https://img.freepik.com/psd-gratis/portatil-3d-grafico_23-2148938936.jpg?w=740",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.freepik.com/free-vector/travel-sale-landing-page-design_52683-46355.jpg?t=st=1657229758~exp=1657230358~hmac=caec25f292464490501c1eb6e4733d97e22b80dd413ac7fbd1e9bca7879b11e3&w=1380",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    highlights: [
      "Totalmente responsive",
      "Vas a vender una banda",
      "Garantia asegurada",
      "Envio gratuito",
    ],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    name: "Simple 3D Object",
    categories: "3d",
    price: "50",
    stock: 10,
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Objeto", href: "#" },
      { id: 2, name: "3d", href: "#" },
    ],
    images: [
      {
        src: "https://img.freepik.com/psd-gratis/altavoz-megafono-3d_23-2148938921.jpg?t=st=1657230069~exp=1657230669~hmac=2db7927f05f5412583d53a270bfee17f12576ad11d8d64ca354fead03a4bd443&w=826",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.freepik.com/psd-gratis/cohete-espacial-3d-humo_23-2148938939.jpg?t=st=1657230069~exp=1657230669~hmac=0f2ee75b1101412d624fa54202f9b702c79ffaecefbcc85ec49d7156cc47b497&w=826",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.freepik.com/psd-gratis/personaje-femenino-3d-que-trabaja-computadora-portatil-mientras-sentado-silla_23-2148938889.jpg?t=st=1657230069~exp=1657230669~hmac=611a845f7ed726c0c379a1d53b9dfc64d621d1188206ceecf5e018fe9374613d&w=826",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.freepik.com/fotos-premium/escena-minima-gafas-sol-auriculares-escultura-cabeza-humana-concepto-musica-renderizado-3d_224530-1859.jpg?w=1380",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    highlights: [
      "Totalmente responsive",
      "Vas a vender una banda",
      "Garantia asegurada",
      "Envio gratuito",
    ],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    name: "Custom 3D Ambient",
    categories: "3d",
    price: "200",
    stock: 10,
    href: "#",
    breadcrumbs: [
      { id: 1, name: "3d", href: "#" },
      { id: 2, name: "ambient", href: "#" },
    ],
    images: [
      {
        src: "https://img.freepik.com/free-psd/3d-rendering-delicious-beverage_23-2149108539.jpg?t=st=1657233714~exp=1657234314~hmac=305a4bee1b7df8c60c187d41efe84cb6b7b41dfc753bfc2874ecb18943cccb77&w=826",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.freepik.com/free-psd/3d-rendering-delicious-cheese-burger_23-2149108546.jpg?t=st=1657233714~exp=1657234314~hmac=c202a5b568df93d0e5db83a2e776550cd155cdf2f66d617e62875d90c3d3b902&w=826",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.freepik.com/free-psd/3d-rendering-delicious-french-fries_23-2149108544.jpg?t=st=1657233714~exp=1657234314~hmac=4e1a258a4a3d8af67a211373a05fe0a13e82b037e35635d2433e495576b7501a&w=826",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.freepik.com/free-psd/3d-rendering-delicious-cupcake_23-2149108541.jpg?t=st=1657233714~exp=1657234314~hmac=b54ab4575fff3a9c0c2bb131619831a669226f7204587e80ee5aafafd0f020aa&w=826",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    highlights: [
      "Totalmente responsive",
      "Vas a vender una banda",
      "Garantia asegurada",
      "Envio gratuito",
    ],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    name: "Simple Mobile App",
    categories: "mobile",
    price: "192",
    stock: 10,
    href: "#",
    breadcrumbs: [
      { id: 1, name: "mobile", href: "#" },
      { id: 2, name: "app", href: "#" },
    ],
    images: [
      {
        src: "https://img.freepik.com/psd-gratis/maqueta-interfaz-pantalla-telefono_23-2148963427.jpg?t=st=1657230450~exp=1657231050~hmac=8a6592150c9596506dc85f87eca63742b66f621163e71f67b9848922e909a37a&w=826",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    highlights: [
      "Totalmente responsive",
      "Vas a vender una banda",
      "Garantia asegurada",
      "Envio gratuito",
    ],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,
    name: "Custom Mobile App",
    categories: "mobile",
    price: "250",
    stock: 10,
    href: "#",
    breadcrumbs: [
      { id: 1, name: "mobile", href: "#" },
      { id: 2, name: "app", href: "#" },
    ],
    images: [
      {
        src: "https://img.freepik.com/free-psd/mobile-phone-screen-mockup-design_53876-57923.jpg?t=st=1657234156~exp=1657234756~hmac=9829cea390577ec4145eef1e4e70c0eba2f49cd2d26641a1fcd5438ac80ee009&w=826",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    highlights: [
      "Totalmente responsive",
      "Vas a vender una banda",
      "Garantia asegurada",
      "Envio gratuito",
    ],
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productsFilter = products.filter(
      (prod) => prod.categories === categoryId
    );
    setTimeout(() => {
      categoryId ? resolve(productsFilter) : resolve(products);
    }, 1);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const productFind = products.find((prod) => prod.id === Number(id));
    setTimeout(() => {
      resolve(productFind);
    }, 1);
  });
};

export const reviews = { href: "#", average: 4, totalCount: 117 };
