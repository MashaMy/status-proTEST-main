import { } from 'react-bootstrap';
import React from 'react';
// import ikonteg from '../Asserts/ikonteg.png'
// // import ikonwh from '../Asserts/iconwh.png'
// import ikonvk from '../Asserts/iconvk.png'

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
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.151824188208!2d39.72636178963084!3d43.582553856998636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5cbd5be430555%3A0xfc0ac1348b7b5fec!2z0J_QtdGA0LLQvtC80LDQudGB0LrQsNGPINGD0LsuLCAyNiwg0KHQvtGH0LgsINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTQwMDA!5e0!3m2!1sru!2sru!4v1723312836250!5m2!1sru!2sru" width="450" height="350" style= {{"border": 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="contact"></iframe>
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

<div class='pt-1 py-4'>
<div class="icon-box">
<a href="https://t.me/design_buroSP" target="_blank "><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-telegram pt-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
</svg></a><a href="https://vk.com/interior_design_sochi_1" target="_blank "><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-bootstrap pt-2 mx-3" viewBox="0 0 16 16">
  <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
  <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
</svg></a>
</div>
</div>

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