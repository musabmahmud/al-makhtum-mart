import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {

    const { productId } = useParams();

    const { products, currency, addToCart } = useContext(ShopContext);

    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState(false);

    const [size, setSize] = useState('');

    const fetchData = async () => {
        let selectedItem = products.find(p => p._id == productId);
        setProductData(selectedItem);
        setImage(selectedItem.image[0]);
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, productId]);


    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500'>
            <div className="flex gap-12 flex-col sm:flex-row">
                {/* product image */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item, index) =>
                            (
                                <img onClick={() => setImage(item)} key={index} src={item} alt={productData.name} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded" />
                            )
                            )
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img src={image} className='w-full h-auto rounded' alt={productData.name} />
                    </div>
                </div>

                {/* product info  */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt={`${productData.name} ratings`} className='w-3 5' />
                        <img src={assets.star_icon} alt={`${productData.name} ratings`} className='w-3 5' />
                        <img src={assets.star_icon} alt={`${productData.name} ratings`} className='w-3 5' />
                        <img src={assets.star_icon} alt={`${productData.name} ratings`} className='w-3 5' />
                        <img src={assets.star_dull_icon} alt={`${productData.name} ratings`} className='w-3 5' />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
                    <p className='mt-5 text-gray-500 text-justify w-4/5'>{productData.description}</p>
                    {/* sizes  */}

                    {productData.sizes ?
                        <div>
                            <div className='flex flex-col gap-4 my-8'>
                                <p>Select Size</p>
                                <div className='flex gap-2'>
                                    {productData.sizes.map((item, index) => (
                                        <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 rounded-sm ${size === item ? 'border-orange-500' : ''}`} value={item} key={index}>{item}</button>
                                    ))
                                    }
                                </div>
                            </div>
                            <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm max-w-full active:bg-gray-700'>ADD TO CART</button>
                        </div>

                        : <p className='py-8 text-gray-500'>Out of Stock...</p>
                    }
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original Product.</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
            </div>
            {/* description */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">Description</b>
                    <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
                </div>
                <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel ea minus sed necessitatibus alias quaerat illo molestias a quos voluptate inventore illum earum et unde nesciunt asperiores, nobis itaque repellendus doloremque corrupti. Exercitationem vel esse nostrum amet voluptatum quas voluptatibus nulla dolore eveniet, consectetur, dolorem placeat. Distinctio, asperiores maiores?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia nihil hic temporibus necessitatibus laboriosam? Odit id, repellat pariatur iure eveniet eum ipsum omnis quae ad sint dicta corporis tenetur perspiciatis nesciunt optio consequuntur ex quidem. Voluptates, ab recusandae quis, facere libero suscipit, deleniti consequuntur ipsam modi dicta nihil sint.</p>
                </div>
            </div>

            {/* display related products */}

            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

        </div>
    )
        :

        (<div className="flex gap-12 flex-col sm:flex-row border p-4 rounded border-gray-300 mx-auto animate-pulse">
            <div className="sm:w-1/2 rounded bg-slate-200 p-4"></div>
            <div className="sm:w-1/2 flex-1 space-y-6 py-1">
                <div className="h-40 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-20 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-20 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-40 bg-slate-200 rounded"></div>
                </div>
            </div>
        </div>)
}

export default Product