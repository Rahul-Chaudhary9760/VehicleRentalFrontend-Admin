import twittericon from '../assets/twittericon.svg';
import instaicon from '../assets/youtubeicon.svg';


export default function Footer () {
    return (
        <>  <div className='px-10 bg-black'>

            <div className=' flex justify-between py-4'>
                <div className='text-White text-3xl'>
                    carzy
                </div>
                <div className='flex flex-row text-White space-x-4'>
                    <p>Rent</p>
                    <p>About us</p>
                    <p>Contact</p>

                </div>
                <div className='flex flex-row space-x-4'>
                    <img src={twittericon} alt="" />
                    <img src={instaicon} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}; 