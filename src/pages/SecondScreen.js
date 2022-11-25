import React, { useRef } from 'react'

export default function SecondScreen() {
  const videoRef = useRef()
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h2 style={{ margin: '20px 0' }}>Second Screen</h2>
      <video src="https://rr2---sn-npoe7nsr.googlevideo.com/videoplayback?expire=1669392485&ei=BZSAY_GhLePYxN8P2uaT0As&ip=212.75.218.126&id=o-AIdDoy1Kv_03OO5k3vH4tH3TJ90Tbh7XnrywhszRUf64&itag=18&source=youtube&requiressl=yes&spc=SFxXNpMfHoH67sHvqRnSaCNjm43Qn-o&vprv=1&mime=video%2Fmp4&ns=xiNOfoA29hs21QZxSPVmxdQJ&cnr=14&ratebypass=yes&dur=2101.707&lmt=1664989080883644&fexp=24001373,24007246&c=WEB&txp=4538434&n=wCjxt1xASyRa6A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMe9uBkwmj7eb8xldTONt2CMIH3pH26knpKve33lFGYvAiEAki98jACQj99l3V-Fw4ck4wWjBzKJZr089iwaMzRfHMw%3D&rm=sn-xapbiu-3xws7e&req_id=5e6122a67354a3ee&cmsv=e&redirect_counter=2&cm2rm=sn-n8vr7ee&cms_redirect=yes&mh=x0&mip=2402:3a80:d4b:4dd3:24b6:33b8:9be8:9547&mm=34&mn=sn-npoe7nsr&ms=ltu&mt=1669370463&mv=m&mvi=2&pl=44&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgd2PFLlqRrux0Ud6haopB12eLyu5z7pujBE5mdqwFujwCIQCB8mgiZ-ry9J7Z9DnBD5ul_V2dsSbSstu-uk-MRYoENg%3D%3D" ref={videoRef}></video>
      <div>
        <button onClick={() => {
          if (videoRef.current.currentTime - 5 >= 0) {
            videoRef.current.currentTime -= 5
          } else {
            videoRef.current = 0;
          }
        }}>5 sec Back</button>
        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>
        <button onClick={() => {
          if (videoRef.current.currentTime + 5 >= 0) {
            videoRef.current.currentTime += 5
          }
        }}>5 sec Forward</button>
      </div>
    </div>
  )
}
