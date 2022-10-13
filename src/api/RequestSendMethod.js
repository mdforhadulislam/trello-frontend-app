export const getRequestSend= async(url:string,header:object)=>{
    const response = await fetch(url,{
       method: 'GET',
        headers:{
          'Content-Type': 'application/json',
            ...header
        }
      })
      const data = await response.json()

      return {data,status:response.status}

}

export const postRequestSend = async (url,header,dataSend)=>{
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
           ...header
        },
        body: JSON.stringify(dataSend)
    })
    const data = await response.json()
    return {data,status:response.status}
}

export const putRequestSend = async(url,header,dataSend)=>{
    const response = await fetch(url,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
           ...header
        },
        body: JSON.stringify(dataSend)
    })
    const data = await response.json()
    return {data,status:response.status}
}

export const deleteRequestSend = async(url,header)=>{
    const response = await fetch(url,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
          ...header
        }
    })
    const data = await response.json()
    return {data,status:response.status}
}