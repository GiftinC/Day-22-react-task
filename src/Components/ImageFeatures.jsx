
import ImageFeature from "./ImageFeature"
import "./ImageFeatures.css"

import Image1 from "../../src/assets/Image1.png"
import Image2 from "../../src/assets/Image2.png"
import Image3 from "../../src/assets/Image3.png"

const ImageMap = {
    1: Image1,
    2: Image2,
    3: Image3
}

const ImageFeatureList = [
    {
        id: 1,
        image: "1",
        title: "Fully Responsive Design",
        description: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
        left: false
    },
    {
        id: 2,
        image: "2",
        title: "Updated For Bootstrap 5",
        description: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
        left: true
    },
    {
        id: 3,
        image: "3",
        title: "Easy to Use & Customize",
        description: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
        left: false
    }
]

const ImageFeatures = () => {
    return (
        <div className="container">
            {ImageFeatureList.map((Imagefeature) => (
                <ImageFeature
                    key={Imagefeature.id}
                    image={Imagefeature.image}
                    ImageMap={ImageMap}
                    title={Imagefeature.title}
                    description={Imagefeature.description}
                    left={ImageFeature.left}
                />
            ))}
        </div>
    )
}

export default ImageFeatures