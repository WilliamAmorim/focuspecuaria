import { MdCall, MdChat, MdEmail, MdFacebook, MdMessage, MdSource, MdVideoCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Contact.css'
const Contact = () => {
    return(
        <section className="c-wrapper">
            <div className="innerWidth flexCenter c-container">
                <div className=" paddings flexColStart c-left">              
                    <span className='orangeText'>Fale Conosco</span>
                    <span className='primaryText'>Nossos meios de contato</span>
                    <span className='secondaryText'>Estamos aqui para ajudar! Entre em contato conosco para todas as suas necessidades.</span>                
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdChat size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Bate Papo</span>
                                        <span className="secondaryText">64 999050359</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Conversar Agora</div>
                            </div>    

                             <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdEmail size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Email</span>
                                        <span className="secondaryText">MeuEmail@gmail.com</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Mensagen Agora</div>
                            </div>                      
                        </div>
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Ligar</span>
                                        <span className="secondaryText">64 999050359</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Ligar Agora</div>
                            </div>    

                             <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdFacebook size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Redes Sociais</span>
                                        <span className="secondaryText">MeuEmail@gmail.com</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Seguir Agora</div>
                            </div>                      
                        </div>
                    </div>
                </div>

                <div className="c-right">
                    <div className="image-container">
                        <img src="./nelore2.jpg" alt=""/>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default Contact