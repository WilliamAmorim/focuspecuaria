import "./Footer.css"
const Footer = () =>{
    return(
        <section  className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                <div className="flexColStart f-left">
                <img src="./boi.png" alt="logo" width={67} height={67}/>
                    <span  className="secondaryText">
                        Explorando a Excelência Bovina: Seu Destino Online para Adquirir e Investir em Gado de Qualidade.
                    </span>
                </div>
                <div className="flexColStart f-right">
                    <span className="primaryText">Focus Pecuária</span>
                    <span className="secondaryText">Horário de atendimento<br></br>
                                                    Seg- Sexta | 08:00 às 18:00</span>
                    <div className="flexCenter f-menu">
                        <span>Privacidade</span>
                        <span>Dúvidas</span>
                        <span>Pagamento</span>
                        <span>Blog</span>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Footer
