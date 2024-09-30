import JoinSkyMilesButton from './joinSkyMilesButton'
import LoyaltyPromoImg from '/public/loyaltyPromoImage.jpg'
import Image from 'next/image'

// Clean this one up, seperate some things...
export default function LoyaltyPromo(){
    return (
        <div className='bg-gray-100 text-neutral-900'>
            <div className="flex flex-col max-w-screen-xl mx-auto p-4 gap-4">
                <div className="text-4xl font-bold ">
                    Turn Miles into Memories
                </div>
                <div className="flex flex-col sm:flex-row bg-white rounded-md w-full"> 
                    <div className='p-2'>
                        <Image src={LoyaltyPromoImg} alt='Scenic Mountain view over bodfy of water' width={500} height={300} unoptimized className='rounded-md'></Image>
                    </div>
                    <div className='flex flex-col my-auto w-full p-2'>
                        <WelcomeOffer></WelcomeOffer>
                        <div className='font-bold text-4xl '>
                            Your Savings Start Now.
                        </div>
                        <div className='text-2xl font-medium'>
                            Join SkyMiles today and enjoy 50,000 Points on the house.
                        </div>
                        <div className='flex flex-row w-full'>
                            <div className='flex flex-col text-xs mr-auto'>
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