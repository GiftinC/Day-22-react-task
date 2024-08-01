
import Feature from "./Feature"
import Icon1 from "../../src/assets/Icon1.png"
import Icon2 from "../../src/assets/Icon2.png"
import Icon3 from "../../src/assets/Icon3.png"

const IconMap = {
    1: Icon1,
    2: Icon2,
    3: Icon3
}


const FeaturesList = [
    {
        id: 1,
        icon: "1",
        title: "Fully Responsive",
        description: "This theme will look great on any device, no matter the size!"
    },
    {
        id: 2,
        icon: "2",
        title: "Bootstrap 5 Ready",
        description: "Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
        id: 3,
        icon: "3",
        title: "Easy to Use",
        description: "Ready to use with your own content, or customize the source files!"
    }
]

const Features = () => {
    return (
        <div className="Container" style={{ padding: "112px 0px", height: 300, textAlign: "center" }}>
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                {FeaturesList.map((feature) => (
                    <Feature
                        key={feature.id}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        IconMap={IconMap}
                    />
                ))}
            </div>
        </div>
    )
}





export default Features