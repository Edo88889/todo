import {useEffect, useState} from "react";
import {URL, URLChild} from "../../utils/constants";
import './style.css'
import DrawSearch from "./DrawSearch";
const Index = () => {
    const [data, setData] = useState([])
    const [dataChild, setDataChild] = useState([])
    const [search, setSearch] = useState('')
    console.log(dataChild)


    const gettingData  = async() => {
        const resp = await fetch(URL)
        const result = await resp.json()
        setData(result)
    }
    const gettingDataChild  = async() => {
        const resp = await fetch(`${URLChild}${search}`)
        const result = await resp.json()
        setDataChild(result)
    }
    useEffect(() => {
        gettingData()
        gettingDataChild()
    },[search])

    return(

        <>
            <input type='text' value={search} onChange={(e) => {
                setSearch(e.target.value)
            }}/>

                <>

                {data?.map(({name,timezones,demonyms,flags, id}) => (
                    <>
                        <div key={id}>
                            <p>{name.common}</p>
                            <img className='img' src={flags.svg} alt='img'/>
                        </div>
                    </>
                ))}
                    <DrawSearch dataChild={dataChild}/>
                </>
        </>
    )



}



export default Index;