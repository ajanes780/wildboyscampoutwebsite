import React from "react";

export const MenuComponent = () => {
  return (
    <header>
      <div className="logo">Creative Agency</div>
      <div
        className={`${isActive ? "active" : ""} toggle`}
        onClick={handleClick}
      />
      <div className={`${isActive ? "active" : ""} navigation `}>
        <ul>
          <li>
            <Link to="/">
              <h3 onClick={handleClick}>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <h3 onClick={handleClick}>Services</h3>
            </Link>
          </li>
          <li>
            <Link to="/work">
              <h3 onClick={handleClick}>Work</h3>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h3 onClick={handleClick}>Contact</h3>
            </Link>
          </li>
        </ul>
        <div className="social-bar">
          <ul>
            <li>
              <a href="https://facebook.com">
                <img src={facebook} target="_blank" alt="" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img src={twitter} target="_blank" alt="" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src={instagram} target="_blank" alt="" />
              </a>
            </li>
          </ul>
          <a href="mailto:you@email.com" class="email-icon">
            <img src={email} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};
