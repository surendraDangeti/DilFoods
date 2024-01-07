import Image from 'next/image';

export default function MenuItem() {
    return (
        <div className='group bg-gray-300 p-4 rounded-lg text-center cursor-pointer hover:bg-gray-100 shadow-md hover:shadow-black/25 hover:shodow-2xl'>
            <Image src={"/pilaf-with-carrots-saffron.jpg"} layout="responsive" width={1200} height={100} alt='Golden Carrot Saffron Pilaf' />
            <h4 className='font-semibold text-xl md:text-1xl lg:text-1xl mt-4'>Golden Carrot Saffron Pilaf</h4>
            <p className='text-sm text-gray-600 mt-2'>Elevate your dining experience with our Golden Carrot Saffron Pilaf—a symphony of flavors where the sweetness of carrots meets the rich aroma of saffron. Savor the perfect blend of textures and fragrances in every delightful bite.</p>
            <button className='bg-primary text-white px-6 py-2 rounded-full mt-4 mb-2'>Add to cart ₹ 180</button>
        </div>
    );
}
