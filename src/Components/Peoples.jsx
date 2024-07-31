
import People from "./People"


const PeoplesList = [
    {
        id: 1,
        Image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
        name: "Margaret E.",
        review: `"This is fantastic! Thanks so much guys!"`
    },
    {
        id: 2,
        Image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
        name: "Fred S.",
        review: `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`
    },
    {
        id: 3,
        Image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
        name: "Sarah W.",
        review: `"Thanks so much for making these free resources available to us!"`
    }
]

const Peoples = () => {
    return (
        <div className="Container" style={{ paddingBottom: "112px", height: 300, textAlign: "center", marginBottom: 100 }}>
            <h2>What people are saying...</h2>
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                {PeoplesList.map((people) => (
                    <People
                        key={people.id}
                        name={people.name}
                        review={people.review}
                        Image={people.Image}
                    />
                ))}
            </div>
        </div>
    )
}





export default Peoples