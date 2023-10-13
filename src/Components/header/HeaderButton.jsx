import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HeaderButton = () => {
  const navigate = useNavigate();

  function handleNavigator(val) {
    navigate(val);
  }

  return (
    <>

      <Box className="">
        <div className="topButtons navbar">
          <button style={{ background: "#a0bad3" }}   onClick={() => {
              handleNavigator("/bargraph");
            }}>
            bar graph visualisation
          </button>
          <button style={{ background: "#a0bad3" }}>focused typography</button>
          <button
            style={{ background: "#a0bad3" }}
            onClick={() => {
              handleNavigator("/statistics");
            }}
          >
            statistical calculater
          </button>
          {/* <button
          style={{ background: "#a0bad3" }}
       
        >
          statistical clarity
        </button> */}

          <div className="dropdown">
            <button
              className="btn dropdown-toggle text-light"
              style={{
                background: "#a0bad3",
                fontSize: "13px",
                fontWeight: "600",
              }}
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"

              onClick={() => {
                handleNavigator("/shortcuts");
              }}
            >
              accessibility shortcut
            </button>
            {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Press F for female voice
              </a>
              <a className="dropdown-item" href="#">
                Press M for Male voice
              </a>
              <a className="dropdown-item" href="#">
                Press B for Stop
              </a>
            </div> */}
          </div>
          <button style={{ background: "#a0bad3" }}>
            audible bar graph insights
          </button>
          <button style={{ background: "#a0bad3" }} onClick={() => {
            handleNavigator("/");
          }}>visual comfort mode</button>
          <button style={{ background: "#a0bad3" }}>audible statics</button>
          <button style={{ background: "#a0bad3" }}>undisturbed mode</button>
          <button style={{ background: "#a0bad3" }} onClick={() => {
            handleNavigator("/");
          }}>Home</button>
          {/* <button style={{ background: "#a0bad3" }}>read out aloud</button> */}

          <div className="dropdown-item">
            <button style={{ background: "#a0bad3" }} onClick={() => {
                handleNavigator("/shortcuts");
              }}>readout loud</button>
          </div>
        </div>
      </Box>
      
    </>
  );
};

export default HeaderButton;
