import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <nav className="social-links" aria-label="Social Media Links">
      <ul className="social-links__list">
        <li className="social-links__item">
          <a
            href="https://facebook.com"
            className="social-links__link"
            aria-label="Visit our Facebook page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF aria-hidden="true" />
          </a>
        </li>
        <li className="social-links__item">
          <a
            href="https://twitter.com"
            className="social-links__link social-links__link--twitter"
            aria-label="Visit our Twitter profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter aria-hidden="true" />
          </a>
        </li>
        <li className="social-links__item">
          <a
            href="https://instagram.com"
            className="social-links__link"
            aria-label="Visit our Instagram profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinks;
