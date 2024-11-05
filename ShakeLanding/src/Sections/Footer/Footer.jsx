import React,{useState} from 'react';
import s from './Footer.module.css'
import svg from '../../assets/index'
const Footer = () => {
const [inputValue, setInputValue] = useState('');
function handleEmail(e) {
    setInputValue(e.target.value)
}
    return (
        <footer className={s.section}>
            <div className={s.container}>
<h2 className={s.title}>Stay Updated with ShakeUp</h2>
<form className={s.form} action="submit">
    <input placeholder='Enter your email' onChange={handleEmail} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address" value={inputValue} className={s.input} type="email" />
    <button className={s.button}>Subscribe</button>
</form>
<ul className={s.socialList}>
<li className={s.item}>
    <a href="#" target='_blank'>
    <img className={s.img} src={svg.facebook} alt="facebook" />
    </a>
</li>
<li className={s.item}>
<a href="#" target='_blank'>
    <img className={s.img} src={svg.inst} alt="instagram" />
    </a>
</li>
<li className={s.item}>
<a href="#" target='_blank'>
    <img className={s.img} src={svg.x} alt="x" />
    </a>
</li>
</ul>
            </div>
        </footer>
    );
}

export default Footer;
