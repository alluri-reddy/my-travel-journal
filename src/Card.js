import React from "react"
export default function Card(props){
    return(
        <div class="card">
            <div className="image">
                <img src={`./images/${props.item.image}`} alt=""></img>
            </div>
            <div className="inside-card-part2">
                    <div className="first-detail">
                        <svg className="location-icon" width="10" height="13" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002M3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0" fill="#F55A5A"/>
                        </svg>
                        <p className="place">{props.item.country}</p>
                        <a className="location-link" href={props.item.locationlink}><p>View on Google Maps</p></a>
                    </div>
                    <div className="main-place-name"><h1>{props.item.mainplace}</h1></div>
                    <div className="date"><p>{props.item.dateofupload}</p></div>
                    <div className="each-place-info"><p>{props.item.discription}</p></div>
                

            </div>   
        </div>
    )
}