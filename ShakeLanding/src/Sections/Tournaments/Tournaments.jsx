import React from 'react';
import s from './Tournaments.module.css'
import images from '../../assets/landingImages/index'
const Tournaments = () => {
    return (
        <section className={s.section}>
            <div className={s.container}>
            <h2 className={s.title}>Upcoming Tournaments</h2>
            <ul className={s.tournaments}>
<li className={s.card}>
    <img className={s.cardImg} src={images.tournament1} alt="tournament" />
    <h3 className={s.name}>Summer Showdown</h3>
    <p className={s.date}>April 10, 2023</p>
</li>
<li className={s.card}>
    <img className={s.cardImg} src={images.tournament2} alt="tournament" />
    <h3 className={s.name}>Summer Showdown</h3>
    <p className={s.date}>April 10, 2023</p>
</li>
<li className={s.card}>
    <img className={s.cardImg} src={images.tournament3} alt="tournament" />
    <h3 className={s.name}>Summer Showdown</h3>
    <p className={s.date}>April 10, 2023</p>
</li>
<li className={s.card}>
    <img className={s.cardImg} src={images.tournament4} alt="tournament" />
    <h3 className={s.name}>Summer Showdown</h3>
    <p className={s.date}>April 10, 2023</p>
</li>
<li className={s.card}>
    <img className={s.cardImg} src={images.tournament4} alt="tournament" />
    <h3 className={s.name}>Summer Showdown</h3>
    <p className={s.date}>April 10, 2023</p>
</li>
<li className={s.card}>
    <img className={s.cardImg} src={images.tournament4} alt="tournament" />
    <h3 className={s.name}>Summer Showdown</h3>
    <p className={s.date}>April 10, 2023</p>
</li>
            </ul>
            </div>
        </section>
    );
}

export default Tournaments;
