import ListComp from "../ListComp/ListComp";
import HeaderButton from "../header/HeaderButton";



const Shorcuts = () => {
    return (
        <>
            <HeaderButton />
            <div className="container-he">
                <ol className='list-style-ol mt-4' >
                    <li>Female Read Loud Press F</li>
                    <li>Male Voice Loud Press M</li>
                    <li>ShortCuts Press S</li>
                    <li>Statistical Calculator Ctrl+S</li>
                    
                </ol>
            </div>
        </>
    )
}

export default Shorcuts