import img404 from "../../assets/images/confused_boy.png";
import letterB from "../../assets/images/letter_b.svg";
import letterC from "../../assets/images/letter_c.svg";
import letterCh from "../../assets/images/letter_ch.svg";
import letterH from "../../assets/images/letter_h.svg";
import letterI from "../../assets/images/letter_i.svg";
import letterK from "../../assets/images/letter_k.svg";
import letterLove from "../../assets/images/letter_love.svg";
import letterN from "../../assets/images/letter_n.svg";
import letterO from "../../assets/images/letter_o.svg";
import letterP from "../../assets/images/letter_p.svg";
import letterSamurai from "../../assets/images/letter_samurai.svg";
import letterT from "../../assets/images/letter_t.svg";
import letterY from "../../assets/images/letter_y.svg";
import "../../styles/styles.scss";

export default function Error404() {
  return (
    <>
      <div className="animation404Container">
        <img src={letterB} alt="Буква B" className="letter letterB"></img>
        <img src={letterC} alt="Буква C" className="letter letterC"></img>
        <img src={letterSamurai} alt="Иероглиф Самурай" className="letter letterSamurai"></img>
        <img src={letterCh} alt="Буква Ч" className="letter letterCh"></img>
        <img src={letterH} alt="Буква H" className="letter letterH"></img>
        <img src={letterI} alt="Буква I" className="letter letterI"></img>
        <img src={letterK} alt="Буква K" className="letter letterK"></img>
        <img src={letterN} alt="Буква N" className="letter letterN"></img>
        <img src={letterO} alt="Буква O" className="letter letterO"></img>
        <img src={letterLove} alt="Иероглиф Любовь" className="letter letterLove"></img>
        <img src={letterP} alt="Буква P" className="letter letterP"></img>
        <img src={letterT} alt="Буква T" className="letter letterT"></img>
        <img src={letterY} alt="Буква Й" className="letter letterY"></img>
      </div>
      <div className="img404Container">
        <img src={img404} alt="Ошибка 404" className="img404"></img>
        <p className="text404">Ой, кажется такой страницы не существует</p>
      </div>
    </>
  );
}
