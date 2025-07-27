export const fethcing = async (URL:string)=>{
    const fetchedData = await fetch(URL)
    const res = await fetchedData.json()
    return res
}