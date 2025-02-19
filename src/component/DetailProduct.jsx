import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const PRODUCTS = [{
    id: "PRD01",
    name: "coca cola",
},
{
    id: "PRD02",
    name: "pepsi",
},
{
    id: "PRD03",
    name: "7up",
},
{
    id: "PRD04",
    name: "Sting",
},
]

const DetailProduct = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        const product = PRODUCTS?.find((prd) => prd?.id === id);
        if (product) setDetail(product);
    }, [])

    return (
        <div>
            <h1>DetailProduct</h1>
            {detail && <h2> {detail?.name}</h2>}
        </div >
    )
}

export default DetailProduct