import React from 'react'
import './App.css'
import logo from './assets/Слой 2.png'
import Button from './components/Button'
import watsapp from './assets/WhatsApp_white.png'
import Card from './components/Card'
import tovar from './assets/unsplash_Xp9hn1HzzDk.png'
import tovar2 from './assets/unsplash_Xp9hn1HzzDk (1).png'
import tovar3 from './assets/unsplash_Xp9hn1HzzDk (2).png'
import tovar4 from './assets/unsplash_Xp9hn1HzzDk (3).png'
import tovar5 from './assets/unsplash_Xp9hn1HzzDk (4).png'
import tovar6 from './assets/unsplash_Xp9hn1HzzDk (5).png'
import tovar7 from './assets/unsplash_Xp9hn1HzzDk (6).png'
import tovar8 from './assets/unsplash_Xp9hn1HzzDk (7).png'
import Page from './components/Page'
import bigImage from './assets/unsplash_zbD8iz5ZJk4.jpg'
import bigImage2 from './assets/unsplash_zbD8iz5ZJk4 (1).jpg'
import bigImg from './assets/unsplash_2yNMsw-A2eI.jpg'
import bigImg2 from './assets/unsplash_2yNMsw-A2eI (1).jpg'
import bigImg3 from './assets/unsplash_2yNMsw-A2eI (2).jpg'
import bigImg4 from './assets/unsplash_2yNMsw-A2eI (3).jpg'
import bigImg5 from './assets/bigImg5.jpg'
import bigImg6 from './assets/bigImg6.jpg'
import bigImg7 from './assets/bigImg7.jpg'
import menu from './assets/Group 1533.png'
import smotret from './assets/Group 1501.svg'
import group1 from './assets/Group (6).png'
import group2 from './assets/Group (7).png'
import group3 from './assets/Group (8).png'
import group4 from './assets/Group 1536.png'
import strelka from './assets/Rectangle 40.png'
import strelka2 from './assets/Rectangle 41.png'
import Card2 from './components/Card2'
import strelka3 from './assets/Group 1492.svg'
import Card3 from './components/Card3'
import cadr3Img from './assets/unsplash_6tAIO3pxde4.jpg'
import cadr3Img2 from './assets/unsplash_8KfCR12oeUM.jpg'
import cadr3Img3 from './assets/unsplash_okI5SSlYAvM.jpg'
import galochka from './assets/galochka.png'







const App = () => {
  return (
    <>
      <div className='h-[900px] w-[100%] bg-[url(./assets/Rectangle.jpg)] bg-center bg-cover bg-no-repeat text-[white]  max-sm:h-[900px]'>
        <div className='flex justify-center gap-[280px]  pt-[40px]  max-sm:gap-[120px]'>
          <div className='flex gap-[30px] text-[white]'>
            <img src={logo} alt="" />
            <p className='max-sm:hidden'>Продукция</p>
            <p className='max-sm:hidden'>Поставщикам</p>
            <p className='max-sm:hidden'>Вакансии</p>
            <p className='max-sm:hidden'>Новости</p>
            <p className='max-sm:hidden'>контакты</p>
          </div>
          <div className='flex gap-[30px] text-[white]'>
            <img className='hidden max-sm:block max-sm:w-[35px] max-sm:h-[20px]' src={menu} alt="" />
            <p className='max-sm:hidden'>+7 (342) 250-08-88</p>
            <p className='max-sm:hidden'>info@grdok.ru.</p>
            <p className='max-sm:hidden'>RU</p>
          </div>
        </div>
        <div className=' flex justify-between mt-[270px]'>
          <div className='w-[600px] ml-[80px] max-sm:ml-[25px]'>
            <h1 className='text-[50px] max-sm:text-[30px]'>ГРУППА КОМПАНИИ ГРЕМЯЧИНСКИЙ ДОК</h1>
            <p className='text-[#D2D2D2] mt-[20px] mb-[60px]'>Современное предприятие по производству гнуто-клееных изделий (латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов</p>
            <Button text='Связаться с нами' bg='#0E9E2F' />
          </div>
          <img className='w-[65px] h-[65px] bg-[white] rounded-[50%] mr-[70px] mt-[350px] max-sm:mr-[70px] max-sm:mt-[400px]' src={watsapp} alt="" />
        </div>
      </div>
      <div className=' h-[1900px] bg-[#686868] max-sm:h-[1000px]'>
        <div className='w-[480px] text-[white] '>
          <h1 className='text-[40px] pt-[100px] pl-[70px] '>Продукция завода</h1>
          <p className='text-[#D2D2D2]  pt-[20px] pl-[70px] '>Ниже представлен список нашей продукции. Получить дополнительную информацию, а также оставить заявку можно по контактам коммерческой службы.</p>
        </div>
        <div className="m-[80px_170px] grid grid-cols-[repeat(3,360px)] grid-rows-[repeat(3,420px)] gap-[50px]  max-sm:grid-cols-[360px] max-sm:grid-rows-[420px] max-sm:m-[60px]">
          <Card image={tovar} textH='Латофлекс' textp='Шпон березовый лущеный, ГОСТ 99-96ВСмола марки КФМТ - 15, класс эмиссии Е0' />
          <div className="max-sm:hidden">
            <Card image={tovar2} textH='Фанера' textp='Шпон березовый лущеный, ГОСТ 99-96ВСмола марки КФМТ - 15, класс эмиссии Е0' />

          </div>
          <div className="max-sm:hidden">
            <Card image={tovar3} textH='Брикеты топливные RUF' textp='Шпон березовый лущеный, ГОСТ 99-96ВСмола марки КФМТ - 15, класс эмиссии Е0' />

          </div>
          <div className='max-sm:hidden'>
            <Card image={tovar4} textH='Пиломатериалы' textp='Шпон березовый лущеный, ГОСТ 99-96ВСмола марки КФМТ - 15, класс эмиссии Е0' />

          </div>
          <div className="max-sm:hidden ">
            <Card image={tovar5} textH='Кроватные основания' textp='Шпон березовый лущеный, ГОСТ 99-96ВСмола марки КФМТ - 15, класс эмиссии Е0' />

          </div>
          <div className="max-sm:hidden ">
            <Card image={tovar6} textH='Уголь' textp='Шпон березовый лущеный, ГОСТ 99-96ВСмола марки КФМТ - 15, класс эмиссии Е0' />

          </div>
          <div className="max-sm:hidden">
            <Card image={tovar7} textH='Саженцы' textp='Шпон березовый лущеный, ГОСТ 99-96ВСмола марки КФМТ - 15, класс эмиссии Е0' />

          </div>
          <div className=" max-sm:hidden ">
            <Card image={tovar8} textH='Отходы производства' textp='Шпон березовый лущеный, ГОСТ 99-96ВСмола марки КФМТ - 15, класс эмиссии Е0' />

          </div>

        </div>
      </div>
      <h1 className='text-[45px] text-center mt-[120px] text-[#494B44]'>основная деятельность</h1>
      <Page textH='Производство' textP='Оборудование предприятия постx`авляется
от мировых лидеров в сфере деревообработки
и обеспечивает стабильный выпуск продукции. 
Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.' textP2='Оборудование предприятия поставляется
от мировых лидеров в сфере деревообработки
и обеспечивает стабильный выпуск продукции. 
Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.' image={bigImage} image2={bigImg} image3={bigImg2} image4={bigImg3} />
      <div className='max-sm:hidden'>
        <Page textH='Лесоуправление  и заготовка' textP='Рубка леса осуществляется на арендованных участках, обеспечивая бесперебойную поставку сырья для производства и для продажи. Расчетная лесосека – 320 000 м3. Общая площадь арендованного леса – 306 000 Га - cертифицирована по стандартам международной добровольной лесной сертификации (FSC).' textP2='Оборудование предприятия поставляется
от мировых лидеров в сфере деревообработки
и обеспечивает стабильный выпуск продукции. 
Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.' image={bigImage2} image2={bigImg4} image3={bigImg4} image4={bigImg4} />
      </div>
      <div className='max-sm:hidden'>
        <Page textH='Питомник' textP='Задача лесопитомника – обеспечение посадочным материалом собственной
и сторонней лесозаготовки.' textP2='Питомник полностью покрывает потребности Пермского края в сеянцах сибирской ели. Общая площадь теплиц – 4800 м3, питомника – 15 Га. Потенциал – до 4 млн. сеянцев в год.
' image={bigImage2} image2={bigImg5} image3={bigImg6} image4={bigImg7} />
      </div>
      <div className='w-[85%] h-[650px] bg-[url(./assets/vxod.jpg)] bg-no-repeat bg-center bg-cover ml-[115px] mt-[150px] max-sm:ml-[0px] max-sm:mt-[100px] max-sm:w-[100%] text-[white]'>
        <div className='flex justify-center gap-[70px] pt-[70px] max-sm:flex-col max-sm:items-center'>
          <div className='w-[430px]'>
            <h1 className='text-[48px]'>Стабильные поставки за счет собственной лесозаготовки</h1>
            <div className='flex gap-[15px] mt-[30px]'>
              <img src={smotret} alt="" />
              <p className='text-[18px] text-[#0E9E2F] mt-[10px]'>Смотреть видео о заводе</p>
            </div>
            <p className='text-[#D2D2D2] mt-[30px]'>Гибкий подход к условиям сотрудничества – скидки, различные формы оплаты, условия поставки.. </p>
          </div>
          <div className='w-[500px] h-[580px] bg-[#0E9E2F] rounded-tr-[100px] text-[white] pl-[50px] max-sm:w-[550px]'>
            <div className='w-[430px] m-auto'>
              <h1 className='text-[24px] mt-[50px]' >Сертификат FSС	</h1>
              <p className='mt-[20px]'>Сертифицированная продукция (FSC 100%)
                по системе Forest Stewardship Council®.</p>
              <h1 className='text-[24px] mt-[50px]' >Соответствие регламенту EUTR</h1>
              <p className='mt-[20px] '>(European Union Timber Regulation) – предоставляем необходимый пакт документов. </p>
              <h1 className='text-[24px] mt-[50px]' >
                Сертификат CARB / CARB2
              </h1>
              <p className='mt-[20px]'>Для поставок в США и другие страны, запрашивающие сертификацию на соответствие производства и продукции стандартам по выбросам формальдегида.</p>

            </div>
          </div>
        </div>

      </div>
      <div className='mt-[100px]'>
        <div className='flex justify-center gap-[350px] max-sm:mt-[600px] max-sm:flex-col max-sm:items-center max-sm:gap-[50px]' >
          <h1 className='text-[40px] text-[#494B44] max-sm:text-[30px]'> География Поставок</h1>

          <div>
            <div className='flex gap-[100px] max-sm:gap-[10px]  '>
              <div className='w-[250px] '>
                <p className='text-[#92938F]'>Доставляем грузы по всему миру в Европу, Азию, Америку, Египет</p>
              </div>
              <div>
                <img src={group1} alt="" />
                <img className='mt-[10px]' src={group3} alt="" />
                <img className='mt-[10px]' src={group3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='ml-[150px] mt-[100px] max-sm:ml-[20px]' src={group4} alt="" />
      <div className='mt-[140px] w-[100%] h-[500px] bg-[url(./assets/Rectanglee.jpg)] bg-no-repeat bg-center bg-cover text-center text-[white] max-sm:hidden'>
        <h1 className='text-[48px] pt-[140px]'>Сотрудничество</h1>
        <p className='mt-[20px]'>Предприятие постоянно потребляет различный <br />
          ассортимент продуктов и услуг</p>
        <button className='w-[170px] h-[48px] mt-[60px] border-none bg-[#0E9E2F] text-[white]'>Подробнее</button>
      </div>
      <div className='mt-[150px]   mb-[30px] flex justify-around gap-[100px] max-sm:flex-col max-sm:items-center'>
        <h1 className='text-[#494B44] text-[47px] max-sm:text-[30px]'>Актуальные Вакансии</h1>
        <div className='flex gap-[10px]'>
          <img src={strelka2} alt="" />
          <img src={strelka} alt="" />
        </div>
      </div>
      <hr className='w-[78%] m-auto border-none border-[1px] border-solid border-[#c9c9c9]' />
      <div className='mt-[70px] mb-[150px] flex justify-center gap-[40px]'>
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <div className='hidden max-sm:block max-sm:w-[100%]  max-sm:h-[500px] max-sm:bg-[url(./assets/mobail.jpg)] max-sm:bg-cover max-sm:bg-center max-sm:bg-no-repeat max-sm:text-center max-sm:text-[white]'>
          <h1 className='text-[50px] pt-[100px]'>Новости</h1>
          <button className='w-[300px] h-[50px] border-none bg-[#0E9E2F] mt-[40px]'>Читать все новости</button>
      </div>
      <div className='flex justify-around gap-[300px]'>
        <h1 className='text-[50px] text-[#494B44] max-sm:hidden'> Новости</h1>
        <div className='flex gap-[10px] mt-[20px]'>
          <img className='w-[30px] h-[12px] mt-[10px]' src={strelka3} alt="" />
          <p className='text-[22px] text-[#0E9E2F]'>Читать все новости</p>
        </div>
      </div>
      <div className='flex justify-center gap-[60px] mt-[60px]'>
        <Card3 image={cadr3Img} text='Вышли на международный рынок' />
        <Card3 image={cadr3Img2} text='Встреча с европепйскими коллегами' />
        <Card3 image={cadr3Img3} text='Новое оборудование' />
      </div>
      <div className='w-[100%] h-[900px] bg-[url(./assets/masterog.png)] bg-no-repeat bg-center bg-cover mt-[150px] text-[white]'>
        <div className='flex justify-center gap-[100px]  pt-[100px] max-sm:flex-col max-sm:items-center'>
          <div className='w-[500px] max-sm:w-[400px]'>
            <h1 className='text-[45px] max-sm:text-[30px]'>Свяжитесь с нашим специалистом</h1>
            <p className='mt-[20px]'>Заинтерисованы в сотрудничестве  или остались вопросы? Заполните форму обратной связи и наши менеджеры обязательно свяжутся с вами</p>
            <div className='flex gap-[30px] mt-[100px]'>
              <div className='flex gap-[7px]  w-[250px]'>
                <img className='w-[60px] h-[40px] ' src={galochka} alt="" />
                <p className='text-[#D2D2D2]'>Ответим втечение
                  15 минут, в рабочее
                  время</p>
              </div>
              <div className='flex gap-[7px]  w-[250px]'>
                <img className='w-[60px] h-[40px] ' src={galochka} alt="" />
                <p className='text-[#D2D2D2]'>ОБережем ваши персональные данные</p>
              </div>

            </div>
          </div>
          <div className='w-[620px] h-[650px] bg-[#0E9E2F] rounded-tr-[100px]'>
            <input type="text" className='w-[530px] h-[50px] bg-[white] ml-[40px] mt-[70px]' name="" placeholder='Ф.И.О' id="" />
            <div className='flex justify-center gap-[20px] mt-[30px] '>
              <input className='w-[253px] h-[50px] bg-[white]' type="text" name="" id="" />
              <input className='w-[253px] h-[50px] bg-[white]' type="text" name="" id="" />
            </div>
            <input type="text" className='w-[530px] h-[50px] bg-[white] ml-[40px] mt-[30px]' name="" placeholder='Ф.И.О' id="" />
            <input type="text" className='w-[530px] h-[100px] bg-[white] ml-[40px] mt-[30px]' name="" placeholder='Ф.И.О' id="" />
            <button className='w-[230px] h-[55px] border-none bg-[#0E9E2F] border-[1px] border-solid border-[white] m-[50px]'>Связаться с нами     </button>
          </div>
        </div>
      </div>
      <div className='w-[100%] h-[600px] bg-[#313131] text-[white] max-sm:h-[1900px]'>
        <div className='flex justify-center gap-[60px] pt-[100px] max-sm:flex-col max-sm:items-center'>
          <div className='max-sm:mt-[300px]'>
            <img src={logo} alt="" />
            <p className='pt-[30px]'>Современное предприятие по <br />
              производству гнуто-клееных изделий <br />
              (латофлекс), фанеры, топливных брикетов <br />
              RUF, березового угля, пиломатериалов</p>
          </div>
          <div>
            <p className='text-[#787878] mb-[40px]'> Реализация</p>
            <p>Латофлекс <br />
              Фанера <br />
              Брикеты топливные RUF <br />
              Пиломатериалы <br />
              Кроватные основания <br />
              Уголь <br />
              Саженцы <br />
              Отходы производства</p>
          </div>
          <div>
            <p className='text-[#787878] mb-[40px]'>О компании</p>
            <p>
              Продукция<br />
              Деятельность<br />
              Приемущества<br />
              Поставщикам<br />
              Вакансии<br />
              Новости</p>
          </div>
          <div>
            <p className='text-[#787878] mb-[40px]'>Отдел закупок</p>
            <p>
              purchase@grdok.ru <br />
              Отдел продаж<br />
              sale@grdok.ru <br />
              @gremdok_bot <br />
              Мелкий опт, «карандаши», <br />
              «пятаки» : +7 (342) 502-16-91</p>
          </div>
          <div>
            <p className='text-[#787878] mb-[40px]'>Контакты</p>
            <p>
              info@grdok.ru <br />
              Адрес <br />
              Гремячинск Пермский край <br />
              618270 РФ, г. Гремячинск, <br />
              ул. Коммунистическая, д.1 <br />
              Мелкий опт, «карандаши», <br />
              «пятаки» : +7 (342) 502-16-91</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App