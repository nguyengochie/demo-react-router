import React, { useEffect, useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

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

const Product = () => {
    const [searchPrams, setSearchParam] = useSearchParams();
    const key = searchPrams.get("key");
    const [inputValue, setInputvalue] = useState("");

    // set gia trị search lên URL
    const onClickSearch = () => {
        setSearchParam({ key: inputValue });
    }

    const renderProducts = () => {
        // filter theo searchValue
        return PRODUCTS?.filter((prd) => !key ? true : prd?.name?.includes(key))
            ?.map((prd) => {
                return <div key={prd.id}>
                    <h2>{`${prd.id} - ${prd.name}`}</h2>
                </div>
            })
    }

    // useEffect(()=>{
    //     //fetchAPI
    // },[key])

    return (
        <div>
            <h1>Product</h1>
            <input onChange={(e) => setInputvalue(e.target.value)} placeholder='tim kiem' />
            <button onClick={onClickSearch}>Search</button>

            {renderProducts()}
            <Outlet />
        </div>
    )
}

export default Product