import PropTypes from "prop-types";
const Feature = ({ icon, IconMap, title, description }) => {

  return (
    <div className="col-md-4" style={{ display: "inline-block", textAlign: "center", padding: 8, margin: 8, width: 300, height: 200 }}>
      <img src={IconMap[icon]} alt={title} style={{ transform: "scale(0.5)" }} />
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

Feature.propTypes = {
  icon: PropTypes.string,
  IconMap: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number
}
export default Feature