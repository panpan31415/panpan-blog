import { useEffect, useState } from 'react'
import { SiAzurefunctions, SiMicrosoftazure } from 'react-icons/si'
import { publicIpv4} from 'public-ip';
const COUNT_VISITORS_API="https://panpan-dk-backend.azurewebsites.net/api/count-visitor"
export default function CountVisitor() {
    const [ip, setIp] = useState("");
    const [totalCount, setTotalCount]=useState(0)
    // const [lastVisitedAt, setLatVisitAt]=useState("")
    const [localVisitCount,setLocalVisitCount]=useState(0)

    useEffect(()=>{
        (async() =>{
           const ipv4 =  await publicIpv4()
           setIp(ipv4)
           console.log("client_ip:"+ipv4)
        })()
    },[])


    useEffect(()=>{
     (async()=>{
      if(!ip){
        return;
      }
    try {
      const response = await fetch(`${COUNT_VISITORS_API}?ip=${ip}`);
      const data = await response.json()
      console.log("data:",data)
      setTotalCount(data.totalCount)
      // setLatVisitAt(new Date(data.visitorInfo.lastVisitAt).toLocaleDateString())
      setLocalVisitCount(data.visitorInfo.visitCount)
    } catch (error) {
      console.log(error)
    }
     })()
    },[ip])


  return (
      <section className='visitor-count-section'>
                <p className='visitor-count-section__countLabel'>This site has been visited<span className='visitor-count-section__number'>{totalCount}</span>times in total.</p>
                <p>
                A visit is counted based on unique IP addresses, with a minimum interval of 1 minute between consecutive visits from the same IP address. This functionality demonstrates the use of Azure Functions.
               </p>
               <p>Your IP address is <span className='visitor-count-section__ip'>{ip}</span></p>
               <p>You have visited this site <span className='visitor-count-section__ip-visited'>{localVisitCount}</span> time(s), welcome!</p>
               <p style={{
                margin:"1.5rem auto",
                fontSize:"3rem"
               }}> <SiMicrosoftazure color='var(--primary-color)' /> <SiAzurefunctions color='var(--primary-color)'/> </p>
               
            </section>
  )
}
