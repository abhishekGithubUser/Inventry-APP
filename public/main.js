

function deleteProduct(id){
    const result = confirm("Do you sure want to delete ?")

    if(result){
        fetch('/delete-product/'+id , {
            method:'POST'
        }).then((res)=>{
            if(res.ok){
                location.reload()
            }
        })
    }
}