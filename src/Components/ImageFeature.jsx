import PropTypes from "prop-types";

const ImageFeature = ({ ImageMap, image, title, description }) => {

  return (
    <div className="row">
      <div style={{ maxWidth: "50%" }}>
        <div style={{ padding: "150px" }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div style={{ maxWidth: "50%" }}>
        <img className="image" src={ImageMap[image]} alt={title} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
      </div>
    </div>
  )
}

ImageFeature.propTypes = {
  image: PropTypes.string,
  ImageMap: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  left: PropTypes.bool
}
export default ImageFeature