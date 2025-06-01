import Basket from "@/components/Basket";

import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-12">
        <Basket />
        <Product />
      </div>
    </div>
  );
}
