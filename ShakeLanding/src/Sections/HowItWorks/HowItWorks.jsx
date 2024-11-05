import React from 'react'
import s from './HowItWorks.module.css'
import images from '../../assets/landingImages/index'
const HowItWorks = () => {
  return (
    <section className={s.section}>
      <div className={s.titleWrap}>
      <h2 className={s.title}>How it works?</h2>
      <p className={s.descr}>
        Shake Up is more than telegram bot, it is community for future
        influencers
      </p>
      </div>
      <ul className={s.list}>
        <li className={`${s.item} ${s.active}`}>
          <p className={s.num}>01</p>
          <h3 className={s.cardTitle}>Shake the screen</h3>
          <p className={s.cardDescr}>
            Every day you get tasks. Just shake your phone and complete them to
            earn coins. The more you shake and complete, the more rewards you
            get!
          </p>
          <div className={s.ellipse}><div className={s.radiant}></div></div>
            
          <img className={s.img} src={images.controller} alt="controller" />
        </li>
        <li className={s.item}>
          <p className={s.num}>02</p>
          <h3 className={s.cardTitle}>Complete tasks</h3>
          <p className={s.cardDescr}>
            For each completed task you receive not only coins, but also the
            opportunity to rise in the ranking.
          </p>
          {/* <img className={s.img} src="" alt="" /> */}
        </li>
        <li className={s.item}>
          <p className={s.num}>03</p>
          <h3 className={s.cardTitle}>Share on social media</h3>
          <p className={s.cardDescr}>
            Post your successes on social networks and get bonuses. The more
            likes and shares, the higher your chance to get into the top
            players!
          </p>
          {/* <img className={s.img} src="" alt="" /> */}
        </li>
      </ul>
    </section>
  )
}

export default HowItWorks
