import React, { useRef } from 'react';
import './styles.css';
import audioFile from '../assets/Kolezza Podcast.mp3'; 

const Podcast = () => {
    const audioRef = useRef(null); 

    return (
        <div className='container'>
            <div className='live'>
                <img src="/images/micc.png" alt='Microphone' className='mic-png'/>
                <h1>K<span className='highlight'>o</span>lezza P<span className='highlight'>o</span>dcast</h1>
                <div className='prompt'>LIVE</div>
            </div>
            <div className='content'>
            <h2>How Cultural Men Are Attracted to Independent Women but Seek Traditional Relationships</h2>
            <p>Cultural men are often drawn to independent women for their strength and ambition. 
                However, many still desire traditional relationship dynamics, influenced by cultural expectations. 
                This can create a tension between admiration for independence and the longing for conventional roles. 
                Listen to our podcast to find out more about this</p>
                <audio ref={audioRef} controls>
                    <source src={audioFile} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div>
                <img src="/images/coming.png" alt='Coming soon' className='comingsoon-png'/>
            </div>
        </div>
    );
}

export default Podcast;