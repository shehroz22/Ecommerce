import "../Category-item/Category-item.scss"

const CategoryItem=({category})=>{


    const{title,imageUrl}=category
return(


    <div  className="Category-Container"   >
    <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
     
   
    
   
           <div className="Category-Box-Container" >
         <h2>{title}</h2>
         <p>ShopNow</p>
             
           </div>
               
             </div>


)




}



export default CategoryItem