import {useNavigation} from "react-router-dom";
import React from "react";

function ClickHandler() {
    const navigate = useNavigation();

    function handleCLick() {
        console.log("We gaan direct door naar de afspraken pagina!")
        navigate("/appointments");
    }

    return (
//         <button type="button" className="appointment-button"
//                 onClick={handleCLick}>
//             Maak direct uw afspraak!
//         </button>
    );
}


// export default ClickHandler;
//
// import React from "react";
// import { useHistory } from "react-router-dom";
//
// function ClickHandler() {
//     const history = useHistory();
//
//     function handleClick() {
//         console.log("We gaan direct door naar de afspraken pagina!");
//         history.push("/appointments");
//     }
//
//     return (
//         <button type="button" className="appointment-button" onClick={handleClick}>
//             Maak direct uw afspraak!
//         </button>
//     );
// }
//
// export default ClickHandler;
