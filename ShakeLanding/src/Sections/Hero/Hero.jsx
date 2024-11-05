import React from 'react'
import s from './Hero.module.css'
import svg from '../../assets/index'
import images from '../../assets/landingImages/index'
const Hero = () => {
  return (
    <section className={s.container}>
      <div className={s.logoWrap}>
        <img src={svg.logo} alt="logo" />
      </div>
      <div className={s.wrap}>
      <div className={s.heroCardsWrap}>
        <div className={s.firstBorderWrap}>
          <div className={s.firstImageWrap}>
            <img
              className={s.heroImg}
              src={images.tournament1}
              alt="shake run"
            />
          </div>
        </div>
        <div className={s.secondBorderWrap}>
          <div className={s.secondImageWrap}>
            <img
              className={s.heroImg}
              src={images.tournament2}
              alt="shake run"
            />
          </div>
        </div>
        <div className={s.thirdBorderWrap}>
          <div className={s.thirdImageWrap}>
            <img
              className={s.heroImg}
              src={images.tournament3}
              alt="shake run"
            />
          </div>
        </div>
      </div>
      <div className={s.contentWrap}>
        <h1 className={s.title}>Shake, Play, Earn! 💰</h1>
        <p className={s.descr}>
          Shake your phone, complete tasks and earn coins! Upgrade yourself and
          show who is the boss in the rating!
        </p>
        <button className={s.button}><a href='https://t.me/shakeupgamebot' target='_blank'>Play on Telegram</a></button>
      </div>
      </div>
    </section>
  )
}

export default Hero
