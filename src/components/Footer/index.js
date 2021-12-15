import './index.css'

const Footer = () => (
  <div className="footer-container">
    <h1 className="footer-heading">
      COVID19<span className="india-text">INDIA</span>
    </h1>
    <p className="footer-paragraph">
      we stand with everyone fighting on the front lines
    </p>
    <div className="icon-container">
      <img
        src="https://res.cloudinary.com/drnjmmqvg/image/upload/v1639495567/Vector_wb1hg7.png"
        className="vector"
        alt="vector"
      />
      <img
        src="https://res.cloudinary.com/drnjmmqvg/image/upload/v1639478557/instagram_wgan6t.png"
        className="instagram"
        alt="instagram"
      />
      <img
        src="https://res.cloudinary.com/drnjmmqvg/image/upload/v1639561645/path3611_jyc8xd.png"
        className="twitter"
        alt="twitter"
      />
    </div>
  </div>
)

export default Footer
