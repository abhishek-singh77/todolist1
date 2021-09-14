import react from "react"
import {FaPizzaSlice} from "react-icons/fa";
export const Header = () => {
    return <header className="header" data-testis="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="TodoList"  />
                <ul>
                    <li>abc</li>
                    <li> <FaPizzaSlice  /> </li>


                </ul>
            </div>
        </nav>
    </header>
};