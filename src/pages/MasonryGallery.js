import React from 'react';
import Navbar from '../components/header/Navbar.jsx';
import Masonry from '@mui/lab/Masonry';
import './gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../components/footer/Footer'
// Import Swiper styles
import 'swiper/css';
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import random from "../assets/group.jpg";
import one from '../assets/car1.jpg'
import two from '../assets/car2.jpg'
import three from '../assets/car3.jpg'
import four from '../assets/car4.jpg'


const itemData = [
    
  {
    img: 'https://drive.google.com/uc?export=view&id=1YNTjP_dl7nXvyef2OrgZ3Hprvk52YrgM',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1Tw-HEx75vrq-xDZsAtP4igXsMnabv6JZ',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1R2fgnVGggPdBFZbWIz9cpdS3G0dg7s9t',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1lJwgI_g5tdTfChPCnTU9hW7s7kcwgzMQ',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=17L0h9nHH-jC7Loaox_Dutww3Eqbq283Z',
    title: '',
  },

  {
    img: 'https://drive.google.com/uc?export=view&id=1WvQvJ5DNXEAppF4jEdCpfHfhX-JxlC4q',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1Cp8bK92mSKahEMnb1FkbX-Z3yMZZtZ8V',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1tb1lEAs8a3jz_aH3VE-qaABE6MrHkYs9',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1s1eMOniH9K0L7c3UjX1EVjhZzBtenaX6',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1RWXRFWtCOuIoxmd4AyLI2aGIFOUmWGJM',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1CwJkVnhkUiuspTSpdLo-FtbzB5kXVR83',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1suQVKC9ZaSFRhmP7UsH2q6yQOIF4d8hK',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=166Gg8iVLyTHXHRWlSonI1L4MUM_3b-LP',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=13Must82JcVE-dBimA1B64YrS8I7CVXEu',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1y014amyySESTm2Awyn44TcaJxZz-8S7r',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1gEVvzaSLcU_lRPoybrp4XA27vLoUhZc2',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1U4a1ksH1BSP5TQ0SKc8pBOHHSZusQFGj',
    title: '',
  },
  
  {
    img: 'https://drive.google.com/uc?export=view&id=1LaLrPDBCmRRa4qagvNeXEge1yVmPCZWS',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1rRbQk93l2itcOn4ZxBAP5_VcFiNtC_De',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1yO-bcmHmW4l8Uvot31F6O8TUcAvvmShp',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=10-buWNohMlCUam5jXfrhJbD5lasgSdzh',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1toJCdS_QzXz1fVlCul7lItCyOI4AurRc',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1LWCvZJDlptOUS6cNU_AKvqUVjsgRRYas',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1fFA4FEWpT5IxVFylfs0TSbGQ7LJyYb5e',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1CESux8F0ivOqDyMh3UlkkGsW8TqWXlvi',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1xII2XgmOYKD0bX6x_GTX1T3obnwsSTbY',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1sdbSITZrg_XuN_eCUEIFh5KItele5MB5',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1g1fYjJw_U13jyglVhP-cCxYSVqJLd_xH',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1nVOAzgrnJYOFG4XaWyr_uBoAguDvP1iw',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1lJwgI_g5tdTfChPCnTU9hW7s7kcwgzMQ',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1n-TmxSN7GKtZ4fw0YNfZ6mc2VZeDRn3g',
    title: '',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1vvk4ZmPnVlyjjak2ZpkiTvMxJ7Sfwiis',
    title: '',
  },
  
];


const MasonryGallery = () => {
  return (
    <div>
        <Navbar/>

        <div>
        <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper car__head"
      >
        <SwiperSlide>
          <img className="swiper-images" src={random} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img className="swiper-images" src={three} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img className="swiper-images" src={four} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img className="swiper-images" src={one} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
        <img className="swiper-images" src={two} alt=''/>
        </SwiperSlide>
      </Swiper>
        </div>
        <h1 className="Ultrabold gallery" style={{marginTop: '6rem', marginBottom: '4rem'}}>Events at Salaah!</h1>
        <div className=''>
        <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
              className= "all__img"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
      </div>
      
      <Footer />
    </div>
  )
}

export default MasonryGallery