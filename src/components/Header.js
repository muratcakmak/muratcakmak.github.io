import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-hand-spock-o" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Oguzhan Cakmak</h1>
        <h4>
          San Francisco, Bay Area · (917) 536-8145 ·{' '}
          <a
            href="mailto:omuratcakmak@gmail.com?Subject=Hello%20again"
            target="_top"
          >
            omuratcakmak@gmail.com
          </a>{' '}
          ·{' '}
          <a href="https://drive.google.com/file/d/1KCL3SF9q0IWP0A4Uz30uohJbQhk6axNs/view?usp=sharing">
            Resume
          </a>
        </h4>
        <p>
          Software Engineer with a demonstrated history of working in the
          internet industry. Skilled in iOS, Ruby on Rails, React Native and
          React. Strong engineering professional with a Master's degree in
          Computer Engineering.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {/*
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        */}
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        {/*<li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
          </li>*/}
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Header
