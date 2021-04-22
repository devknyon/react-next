import style from '../pages/assets/style/repositorio-de-imagens.webflow.module.css'
import web from '../pages/assets/style/webflow.module.css'

function Home () {

    return <body className={style.body}>
    <div className={style.main}>
      <div className={style.news}>
        <div className={style.newquizes}>News</div>
        <div className={style.newdiv}>
          <a href="/produtos/1" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
          <a href="/produtos/2" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
          <a href="/produtos/3" className={style.linkcard}>
            <div className={style.newscard}>
              <h1 className={style.namequiz}>Name Quiz</h1>
              <div className={style.newimage}></div>
            </div>
          </a>
          <a href="/produtos/4" className={style.linkcard}>
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