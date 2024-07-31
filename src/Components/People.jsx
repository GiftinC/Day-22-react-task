import PropTypes from "prop-types";
const People = ({ Image, name, review }) => {

  return (
    <div className="col-md-4" style={{ display: "inline-block", textAlign: "center" , padding: 8 , margin: 8 ,width:300 ,height:200}}>
      <img style={{borderRadius:"50%" ,width:192 , height:192}} src={Image} alt={name} />
      <h3>{name}</h3>
      <p>{review}</p>
    </div>
  )
}

People.propTypes = {
  Image: PropTypes.string,
  name: PropTypes.string,
  review: PropTypes.string,
  id: PropTypes.number
}
export default People