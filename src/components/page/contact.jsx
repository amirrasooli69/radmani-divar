import React from 'react'
import {
  Container,
  Row,
  Col,
  Modal,
  Input,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  Card
} from "reactstrap";
import Footer from "components/Footers/Footer";
import DemoNavbar from 'components/Navbars/DemoNavbar'

export default function Contact() {
    return (
      <section className="section-contact-us">
        <DemoNavbar />
        <Container>
          <Col md={12}>
            <h2>تماس با ما</h2>
            <p>
              اگر پیشنهاد یا انتقادی دارید یا می‌خواهید ما را از وجود مشکلی در
              سیستم آگاه کنید، با رادمانی شو صحبت کنید. برای اینکار می‌توانید از
              صفحه‌ی پشتیبانی و قوانین رادمانی شو استفاده کنید.
            </p>
            <p>
              برای حذف آگهی‌هایی که با شماره‌ی موبایل یا ایمیل شما ثبت شده است،
              به صفحه‌ی مدیریت آگهی مراجعه کنید. همچنین در صورت ایجاد مزاحمت
              برای شما، می‌توانید با مراجعه به سایت پلیس فتا به آدرس
              http://www.cyberpolice.ir از اطلاعات تماس پلیس فتای محل سکونت خود
              آگاه شوید و موضوع را از آن طریق پیگیری کنید.
            </p>
            <p>
              تیم‌های فنی ما در آدرس زیر اقامت دارند، ولی متأسفانه توان میزبانی
              مراجعان حضوری را نداریم.
            </p>
            <p>
              آدرس پستی: سمنان، پاساژ شاهجویی، طبقه منفی یک 
            </p>
            <p>صندوق پستی:</p>
            <p>شماره تماس پشتیبانی: </p>
            <p>شماره تماس واحد اداری:</p>
            <br />
            <br />
            <p>فرصت‌های شغلی</p>
            <p>
              امتحان کنید، یاد بگیرید و بهتر شوید.&nbsp;
              <a href="https://radmanisho.ir/">به ما بپیوندید</a>
            </p>
            <br />
            <br />
            <br />
          </Col>
          <br />
          <br />
          <br />
        </Container>
        <Footer />
      </section>
    );
}
