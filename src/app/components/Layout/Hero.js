import Image from 'next/image';
import Right from '../icons/right';

export default function Hero() {
    return (
        <section className='section-hero grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <article className='py-8'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold mb-4'>Taste the Joy!<span className='text-primary ml-1'> Food</span></h1>
                <p className="text-gray-600 mb-6">Experience the joy of great food with Dil Foods. From comforting classics to exciting flavors, we bring tasty moments to your table. Explore, savor, and share in the simple pleasure of deliciousness. Download Dil Foods now and let the flavors speak for themselves!</p>
                <div className='flex flex-col md:flex-row gap-4'>
                    <button type="button" className='px-8 py-3 rounded-full flex items-center gap-2 text-sm bg-primary text-white hover:bg-primary-dark transition duration-300'>
                        ORDER NOW <Right />
                    </button> 
                    <button type="button" className='px-8 py-3 rounded-full flex gap-2 text-sm text-gray-600 font-semibold hover:underline transition duration-300'>
                        Learn more <Right />
                    </button>
                </div>
            </article>

            <div className='relative'>
            <Image src="/noodels.jpg" alt="noodles" layout="responsive" width={600} height={400} objectFit="cover" className="rounded-md" />

            </div>
        </section>
    );
}
