import CTAPrimary from '../ui/CTAPrimary';
import CTASecondary from '../ui/CTASecondary';
import ProductCard from '../common/ProductCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const Hero = () => {
    return (
        <div className='bg-zinc-950 px-8 py-8 rounded-lg shadow-2xl flex justify-center gap-64'>
            <div>
                <div className='p-4 tracking-widest w-[500px]'>
                    <h1 className='text-4xl'><span className='text-sky-500'>Discover. </span><span className='text-zinc-300'>Trade. </span><span className='text-indigo-500'>Thrive.</span></h1>
                </div>
                <div className='p-4 tracking-tighter w-[600px]'>
                    <p className='text-2xl text-zinc-300'>MarketplaceX connects buyers and sellers through a sleek, modern interface built for speed, trust, and growth.</p>
                </div>
                <div className='p-4 flex gap-8'>
                    <CTAPrimary label='Browse Listings' />
                    <CTASecondary label='Join the community' />
                </div>
            </div>
            <div>
                <div className='w-[250px]'>
                    <Carousel className=''>
                        <CarouselContent>
                            <CarouselItem className='p-4'>
                                <ProductCard />
                            </CarouselItem>
                            <CarouselItem className='p-4'>
                                <ProductCard />
                            </CarouselItem>
                            <CarouselItem className='p-4'>
                                <ProductCard />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Hero;