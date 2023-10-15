import { useNavigate } from "react-router-dom";
import ListComp from "../ListComp/ListComp";
import HeaderButton from "../header/HeaderButton";
import useSpeech from "../keyboardShorcut/textToSpeech";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";



const Shorcuts = () => {

    const excelData = useSelector((state) => state.excelData.data);
    const [speechSynthesis, setSpeechSynthesis] = useState(null);
    const { stopSpeech } = useSpeech();

    const navigate = useNavigate()
    // console.log(location)


    // Function to speak text
    const speakText = (text, voiceIndex) => {
        const cleaned = text.replace(/[^a-zA-Z0-9\s]/g, "");
        if (speechSynthesis) {
            const voices = speechSynthesis.getVoices();
            const utterance = new SpeechSynthesisUtterance(cleaned);
            utterance.voice = voices[voiceIndex];
            speechSynthesis.speak(utterance);
        }
    };


    const handleKeyPress = (event) => {
        if (event.key === "f") {
            // console.log(JSON.stringify(excelData))
            const limitedData = excelData.slice(0, 100); // Extract the first 100 rows of data
            const jsonLimitedData = JSON.stringify(limitedData);
            // setSpeech(jsonLimitedData)
            // console.log('f')
            speakText(jsonLimitedData, 2); // Trigger female voice speech
        }
        if (event.key === "m") {
            const limitedData = excelData.slice(0, 100); // Extract the first 100 rows of data
            const jsonLimitedData = JSON.stringify(limitedData);
            // setSpeech(jsonLimitedData)
            // console.log('f')
            speakText(jsonLimitedData, 1);
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
        // console.log(name)
        setSpeechSynthesis(window.speechSynthesis);

        console.log('fired')
        // setSpeech(JSON.stringify(excelData));

        // setSpeech('Please Drag a Excel Sheet')

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener("keydown", handleKeyPress);
        };


    }, [excelData]);





    return (
        <>
            <HeaderButton name="spring1" />
            <div className="container-he">
                <ol className='list-style-ol mt-4' >
                    <li>Home Press H</li>
                    <li>Female Read Loud Press F</li>
                    <li>Male Voice Loud Press M</li>
                    <li>ShortCuts Press S</li>
                    <li>Statistical Calculator Ctrl+S</li>
                    <li>Bar Graph Visualization B</li>
                </ol>
            </div>
        </>
    )
}

export default Shorcuts