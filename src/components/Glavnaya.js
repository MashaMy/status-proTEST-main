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
// import ilona from '../Asserts/ilona.jpg';
// import pavel from '../Asserts/pavel.jpg'
// import ekater from '../Asserts/ekater.jpg'
import PacetUnic from './Pacetsum/PacetUnic'
import PacetStandart from './Pacetsum/PacetStandart';
import PacetKapsula from './Pacetsum/PacetKapsula';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Styles = styled.div `
a {
padding: 6px;
text-decoration: none;
color: white;
}

a:hover {
color: black;
}

.cvet {
   background-color: #d4dde4;
  }

h2, h3, h4, p, li, ul {
color: white;
 font-family: "Playfair", serif;
}
`

export const Glavnaya = () => (
     <Styles>
      <main>
    <Slaider/>
    
    <section className='pokazvmobile'>
    <Container id='hero' class='d-flex align-items-center justify-content-center '>
<div class="container">
    <div class="row justify-content-center">
         <div class='col-md-6 col-lg-8'>
         <h2 className ="text-center m-3 ">STATUS PROJECTS</h2>
         <h3 className ="text-center m-3 ">cтудия дизайна интерьера в Сочи</h3>
         <h4 className ="text-center m-3 ">Атмосферные интерьеры с характером</h4>
         </div>
    </div>
<div class="row mt-5 justify-content-center">
<div class="d-flex align-items-center justify-content-center">
<a href="https://wa.me/79631612833" target="_blank "><button type="button" className="btn btn-outline-light">Написать</button></a>
</div>
<div class='col-xl-2 col-md-4 col-6 text-center'>
<div class="icon-box">
<a href="https://t.me/design_buroSP" target="_blank "><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-telegram pt-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
</svg></a>
</div>
</div>
<div class='col-xl-2 col-md-4 col-6 text-center'>
<div class="icon-box">
<a href="https://vk.com/interior_design_sochi_1" target="_blank "><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-bootstrap pt-2 mx-3" viewBox="0 0 16 16">
  <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
  <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
</svg></a>
</div>
</div>
</div>
</div>
</Container>
</section>

<section className='pokazvmobile'>
    <Container>
    <div>
<h4 className ="text-center m-3">Добро пожаловать в нашу студию дизайна интерьера! Каждый проект для нас — это новая история. Мы считаем, что дизайн — это не только о красоте, но и о комфорте. Наши интерьеры создаются с учетом ваших потребностей, стиля жизни и возможностей.
</h4>
</div>
    </Container>
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
<button type="button" className ="btn btn-outline-light"> <a  href="https://wa.me/79184055993" target="_blank ">Написать Екатерине</a></button>
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
<button type="button" className="btn btn-outline-light "> <a href="https://wa.me/79631612833" target="_blank ">Написать Надежде</a></button>
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
<button type="button" className="btn btn-outline-light "> <a href="https://wa.me/79183004489" target="_blank ">Написать Светлане</a></button>
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