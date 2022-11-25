
import CategoryItem from "../Category-item/Category-item.component";
import "./directory.styles.scss"

const Directory=({Categories})=>{
return(

    <div className="Directory-Container">
    { Categories.map((category)=>(
  
         <CategoryItem key={category.id} category={category} /> 
         ))}
 
         
 
     
       </div>
)
}
export default Directory