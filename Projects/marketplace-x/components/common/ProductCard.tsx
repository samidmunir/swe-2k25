import Image from 'next/image';

const ProductCard = () => {
    return (
        <div className='border-red-500 border-1 w-[250px] h-[300px] mx-auto my-auto'>
            <div>
                <Image src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt='Product image' width={100} height={200} />
            </div>
            <h1 className='text-zinc-300 text-2xl'>Mens Cotton T-Shirt</h1>
        </div>
    );
}

export default ProductCard;