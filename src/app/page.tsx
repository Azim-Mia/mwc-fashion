//import Image from "next/image";
import Slider from '@/components/Slider';
import ProductList  from '@/components/ProductList'
import CategoryList from  '@/components/CategoryList'
export default function HomePage() {
  return (<>
  <div><Slider /></div>
  <div className="mt-10 xl:mt-24 px-4 bg-gray-light sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  <h1 className="text-3xl p-2">Features Products</h1>
  <ProductList />
  </div>
    <div className="mt-10 xl:mt-24 px-4 bg-gray-light sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  <h1 className="text-3xl p-2">Category Products</h1>
  <CategoryList />
  </div>
  <div className="mt-10 xl:mt-24 px-4 bg-gray-light sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  <h1 className="text-3xl p-2">New Products</h1>
<ProductList />
  </div>
  </>);
}
