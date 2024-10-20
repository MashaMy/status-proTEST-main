import { CardBody, CardText, Container, Col, Row, Card, Carousel} from 'react-bootstrap';
import React from 'react';
import Slaider from './Slaider';
import natal from '../Asserts/natal.jpg'
import nadya from '../Asserts/nadya.jpg'
import sveta from '../Asserts/sveta.jpg'
import renderOne from '../Asserts/renderOne.jpg'
import renderTwo from '../Asserts/renderTwo.jpg'
import renderTr from '../Asserts/renderTr.jpg'
import classOne from '../Asserts/classOne.jpg'
import classTwo from '../Asserts/classTwo.jpg'
import classTr from '../Asserts/classTr.jpg'
import Price from '../components/Calculator/Price'
import PacetUnic from './Pacetsum/PacetUnic'
import PacetStandart from './Pacetsum/PacetStandart';
import PacetKapsula from './Pacetsum/PacetKapsula';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import rakushka from '../Asserts/rakushka.png'



const Styles = styled.div `
.btn-oval {
  width: 210px;
  height: 50px;
  border-radius: 35px;
  background: transparent;
  border: 1px solid white;
}

.btn-oval:hover {
border: 3px solid white;
}

a {
padding: 6px;
text-decoration: none;
color: white;
}


.cvet {
   background-color: #d4dde4;
  }

h1, h2, h3, h4, p, li, ul {
color: white;
 font-family: "Playfair", serif;

}

 .vuebon {
  font-family: "Shadows Into Light", cursive;
  font-weight: 400;
  font-style: normal;
  color: #ffd700;
 }

 .hun{
  font-family: "Saira Condensed", sans-serif;
  font-weight: 100;
  font-style: normal;
 }
`

export const Glavnaya = () => (
     <Styles>
      <main>
    <Slaider/>
    {/* pokazvmobile */}
    <section className=' pokazvmobile pt-4'>
    <Container id='hero' class='  d-flex align-items-center justify-content-center'>
<div class="container utoch">
    <div class="row justify-content-center">
         <div class='col-md-6 col-lg-8 text-center'>
        <img src= { rakushka } class="card-img-top" alt='hren' style = {{'height': "120px", 'width': "120px"}}></img>
         <h1 class ="text-center m-3 utoch">STATUS</h1>
         <p className='vuebon'>interior disign</p>
         <h3 className ="text-center m-1 fw-lighter lh-lg hun">Cтудия дизайна интерьера в Сочи</h3>
       </div>
    </div>
<div class="row mt-1 justify-content-center">
<div class='col-12 text-center pt-2 py-2'>
<div class="icon-box">
<a href="https://t.me/design_buroSP" target="_blank "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="78" height="78" viewBox="0 0 64 64">
<path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 22.059 50 14 41.941 14 32 C 14 22.059 22.059 14 32 14 z M 41.041016 23.337891 C 40.533078 23.279297 39.894891 23.418531 39.181641 23.675781 C 37.878641 24.145781 21.223719 31.217953 20.261719 31.626953 C 19.350719 32.014953 18.487328 32.437828 18.486328 33.048828 C 18.486328 33.478828 18.741312 33.721656 19.445312 33.972656 C 20.177313 34.234656 22.023281 34.79275 23.113281 35.09375 C 24.163281 35.38275 25.357344 35.130844 26.027344 34.714844 C 26.736344 34.273844 34.928625 28.7925 35.515625 28.3125 C 36.102625 27.8325 36.571797 28.448688 36.091797 28.929688 C 35.611797 29.410688 29.988094 34.865094 29.246094 35.621094 C 28.346094 36.539094 28.985844 37.490094 29.589844 37.871094 C 30.278844 38.306094 35.239328 41.632016 35.986328 42.166016 C 36.733328 42.700016 37.489594 42.941406 38.183594 42.941406 C 38.877594 42.941406 39.242891 42.026797 39.587891 40.966797 C 39.992891 39.725797 41.890047 27.352062 42.123047 24.914062 C 42.194047 24.175062 41.960906 23.683844 41.503906 23.464844 C 41.365656 23.398594 41.210328 23.357422 41.041016 23.337891 z" fill="white"></path>
</svg></a>
</div>
<div class="d-flex align-items-center justify-content-center  pt-4 py-4">
<button type="button" className="btn-oval btn-outline-light col-6 "><a href="https://wa.me/79631612833" target="_blank ">ЗАДАТЬ ВОПРОС</a></button>
</div>
</div>
<div class='col-12 text-center pt-2 py-2'>
<div class="icon-box">
<a href="https://vk.com/interior_design_sochi_1" target="_blank "><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-bootstrap" viewBox="0 0 16 16">
  <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
  <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
</svg></a>
</div>

</div>
</div>
</div>
</Container>
  
<div class='d-flex align-items-center justify-content-center'>
         <div  class='lozung text-center'>
              <h3 className='vuebon fs-4'>Атмосферные интерьеры с характером</h3>
         </div>
</div>

</section>

<Container>
      <Container style={{marginBottom: '30px'}}>
  <h3 className ="text-center m-3">Наши работы</h3>
    <Row>
          <Col md={6}>
            <Carousel  style={{ marginBottom: "20px"}}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={renderOne} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={renderTwo} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={renderTr} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <Carousel  style={{ marginBottom: "20px"}}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={classOne} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={classTwo} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={classTr} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
   </Container>
   </Container>


   <Container className ='about my-3 ' id='about'>
   <h3 className ="text-center m-3">Дизайнеры</h3>
   <Row > 
   <Col  md={4}>
    <div class ='container text-center'>
<div className ='row mx-auto'>
   <div class="col d-flex justify-content-center ">
   <Card.Img variant = 'top rounded-2 text-center' src={ natal }/>
   </div>
   <div>
   <CardBody > 
   <CardText as='div' class ='text-center pt-2'>
<h4>Екатерина Великая</h4>
<p>
"Осуществляю полный цикл работ по дизайну"
</p>
</CardText>
<div className ='text-center py-2'>
<button type="button" className ="btn-oval btn-outline-light"><a  href="https://wa.me/79184055993" target="_blank ">Написать Екатерине</a></button>
</div>
</CardBody>
</div>
   </div>
</div>
</Col>

<Col  md={4}>
    <div className='container text-center'>
<div className='row mx-auto'>
<div class="col d-flex justify-content-center">
   <Card.Img variant = 'top rounded-2' src={ nadya } />
   </div>
   <div>
   <CardBody >
   <CardText as='div' class ='text-center pt-2'>
<h4>Надежда Коваленко</h4>
<p>
"Создаю пространство, которое будет работать на Вас"
</p>
</CardText>
<div className='text-center py-2'>
<button type="button" className="btn-oval btn-outline-light "> <a href="https://wa.me/79631612833" target="_blank ">Написать Надежде</a></button>
</div>
</CardBody>
</div>
   </div>
</div>
</Col>


<Col  md={4}>
    <div className='container text-center'>
<div className='row mx-auto'>
<div class="col d-flex justify-content-center">
   <Card.Img  variant = 'top rounded-2 ' src={ sveta } />
   </div>
   <div>
   <CardBody >
   <CardText as='div' class='text-center pt-2'>
<h4>Светлана Томилина</h4>
<p>
"Мой подход основан на открытом диалоге и внимании к деталям"
</p>
</CardText>
<div className='text-center py-2'>
<button type="button" className="btn-oval btn-outline-light "> <a href="https://wa.me/79183004489" target="_blank ">Написать Светлане</a></button>
</div>
</CardBody >
</div>
   </div>
</div>
</Col>
</Row>
</Container>
</main>
   

<Container class='pt-5' >
        <h3 className="text-center m-3"> Стоимость услуг </h3>
</Container>


<PacetUnic/>
<PacetStandart/>
<PacetKapsula/>
<Price/>



<Container className='fixednon'>
  <div className="pt-3">
<h3 className="text-center m-3 "> Новые отзывы </h3>
<div className="row pt-5 kraska">
      <div className="col-lg-4 text-center">
        {/* <img  src= { ilona } alt="ilona" className="rounded-circle" width="140" height="140" /> */}
        <h4>Илона</h4>
         <p>Недавно я имела удовольствие сотрудничать с дизайн бюро Status Projects. Дизайнеры внимательно выслушали мои идеи, предложили свои решения. Каждый этап сопровождался консультациями. Девочки были внимательны к деталям, всегда пунктуальны и вежливы, у них действительно индивидуальный подход к заказчику. Я рекомендую бюро Status Projects всем, кто ищет профессионалов. Спасибо вам и успехов в вашем нелегком труде!!!</p>
            </div>
      <div className="col-lg-4 text-center">
      {/* <img src= { pavel } alt="ilona" className="rounded-circle" width="140" height="140" /> */}
        <h4>Павел</h4>
        <p>Выбирали в какой студии заказать проект дома, и остановились на Status Projects. И вот уже заканчивается ремонт, и очень захотелось выразить благодарность дизайнерам Надежде, Светлане и их руководителю Катюше! Их дружная слаженная работа создает атмосферу доверия и заслуживает уважения. Всегда открыты и на связи. Я сама почувствовала себя не заказчиком, а партнером в процессе создания проекта. Все проконтролируют, и рабочих, и поставку материалов. Я была спокойна и не нервничала. Всем кто думает заказывать проект, однозначно советую Status Projects !👍🏼🔥</p>
        </div>
      <div className="col-lg-4 text-center">
      {/* <img src= { ekater } alt="ilona" className="rounded-circle" width="140" height="140" /> */}
        <h4>Екатерина</h4>
        <p>Мы купили квартиру и очень хотели, чтобы все члены семьи имели личное пространство, свой уголок и в то же время необходимо было одно общее место, для сбора всей семьи. Надежда разработала всевозможные варианты и в итоге мы получили спальню, две детские и большую гостиную, совмещённую с кухней и столовой. 
Работать с Надеждой одно удовольствие, объясняет нюансы строительных работ и дизайнерских решений, внимательно относится к пожеланиям заказчика, а самое главное она может реализовать вашу мечту о прекрасном доме.
</p>
      </div>
    </div>
    </div>
</Container>
</Styles>
    
)