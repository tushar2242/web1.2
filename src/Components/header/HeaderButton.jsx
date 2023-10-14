import { Box } from "@chakra-ui/react";
import useSpeech from "../keyboardShorcut/textToSpeech";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";



const HeaderButton = () => {
  const excelData = useSelector((state) => state.excelData.data);
  const { setSpeech, speakText, stopSpeech } = useSpeech();

  const navigate = useNavigate()

  function handleNavigator(val) {
    navigate(val);
  }


  const handleKeyPress = (event) => {
    if (event.key === "f") {
      // console.log('f')
      speakText(2); // Trigger female voice speech
    }
    if (event.key === "m") {
      speakText(1); // Trigger female voice speech
    }
    if (event.key === "b") {
      stopSpeech(); // Trigger voice stop
    }
    if (event.ctrlKey && event.key === 'b') {
      // Handle Ctrl + B for bar chart
      navigate('/bargraph')
    }
    if (event.key === 'h') {
      // h for bar chart
      navigate('/')
    }
    if (event.key === 's') {
      // h for bar chart
      navigate('/statistics')
    }
  };



  useEffect(() => {
    if (excelData.length > 0) {
      setSpeech(JSON.stringify(excelData));

      document.addEventListener("keydown", handleKeyPress);
      // setSpeech('Please Drag a Excel Sheet')

    }

    else {

      setSpeech('Please Drag a Excel Sheet')
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("keydown", handleKeyPress);
    };


  }, []);

  return (
    <>

      <Box className="">
        <div className="topButtons navbar">
          <button style={{ background: "#a0bad3" }} onClick={() => {
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
