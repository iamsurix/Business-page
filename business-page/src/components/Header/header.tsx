
import "./header.css"
export default function Header(){
     
      return(
      <div className="flex">
         <div className="header">
            <a href="/booking-form" className="form header-left">Booking Form</a>
            <a href="/contact" className="header-right active ">Contact us</a>
         </div>
         </div>
      )
}