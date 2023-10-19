

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

var sliderArray = [
    {
        id : 1,
        image : require("../assets/images/img-hero1.jpg"),
        title : "Start Your Future Financial Plan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
        link : "www.google.com"
    },
    {
        id : 2,
        image : require("../assets/images/img-hero2.jpg"),
        title : "Enjoy the Difference",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
        link : "www.facebook.com"
    },
    {
        id : 3,
        image : require("../assets/images/img-hero3.jpg"),
        title : "The perfect design for your website",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
        link : "www.instagram.com"
    }
]


function Slider(){
    return(
        <div>
            <section id="home" className="hero-block">
            <Carousel>
                {sliderArray.map((v,i)=>{
                    return(
                        <Carousel.Item key={v.id}>
                            <Image src={v.image} />
                            <Carousel.Caption>
                                <h3>{v.title}</h3>
                                <p>{v.description}</p>
                                <a href={v.link} className='btn btn-primary'>Learn More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}     
            </Carousel>

            </section>
        </div>
    )
}


export default Slider;