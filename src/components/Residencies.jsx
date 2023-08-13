import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../utils/slider.json'
import { sliderSettings } from '../utils/common,js'
const Residencies = () => {
    return(
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>melhores escolhas</span>
                    <span className='primaryText'>Mais Populares</span>
                </div>

                <Swiper {...sliderSettings}>
                    
                        <SliderButtons />
                        {data.map((card,i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="Home"/>                                    
                                    <span classname="secondaryText r-price">
                                        <span>$</span>
                                        <span>{card.price}</span>                                    
                                    </span>                                    
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                 <div className='flexCenter'>
                    <button className='buttonVerMais button'>
                            Ver Todos Animais
                    </button>   
                </div>
            </div>
        </section>
    )
}
export default Residencies

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}