import "./Footer.css";
import {PhoneOutlined, HomeOutlined, MailOutlined} from '@ant-design/icons';
export function Footer() {
  return (
    <div className="fw100 pad20 dflex mato20">
      <div className="frow w50">
        <img width={400} src="Bedeck_Black_Rust_Logo.png"></img>
        
      </div>
      <div className="frow w50">
        
        <p className="shortDis" >
          Bedeck is the top interior designing company in Ahmedabad. Our
          interior design work is exceptional and have a luxurious and modern
          look. Our expert designers are fully trained and know all types of
          modern interior design.
        </p>
      </div>
      <div className="frow w50">
        <div className="dflex"><HomeOutlined />
        <p>B/27, B/H GUJKOMASOL, NAROL, VATVA ROAD, NAROL, AHMEDABAD, GUJARAT</p></div>
      <div className="dflex"><PhoneOutlined rotate={100} />
      <p>+91-7202834432</p></div>
      <div className="dflex"><MailOutlined /><p>info@4linedesigner.com</p></div>
      
      </div>
    </div>
  );
}
