import style from "./AppMain.module.css"

const AppMain = () => {
    return (
        <div className="container main">
            <div className={style.row}>
                <div className="col">
                    <div className={style.card}>
                        <div className={style.cardHeader}></div>
                        <div className={`${style.cardBody} mb1`}>
                            <h3 className="title mb1">Titolo del Post</h3>
                            <p className="mb1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, autem aspernatur ab, quae provident temporibus incidunt velit laudantium repellat dolorum, ratione similique esse voluptatem vitae saepe voluptate laborum sequi veritatis.</p>
                            <button className={style.button}>LEGGI DI PIÙ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppMain;