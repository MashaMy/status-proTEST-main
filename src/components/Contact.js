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
color: white;
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
<h3>STATUS</h3>
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
<a href="https://t.me/design_buroSP" target="_blank "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="78" height="78" viewBox="0 0 64 64">
<path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 22.059 50 14 41.941 14 32 C 14 22.059 22.059 14 32 14 z M 41.041016 23.337891 C 40.533078 23.279297 39.894891 23.418531 39.181641 23.675781 C 37.878641 24.145781 21.223719 31.217953 20.261719 31.626953 C 19.350719 32.014953 18.487328 32.437828 18.486328 33.048828 C 18.486328 33.478828 18.741312 33.721656 19.445312 33.972656 C 20.177313 34.234656 22.023281 34.79275 23.113281 35.09375 C 24.163281 35.38275 25.357344 35.130844 26.027344 34.714844 C 26.736344 34.273844 34.928625 28.7925 35.515625 28.3125 C 36.102625 27.8325 36.571797 28.448688 36.091797 28.929688 C 35.611797 29.410688 29.988094 34.865094 29.246094 35.621094 C 28.346094 36.539094 28.985844 37.490094 29.589844 37.871094 C 30.278844 38.306094 35.239328 41.632016 35.986328 42.166016 C 36.733328 42.700016 37.489594 42.941406 38.183594 42.941406 C 38.877594 42.941406 39.242891 42.026797 39.587891 40.966797 C 39.992891 39.725797 41.890047 27.352062 42.123047 24.914062 C 42.194047 24.175062 41.960906 23.683844 41.503906 23.464844 C 41.365656 23.398594 41.210328 23.357422 41.041016 23.337891 z" fill="white"></path>
</svg></a><a href="https://vk.com/interior_design_sochi_1" target="_blank "><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-bootstrap  mx-3" viewBox="0 0 16 16">
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