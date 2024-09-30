import { } from 'react-bootstrap';
import React from 'react';
import ikonteg from '../Asserts/ikonteg.png'
import ikonwh from '../Asserts/iconwh.png'
import ikonvk from '../Asserts/iconvk.png'

import styled from 'styled-components';

const Styles = styled.div `
a {
padding: 6px;
text-decoration: none;
color: white;
}

a:hover {
color: #FFC6C6;
}

.cvet {
   background-color: #d4dde4;
  }

  
h2, h3, h4, p, li, ul {
color: white;
}
`

export const Contact = () => (
    <>
    <Styles>
    <h2 className='text-center pt-4 py-4'>Контакты</h2>

    <section className='about my-5' id='about'>
 <div className='container'>
<div className='row'>
<div className='col-lg-6 pt-lg-0 order-2 order-lg-1 content map-responsive'>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.151824188208!2d39.72636178963084!3d43.582553856998636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5cbd5be430555%3A0xfc0ac1348b7b5fec!2z0J_QtdGA0LLQvtC80LDQudGB0LrQsNGPINGD0LsuLCAyNiwg0KHQvtGH0LgsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTQwMDA!5e0!3m2!1sru!2sru!4v1723312836250!5m2!1sru!2sru" width="450" height="350" style= {{"border": 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
   <div className='col-lg-6 order-1 order-lg-2'>
<h3>STATUS PROJECTS</h3>
<h4 className="font-italic">
Архитектурно-дизайнерское бюро полного цикла
</h4>
<p className="font-italic">
Адрес: г.Сочи, ул. Первомайская, д. 26, офис 404
</p>
<p className="font-italic">
Телефон: <a  href="tel:+79631612833"> +7 963 161 28 33 </a>
</p>
<p className="font-italic">
Email: <a href="mailto:Statusprojects@mail.ru" target="_blank "> Statusprojects@mail.ru</a>
</p>
<p className="font-italic">
С нами связаться: 
</p>
<p>
  <a href="https://chat.whatsapp.com/ILwcS1gM8rK4iJj6eTEAZN" target="_blank "><img width="41" height="41" src={ ikonwh } alt='tel'/></a>
  <a href="https://vk.com/interior_design_sochi_1" target="_blank "><img width="41" height="41" src={ ikonvk } alt='tel'/></a>
  <a href="https://t.me/design_buroSP" target="_blank "><img width="35" height="41" src={ikonteg} alt='tel'/></a>
</p>

<div>
<a href="https://wa.me/79631612833" target="_blank "><button type="button" className="btn btn-outline-light ">Написать WhatsApp</button></a>
</div>
   </div>
</div>
</div>
</section>
    
    </Styles>
</>
)