import './Header.css'
const Header = () => {
    return(
        <section className="h-wrapper">
            <div className="flexCenter paddings h-container">
                <img src="./boi.png" alt="logo" width={67} height={67}/>
                <div className="flexCenter h-menu">
                    <a href="">Eventos</a>
                    <a href="">Sobre Nós</a>
                    <a href="">Portfólio</a>
                    <a href="">Contato</a>
                    <button className='button'>
                        Entrar
                    </button>   
                    <button className='button'>
                        Registrar-se
                    </button>                  

                </div>
            </div>
        </section>
    )
}

export default Header