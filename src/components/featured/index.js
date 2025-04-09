import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import "../../styles/scss/featuredBrands.scss"

import 'swiper/css';
import 'swiper/css/navigation';

function FeaturedBrands() {
    const logo = [
        "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
        "https://images.samsung.com/is/image/samsung/assets/vn/about-us/brand/logo/mo/256_144_2.png?$512_N_PNG$",
        "https://nghenhinvietnam.vn/uploads/global/tunglampv/2023/t08/04/oppologo/oppo_logo.jpg",
        "data:image/png;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwuvoyONEaK2otxKH0vxPaNXaYd4xAv4kXsw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucXbasq2KXQpLMVKf4vmFX0OhYy1MXSrYDw&s",

    ];

    return (
        <>

            <section className='featuredBrands'>
                <div className="container">
                    <h2>THƯƠNG HIỆU NỔI BẬT</h2>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={5}
                        spaceBetween={20}
                        navigation
                        loop={true}
                        autoplay={{ delay: 3000 }}
                    >
                        {
                            logo.map(item => (
                                <SwiperSlide>
                                    <div className='featuredBrands__image'>
                                    <img src={item} />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    );
}
export default FeaturedBrands;