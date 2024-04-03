import "./App.css";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";

function App() {
  return (
    <>
      <h1 className="topic">
        ระบบเสิร์จข้อมูล:
        สำหรับหน่วยรับเรื่องร้องเรียนและสอบถามภายในกรุงเทพมหานคร
      </h1>
      <div className="group-filter">
        <div className="align-left">
          <h1>ค้นหาเขต/ถนน/แขวง</h1>
          <Combobox
            defaultValue=""
            data={[
              "คลองเตย",
              "บางรัก",
              "ยานนาวา",
              "คลองสาน",
              "คลองตัน",
              "บางขุนเทียน",
              "ช่องนนทรี",
              "บางพลัด",
              "ประชาสงเคราะห์",
            ]}
          />
        </div>
        <div className="align-left">
          <h1>ค้นหาหน่วยงาน</h1>
          <Combobox
            defaultValue=""
            data={[
              "สำนักงานเขต",
              "โรงพยาบาล",
              "การไฟฟ้าและการประปา",
              "ปรษณีย์",
              "การประปา",
              "ขยะและสิ่งปฏิกูล",
            ]}
          />
        </div>
        <div className="align-left">
          <h1>ค้นหาประเภทข้อมูล</h1>
          <Combobox
            defaultValue=""
            data={[
              "ทั้งหมด",
              "เบอร์โทรศัพท์",
              "ที่อยู่",
              "สถานที่",
              "สอบถามบริการ",
              "ข้อมูลทั่วไป",
              "ตัวอย่างเหตุการณ์ที่หน่วยงานรับผิดชอบ",
            ]}
          />
        </div>
        <div className="align-left">
          <h1>ค้นหากิจกรรม</h1>
          <Combobox
            defaultValue=""
            data={[
              "ทำบัตรประชาชน",
              "บัตรประชาชน",
              "ทำบัตรทอง",
              "บัตรทอง",
              "จดทะเบียนสมรส",
            ]}
          />
        </div>
        <div className="align-left">
          <h1>ค้นหาจากคีย์เวิร์ด</h1>
          <Combobox defaultValue="" data={[""]} />
        </div>
      </div>
    </>
  );
}

export default App;
