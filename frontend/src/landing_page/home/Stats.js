import React from 'react';
function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2'>Trust with confidence</h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <h5>Customer-first always</h5>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    &nbsp;
                    <h5>No spam or gimmicks</h5>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    &nbsp;
                    <h5>The Zerodha universe</h5>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    &nbsp;
                    <h5>Do better with money</h5>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                    
                </div>
                <div className='col-6 p-5'>
                    <img src='images/ecosystem.png' style={{width:"100%"}}/>
                    <div className='text-center mt-5'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href=''  style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;