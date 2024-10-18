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
}
`

export const Glavnaya = () => (
     <Styles>
      <main>
    <Slaider/>
    
      <Container  style={{marginBottom: '30px'}}>
    <h3 className ="text-center m-3 fixednon">Наши работы</h3>
    <h3 className ="text-center m-3 pokazvmobile">STATUS PROJECTS</h3>
    <h4 className ="text-center m-3 pokazvmobile"> Создаем пространство, в котором каждый элемент будет отражать вашу индивидуальность! </h4>
   
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
  


   <Container className ='about my-3 fixednon' id='about'>
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