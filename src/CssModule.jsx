// import style from './css/CssModule.module.css'
function CssModule() {
    return (
        <div className={style.body}>
            <h1 className={style.heading}>Ye sahi ki aatma ke baare me hai</h1>
            <div className={style.card}>
                <img className={style.img} src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA5L3NyLWltYWdlLTE4MDkyMDI1LXRudC1zLTI2NC5qcGc.jpg" alt="Sydney Sweeney" />
                <div className={style.text}>
                    <h3>Ghost Kela</h3>
                    <p>Aatma hai </p>
                </div>
            </div>
        </div>
    )
}

export default CssModule;