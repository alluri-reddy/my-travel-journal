import React from "react"
export default function Card(props){

    
    
    const [heartnum,setheartnum]=React.useState(0)
    const [heartbool,setheartbool]=React.useState(true)
    function heartclick(){
        setheartbool(prev=> !prev)
        heartbool?setheartnum(prev=> prev + 1):setheartnum(prev=> prev - 1)
    }

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
                
                     {/* <svg className="heart" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0631 2.38809C17.0198 0.530554 13.8575 0.681137 12 2.72442L10.6997 4.15476L9.3994 2.72442C7.54187 0.681137 4.37962 0.530554 2.33634 2.38809C0.293048 4.24562 1.1997 8.08778 2 9.45115C2.8003 10.8145 7.05401 16.2265 10.6997 19.0208M19.0631 2.38809C20.6997 4.15475 20.1203 7.76045 19.0631 9.45115M19.0631 2.38809C20.6997 4.15475 19.9386 7.65959 19.0631 9.45115M19.0631 9.45115C16.1439 14.1193 14.3687 15.8123 10.6997 19.0208M19.0631 9.45115C18.1997 11.2178 14.6997 16.0271 10.6997 19.0208" stroke="#D21818"/>
                    </svg>
                    <svg className="heart-full" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63663 1.8003C3.67992 -0.0572301 6.84216 0.0933527 8.6997 2.13664L10 3.56697L11.3003 2.13664C13.1578 0.0933527 16.3201 -0.0572301 18.3634 1.8003C20.4067 3.65784 20.5572 6.82008 18.6997 8.86337C15.8485 13.0522 13.8415 15.1112 10 18.818C6.33215 15.4842 4.3543 13.4978 1.3003 9.24831C-0.557238 7.20502 -0.406655 3.65784 1.63663 1.8003Z" fill="#E31C1C"/>
                    </svg>  */}
                    <div className="heartsymbol-div" onClick={heartclick}>
                        {heartbool?<svg className="heart" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0631 2.38809C17.0198 0.530554 13.8575 0.681137 12 2.72442L10.6997 4.15476L9.3994 2.72442C7.54187 0.681137 4.37962 0.530554 2.33634 2.38809C0.293048 4.24562 1.1997 8.08778 2 9.45115C2.8003 10.8145 7.05401 16.2265 10.6997 19.0208M19.0631 2.38809C20.6997 4.15475 20.1203 7.76045 19.0631 9.45115M19.0631 2.38809C20.6997 4.15475 19.9386 7.65959 19.0631 9.45115M19.0631 9.45115C16.1439 14.1193 14.3687 15.8123 10.6997 19.0208M19.0631 9.45115C18.1997 11.2178 14.6997 16.0271 10.6997 19.0208" stroke="#D21818"/>
                        </svg>: <svg className="heart-full" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63663 1.8003C3.67992 -0.0572301 6.84216 0.0933527 8.6997 2.13664L10 3.56697L11.3003 2.13664C13.1578 0.0933527 16.3201 -0.0572301 18.3634 1.8003C20.4067 3.65784 20.5572 6.82008 18.6997 8.86337C15.8485 13.0522 13.8415 15.1112 10 18.818C6.33215 15.4842 4.3543 13.4978 1.3003 9.24831C-0.557238 7.20502 -0.406655 3.65784 1.63663 1.8003Z" fill="#E31C1C"/>
                        </svg>}
                    </div>
                    

                    <h3 className="likes_numbers">{heartnum}</h3>


            </div>   
        </div>
    )
}