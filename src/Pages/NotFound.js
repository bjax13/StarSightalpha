import React, { Component } from 'react';
import styled from '@emotion/styled';
import Particles from 'react-particles-js';
import Astronaut from '../Assets/Astronaut';
import Planet from '../Assets/Planet';

const particalParams = {
  particles: {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.17,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
 }
}

const ButtonHome = styled.button`
  background: none;
  color: #fff;
  padding: 12px 0px 10px 0px;
  border: 1px solid #fff;
  outline: none;
  border-radius: 7px;
  width: 150px;
  font-size: 15px;
  text-align: center;
  margin: 0 auto;
  vertical-align: middle;
  display: block;
  margin-bottom: 40px;
  margin-top: 25px;
  font-family: "Dosis", sans-serif;
  font-weight: 400;

  :hover {
    color: #ffbb39;
    border-color: #ffbb39;
    cursor: pointer;
    opacity: 1;
  }
`;
const PermissionDenied = styled.div`
  width: 100vw;
  height: 100vh;
  display: inline-block;
  margin: 0px;
  background: #24344c;

  a {
    text-decoration: none;
  }

  h1 {
    text-align: center;
    color: #fff;
    font-family: "Dosis", sans-serif;
    font-size: 100px;
    margin-bottom: 0px;
    font-weight: 800;
  }

  h3 {
    text-align: center;
    color: #fff;
    font-size: 19px;
    line-height: 23px;
    max-width: 330px;
    margin: 0px auto 30px auto;
    font-family: "Dosis", sans-serif;
    font-weight: 400;
  }

  h3 span {
    position: relative;
    width: 65px;
    display: inline-block;
  }

  h3 span:after {
    content: "";
    border-bottom: 3px solid #ffbb39;
    position: absolute;
    left: 0;
    top: 43%;
    width: 100%;
  }
  .stars {
    animation: sparkle 1.6s infinite ease-in-out alternate;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 75px;
    }
    h3 {
      font-size: 16px;
      width: 200px;
      margin: 0 auto;
      line-height: 23px;
    }
    h3 span {
      width: 60px;
    }
    .astronaut {
      width: 35px;
      right: 40px;
      top: 170px;
    }
  }
`;
const PermissionDeniedWrapper = styled.div`
  max-width: 390px;
  width: 100%;
  height: 390px;
  display: block;
  margin: 0 auto;
  position: relative;
  margin-top: 8vh;
`;

const ParticlesStyled = styled(Particles)`
  width: 100vw;
  height: 100vh;
  display: inline-block;
  margin: 0px !important;
  position: fixed !important;
  opacity: 0.23;
`;

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Dosis:300,400,700,800");

  .st1{fill:#504E55;}
  .st2{fill:#F39E72;}
  .st3{fill:#FFFFFF;}
  .st4{opacity:0.24;}
  .st5{fill:#77574E;}
  .st6{fill:#FBD68D;}
  .st9{fill:#CFC9E5;}
  .st10{opacity:0.28;}
  .st11{opacity:0.25;}
  .st12{fill:#6F635C;}
  .st13{fill:#DAE7BE;}
  .st15{fill:#5F5E60;}
  .st17{fill:#EBE9F5;}
  .st18{fill:#53515A;}
  .st19{opacity:0.42;}
  .st20{fill:#53515B;

  @keyframes sparkle {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.3;
    }
  }

  .astronaut {
    width: 43px;
    position: absolute;
    right: 20px;
    top: 210px;
    animation: spin 4.5s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  .saturn,
  .saturn-2,
  .hover {
    animation: hover 2s infinite ease-in-out alternate;
  }

  @keyframes hover {
    0% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(-3px);
    }
  }
`

class NotFound extends Component {

  render() {
    return (
      <Body>
        <PermissionDenied class="permission_denied">
          <ParticlesStyled params={particalParams}/> 
          <PermissionDeniedWrapper class="denied__wrapper">
            <h1>404</h1>
            <h3>LOST IN <span>SPACE</span>
              Hmm, looks like that page doesn't exist.</h3>
            <Astronaut/>
            <Planet/>
            <a href="#"><ButtonHome class="denied__link">Go Home</ButtonHome></a>
          </PermissionDeniedWrapper>
        </PermissionDenied>
      </Body >
    );
  }
}

export default NotFound;