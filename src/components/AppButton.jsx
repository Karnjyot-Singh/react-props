import style from './AppButton.module.css'

const AppButton = () => {
    const textButton = "LEGGi DI PIU'"
    return(
        <button className={style.button}>
            {textButton}
        </button>
    )
}


export default AppButton