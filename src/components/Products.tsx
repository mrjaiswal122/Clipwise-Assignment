

export default function Products() {
  return (
    
    <section className="w-full  mt-[52px]">
    <h1 className="w-full text-[46px] text-[#31546D] font-bold flex justify-center items-center">All products</h1>
    {/* filters */}
    <div className="mt-[50px] ml-[50px] flex gap-20">
        <span className="text-base text-[#9AB0C0] font-bold flex gap-[10px] items-center">Filter:
            <span className="text-[#31546D]">All Products</span>
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z" fill="#31546D"/></svg>
        </span>
        <span className="text-base text-[#9AB0C0] font-bold flex gap-[10px] items-center">Sort:
            <span className="text-[#31546D]">Best Selling</span>
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z" fill="#31546D"/></svg>
        </span>
    </div>
    <div className="mt-[50px] ml-[50px] flex flex-wrap gap-4">
        {[...Array(8)].map((_,index)=>(
           <ProductsCard key={index}/>
        ))}
    </div>
 
    </section>
  )
}

function ProductsCard(){
return(
    <>
    <div className="w-[322px] h-[412px] rounded-3xl  flex flex-col items-center border hover:shadow-lg">
    <img className="mt-12" src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvPk-RVEKsKia~4MWGPIdnJk1HGBcShriplX4cD~6azlzZ7Pd5XutQc9D93KUooMXSV~iR2KSlJd0nlykhAPEqmhdZZEQasy~dpEsEwflj6A2nC6UvsWWyLwzQJQW8MG6tWvLcaqPtjq9M6IM3CN2UUqNxKEShZXBm~gAdRbS57CwdbEtFH~GbDEbZfhb9KoyZZ7Zwz4Lii7K3-2z0mzIdSgFTXtl3TCgFMhzcFVZYOFo6XuCLlXVa7CyivUqx8pNBXzDWHG6O-LS7~J1ifOMnLvt-ncst~nxTQsutpv6BSmOz7PkOX8hWFkaNuv240Fk8lszaz9BUz5Pll-xkRJ0A__" width={198} height={198} alt="productImg" />
    <h2 className="text-xl">Crystal Agate Phone Grip </h2>
    <h3 className="text-xl text-[#317189] font-bold">18.99$</h3>
    <button className="text-sm font-bold w-[180px] h-[56px] hover:text-white text-[#77dffa] bg-gradient-to-r to-[#6FB4FF] from-[#75CCEB]  hover:shadow-2xl mt-6 rounded-xl flex justify-center items-center "><div className="w-[177px]  h-[53px] bg-white hover:bg-transparent flex items-center justify-center rounded-xl ">BUY NOW</div></button>
    </div>
    </>
)
}