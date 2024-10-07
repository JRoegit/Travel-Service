import JoinSkyMilesButton from '../joinSkyMilesButton'
import LoyaltyPromoImg from '/public/loyaltyPromoImage.jpg'
import Image from 'next/image'

// Clean this one up, seperate some things...
export default function LoyaltyPromo(){
    return (
        <div className=' text-neutral-900'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4 ">
                <div className="text-2xl font-bold ">
                    Turn Miles into Memories
                </div>
                <div className="flex flex-col md:flex-row bg-white rounded-md w-full border-2"> 
                    <div className=''>
                        <Image src={LoyaltyPromoImg} alt='Scenic Mountain view over bodfy of water' width={500} height={300} unoptimized className='rounded-md h-full w-full'></Image>
                    </div>
                    <div className='flex flex-col my-auto w-full p-2 md:pl-6'>
                        <WelcomeOffer></WelcomeOffer>
                        <div className='font-bold text-4xl '>
                            Your Savings Start Now.
                        </div>
                        <div className='text-2xl font-medium'>
                            Join SkyMiles today and enjoy 50,000 Points on the house.
                        </div>
                        <div className='flex flex-col-reverse md:flex-row w-fullp pt-4'>
                            <div className='flex flex-row md:flex-col gap-1 text-xs mr-auto'>
                                <div>Terms and Conditions apply.</div>
                                <div>Limited time offer.</div>
                            </div>
                            <JoinSkyMilesButton></JoinSkyMilesButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WelcomeOffer(){
    return (
        <div className='bg-green-500 px-2 py-1 rounded-full text-white font-medium w-fit'>
            Welcome Offer
        </div>
    )

}