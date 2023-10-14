import { Box } from "@chakra-ui/react";
import useSpeech from "../keyboardShorcut/textToSpeech";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const HeaderButton = () => {


  const location = useLocation();

  const isButtonActive = (route) => location.pathname === route;




  const excelData = useSelector((state) => state.excelData.data);
  const { setSpeech, speakText, stopSpeech } = useSpeech();

  const navigate = useNavigate()
  console.log(location)

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
          <Button
            text="bar graph visualisation"
            backgroundColor={isButtonActive("/bargraph") ? "#56829a" : "#a0bad3"}
            onClick={() => handleNavigator("/bargraph")}
          />
          <Button
            text="focused typography"
            backgroundColor={isButtonActive("/focused-typography") ? "#56829a" : "#a0bad3"}
          />
          <Button
            text="statistical calculator"
            backgroundColor={isButtonActive("/statistics") ? "#56829a" : "#a0bad3"}
            onClick={() => handleNavigator("/statistics")}
          />

          <div className="dropdown">
            <Button
              text="accessibility shortcut"
              backgroundColor={isButtonActive("/shortcuts") ? "#56829a" : "#a0bad3"}
              onClick={() => handleNavigator("/shortcuts")}
            />
          </div>
          <Button text="audible bar graph insights"
          //  backgroundColor={isButtonActive("/") ? "#56829a" : "#a0bad3"} 
           />
          <Button text="visual comfort mode" backgroundColor={isButtonActive("/") ? "#56829a" : "#a0bad3"} onClick={() => handleNavigator("/")} />
          <Button text="audible statics" 
          // backgroundColor={isButtonActive("/statistics") ? "#56829a" : "#a0bad3"}
           />
          <Button text="undisturbed mode" 
          // backgroundColor={isButtonActive("/statistics") ? "#56829a" : "#a0bad3"}
           />
          <Button text="Home"  onClick={() => handleNavigator("/")} backgroundColor={isButtonActive("/") ? "#56829a" : "#a0bad3"} />
          <div className="dropdown-item">
            <Button text="readout loud" 
            backgroundColor={isButtonActive("/shortcuts") ? "#56829a" : "#a0bad3"}
             onClick={() => handleNavigator("/shortcuts")} />
          </div>
        </div>
      </Box>
    </>
  );
};

export default HeaderButton;



const Button = ({ text, backgroundColor, onClick }) => {
  return (
    <button
      style={{ background: backgroundColor || "#a0bad3" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};