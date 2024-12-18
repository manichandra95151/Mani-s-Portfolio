<<<<<<< HEAD
import React from "react";
import styled from "styled-components";

const ContactButton = () => {
  return (
    <StyledWrapper>
      <button className="cta">
        <span>Contact Me &nbsp;</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
  position: relative;
  margin: auto;
  padding: 11.5px 18px;
  transition: all 0.2s ease;
  border: 3px solid #552da8;
  border-radius: 50px;
  background: #552da8;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  border-radius: 50px;
  background: white;
  width: 45px;
  height: 45px;
  transition: all 0.8s ease;
}

.cta span {
  position: relative;
  font-family: Montserrat;
  font-size: 18px;
  color: white;
  font-weight: 400;
  letter-spacing: 0.05em;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: white;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.5s ease;
}

.cta:hover:before {
  width: 100%;
  background: #1c1c1c;
}

.cta:hover svg {
  transform: translateX(0);
  transition: all 2s ease;
}

.cta:active {
  transform: scale(0.95);
  transition: all 2s ease;
}

`;

export default ContactButton;
=======
import React from "react";
import styled from "styled-components";

const ContactButton = () => {
  return (
    <StyledWrapper>
      <button className="cta">
        <span>Contact Me &nbsp;</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
  position: relative;
  margin: auto;
  padding: 11.5px 18px;
  transition: all 0.2s ease;
  border: 3px solid #552da8;
  border-radius: 50px;
  background: #552da8;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  border-radius: 50px;
  background: white;
  width: 45px;
  height: 45px;
  transition: all 0.8s ease;
}

.cta span {
  position: relative;
  font-family: Montserrat;
  font-size: 18px;
  color: white;
  font-weight: 400;
  letter-spacing: 0.05em;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: white;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.5s ease;
}

.cta:hover:before {
  width: 100%;
  background: #1c1c1c;
}

.cta:hover svg {
  transform: translateX(0);
  transition: all 2s ease;
}

.cta:active {
  transform: scale(0.95);
  transition: all 2s ease;
}

`;

export default ContactButton;
>>>>>>> bde21574f1da4def6241182f8181b80fe5f83497
