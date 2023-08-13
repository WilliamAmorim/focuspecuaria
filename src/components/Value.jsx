import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './value.css'
import data from '../utils/accordion'
const Value = () => {
    return(
        <section className="v-wrapper">
            <div className="innerWidth flexCenter v-container">
                <div className='v-left'>
                    <div className="image-container">
                        <img src="./nelore.jpg" alt=""/>
                    </div>
                </div>

                <div className='paddings flexColStart v-right'>
                    <span className='orangeText'>Nosso valor</span>
                    <span className='primaryText'>Valor que damos a você</span>
                    <span className='secondaryText'>É intermediar o comércio de gado de forma 100% online,  oferecendo facilidade e segurança aos nossos clientes, tanto para quem quer comprar, quanto para quem quer vender.</span>
                    
                        <Accordion
                            className='accordion'
                            allowMultipleExpanded={false}
                            preExpanded={[0]}>
                                {data.map((item,i) =>{
                                        
                                        return(
                                            <AccordionItem className='accordionItem expanded' key={i} uui={i}>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton className='flexCenter accordionButton'>                                                           
                                                        <span className="orangeText">{item.heading}</span>
                                                        <div className='flexCenter icon'>
                                                            <MdOutlineArrowDropDown size={20}/>
                                                        </div>
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>

                                                <AccordionItemPanel>
                                                    <p className='secondaryText'>{item.detail}</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        );
                                    })
                                }

                        </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value