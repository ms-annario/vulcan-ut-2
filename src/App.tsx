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
          <h1>ค้นหาเขต</h1>
          <Combobox
            defaultValue=""
            data={[
              "0: เขตคลองเตย",
              "1: เขตบางรัก",
              "2: เขตยานนาวา",
              "3: เขตคลองสาน",
              "4: เขตคลองตัน",
              "5: เขตบางขุนเทียน",
              "คลองเตย",
              "บางรัก",
              "ยานนาวา",
              "คลองสาน",
              "คลองตัน",
              "บางขุนเทียน",
            ]}
          />
        </div>
        <div className="align-left">
          <h1>ค้นหาหน่วยงาน</h1>
          <Combobox
            defaultValue=""
            data={[
              "0: สำนักงานเขต",
              "1: โรงพยาบาล",
              "2: การไฟฟ้าและการประปา",
              "3: ไปรษณีย์",
              "4: การประปา",
              "5: ขยะและสิ่งปฏิกูล",
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
              "0: เบอร์โทรศัพท์",
              "1: สอบถามบริการ",
              "2: ข้อมูลทั่วไป",
              "3: ตัวอย่างเหตุการณ์ที่หน่วยงานรับผิดชอบ",
              "เบอร์โทรศัพท์",
              "สอบถามบริการ",
              "ข้อมูลทั่วไป",
              "ตัวอย่างเหตุการณ์ที่หน่วยงานรับผิดชอบ",
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
