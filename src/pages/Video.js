import React, { useRef,useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import "./video.css"


function Video() {
    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)
    function handdleStart(){
        if(play){
            videoRef.current.play()
            setPlay(false)
        }
        else{
            videoRef.current.pause()
            setPlay(true)
        }
    }
  return (
    <div className='Video'>
        <video 
        className='video__player'
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        >
        </video>
        {/*side bar*/}
        <VideoFooter />
    </div>
  )
}

export default Video