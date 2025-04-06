//Component Property

function CarouselImage(props) {
    // props = typeof Object { bgcolor: string }
    // props.someCustomKey = value;

    const bgcolor = props.bgcolor;
    const opacity = props.opacity || 1;

    return <div style={{ backgroundColor: bgcolor, height: "300px", width: "100%", opacity: opacity }}></div>
}

export default CarouselImage;