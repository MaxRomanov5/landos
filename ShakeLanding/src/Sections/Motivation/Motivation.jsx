import React,{useState} from 'react'
import s from './Motivation.module.css'
import images from '../../assets/landingImages/index'
import svg from '../../assets/index'
const Motivation = () => {
  const gifImage = svg.trophy;
  const staticImage = svg.trophyPng;
  const [imageSrc, setImageSrc] = useState(staticImage);

  return (
    <section className={s.section} onMouseEnter={() => setImageSrc(gifImage)}
    onMouseLeave={() => setImageSrc(staticImage)}>
        <div className={s.container}>
      <div className={s.cardWrap}>
        <div className={s.card}>
          <div className={s.imagesContainer}>
            <div className={s.firstImgWrap}>
              <img
                className={s.img}
                src={images.tournament1}
                alt="shake"
              />
              <img className={s.medalOne} src={imageSrc} alt="" />
            </div>
            <div className={s.secondImgWrap}>
              <img
                className={s.img}
                src={images.tournament2}
                alt="shake"
              />
              <img className={s.medalTwo} src={svg.secondMedal} alt="" />
            </div>
            <div className={s.thirdImgWrap}>
              <img
                className={s.img}
                src={images.tournament3}
                alt="shake"
              />
              <img className={s.medalThree} src={svg.thirdMedal} alt="" />
            </div>
          </div>
          <div className={s.textWrap}>
          <h2 className={s.title}>Become a leaderboard champion</h2>
          <p className={s.descr}>Shake your phone, complete tasks and earn coins! Upgrade yourself and show who is the boss in the rating!</p>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Motivation
