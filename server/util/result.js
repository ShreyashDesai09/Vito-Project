function createResult ( error , data ) {
    if(data)
        return { status : 'success' , data : data }
    else 
        return { status : 'error' , error : error }
}

module.exports = {createResult}