import React from 'react';
import { Link } from 'react-router-dom';

// Sample data
const products = [
    {
        id: 1,
        name: 'Nissan Figaro',
        href: '#',
        imageSrc: 'https://www.carandclassic.com/magazine/app/uploads/2023/05/2-nissan-figaro-front-765x510.jpg',
        imageAlt: "The Figaro FK10 was a 2-door coupe just for yourself that was exhibited at 1989 Tokyo Motor Show and received favorable reviews. It was rolled out in 1991 with the limited volume of 20,000 units.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Mazda RX-7',
        href: '#',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/1994_Mazda_RX-7_R2_in_Vintage_Red%2C_front_left_%28Lime_Rock%29.jpg/1200px-1994_Mazda_RX-7_R2_in_Vintage_Red%2C_front_left_%28Lime_Rock%29.jpg',
        imageAlt: "The Mazda RX-7 is a renowned sports car that features a rotary engine and has been admired for its lightweight and agile handling.",
        price: '$35',
        color: 'Black',
    },
];

export default function CarList() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Cars</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                    
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <a href="/cars/details/:carId"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
