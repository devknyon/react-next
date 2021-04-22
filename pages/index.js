import style from '../pages/assets/style/repositorio-de-imagens.webflow.module.css'
import web from '../pages/assets/style/webflow.module.css'

function Home () {

    return <body className={style.body}>
    <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className={style.navb}>
      <div className={style.container}>
        <a href="index.html" aria-current="page" className={style.brand}>
          <p className={style.paragraph}>kNY DEV</p>
        </a>
        <nav role="navigation" className={style.navmenu}>
          <a href="index.html" aria-current="page" className={style.navlink}>Home</a>
        </nav>
        <div className={style.menubutton}>
          <div className={style.icon}></div>
        </div>
      </div>
    </div>
    <div className={style.main}>
      <div className={style.news}>
        <div className={style.newquizes}>News</div>
        <div className={style.newdiv}>
          <a href="#" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
          <a href="#" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
          <a href="#" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
          <a href="#" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
        </div>
      </div>
      <div className={style.news}>
        <div className={style.newquizes}>Most Popular</div>
        <div className={style.newdiv}>
          <a href="#" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
          <a href="#" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
          <a href="#" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
          <a href="#" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
        </div>
      </div>

      <footer id="footer" className={style.footer}>
        <div className={style.wcontainer}>
          <div className={style.copyright}>Copyright © 2021 KnyDev. All rights reserved.</div>
        </div>
      </footer>
    </div>
  </body>
}


export default Home