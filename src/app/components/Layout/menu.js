import Image from 'next/image';
import MenuItem from '../menu/menuItem';

export default function HomeMenu() {
    return (
        <div className="text-center">
            <div className="mb-8">
                <h3 className="uppercase text-gray-600 font-semibold text-lg md:text-xl lg:text-2xl">Check out</h3>
                <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl italic">Menu</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {/* <div className='bg-gray-300 p-4 rounded-lg text-center'>
                    <Image src={"/pilaf-with-carrots-saffron.jpg"} layout="responsive" width={1200} height={800} alt='Golden Carrot Saffron Pilaf' />
                    <h4 className='font-semibold text-xl lg:text-1xl xl:text-1xl mt-4'>Golden Carrot Saffron Pilaf</h4>
                    <p className='text-sm text-gray-600 mt-2'>Elevate your dining experience with our Golden Carrot Saffron Pilaf—a symphony of flavors where the sweetness of carrots meets the rich aroma of saffron. Savor the perfect blend of textures and fragrances in every delightful bite.</p>
                    <button className='bg-primary text-white px-6 py-2 rounded-full mt-4 mb-2'>Add to cart ₹ 180</button>
                </div> */}
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    );
}
