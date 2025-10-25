import './css/style.css'
function Style() {
    return (
        <>
            <h1 className='heading'>Hi Everyone Today i will be style my page using extarnal file in react</h1>
            <div className='Container'>
            <div className='user-card'>
                <div>
                    <img className='img-size' src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" />
                </div>
                <div className='text'>
                    <h3>Laaluu kaana</h3>
                    <p>Chaprii </p>
                </div>
                </div>

                <div className='user-card'>
                <div>
                    <img className='img-size' src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" />
                </div>
                <div className='text'>
                    <h3>Laaluu kaana</h3>
                    <p>Chaprii </p>
                </div>
                </div>
            </div>
        </>
    )
}
export default Style;