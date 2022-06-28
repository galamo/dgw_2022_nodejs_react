import axios from "axios";
import { useEffect, useState } from "react";
import HeaderApp from "../../ui-components/headerApp";
import Product from "../../ui-components/product";
import WithLoading from "../../ui-components/withLoading";

export default function ProductsPage() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getProducts() {
            const result = await axios.get("http://localhost:3500/products?apiKey=1234")
            setData(result?.data?.products)
        }
        getProducts();
    }, [])

    return <div>
        <HeaderApp text={"Products"} color={"pink"} />
        <WithLoading isLoading={Boolean(!data.length)}>
            <ProductsList data={data} />
        </WithLoading>
    </div>
}

function ProductsList(props: { data: Array<any> }) {
    return <div style={{ width: "50%", margin: "auto auto" }}>
        {props.data.map((p: any) => { return <Product {...p} /> })}
    </div>
}