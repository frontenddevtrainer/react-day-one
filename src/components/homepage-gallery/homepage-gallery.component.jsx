import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../carousel-image/carousel-image.component';

function HomepageGallery() {
    return <Carousel>
        <Carousel.Item>
            <CarouselImage bgcolor="blue" text="First slide" />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselImage bgcolor="red" opacity={.5} text="Second slide" />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselImage bgcolor="yellow" opacity={.8} text="Third slide" />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}

export default HomepageGallery;