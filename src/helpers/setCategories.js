var setCategories = {
  //cooper s - within7dys is the "Boucher" check

categories (data) {  

    //console.log("data: ",  data );
    
   data.map( item => {
    console.log("setCategories.categories: ", item.category ) 
   }) 
    //
    var finalArr = ["a", "b", "c"]

    finalArr.map( item => {
        console.log("finalArr: ", item) 
       })
        
    return finalArr
    }   

}//end setCategories

export default setCategories