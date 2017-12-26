import React from 'react'
import Link from 'gatsby-link'

import pic00 from '../images/portfolio00.gif'
import pic01 from '../images/portfolio01.jpg'
import pic02 from '../images/portfolio02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic00} alt="" />
          </span>
          <h3>
            Kekocho<span>
              {' '}
              <a href="http://kekocho.herokuapp.com">Live</a>
            </span>
            <span> </span>
            <span>
              <a href="https://www.github.com/muratcakmak/kekocho">Repo</a>
            </span>
          </h3>
          <div style={{ fontStyle: 'italic' }}>
            Single-page web application for asking and answering questions
            inspired by Quora created using Ruby on Rails, Redux, and React
          </div>
          <ul>
            <li>
              Secured user data using BCrypt for password hashing and
              SecureRandom for session tokens with a customized authentication
              system
            </li>
            <li>
              Combined multiple AJAX requests to optimize data-fetching costs
            </li>
          </ul>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>
            Canak Okey<span>
              {' '}
              <a href="https://itunes.apple.com/us/app/%C3%A7anak-okey/id536523082?mt=8">
                Available on App Store
              </a>
            </span>
          </h3>
          <div style={{ fontStyle: 'italic' }}>
            A digital version of the traditional Middle Eastern board game
            created using Objective-C and Swift{' '}
          </div>
          <ul>
            <li>
              Created new profile screen, enabled gamification with implementing
              achievements which increased the user retention by 10%, built
              animations to enhance UX. Objective-C; Swift
            </li>
            <li>
              Used CoreData, SpriteKit. XIBs, 3d Touch, and UIKit animations to
              develop achievements, in-app-purchases, and campaigns
            </li>
          </ul>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>
            101 Canak Okey<span>
              {' '}
              <a href="https://itunes.apple.com/us/app/101-y%C3%BCzbir-okey-%C3%A7anak/id616709551?mt=8">
                Available on App Store
              </a>
            </span>
          </h3>
          <div style={{ fontStyle: 'italic' }}>
            Innovative board game implemented in Objective-C{' '}
          </div>
          <ul>
            <li>
              Created new profile screen, enabled gamification with implementing
              achievements which increased the user retention by 10%, built
              animations to enhance UX. Objective-C; SwiftIntegrated animations,
              gamification techniques, and achievement, and other social
              interactions into ‘Okey 101’, and helped boost ARPPU by 35% for
              three months
            </li>
            <li>
              Implemented freemium chat between players via plain sockets;
              Utilized CoreData to persist data; Used push notification to
              inform players
            </li>
            <li>
              Updated login with modern practice and implemented login via
              Facebook
            </li>
          </ul>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          {/*
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          */}
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/omuratcakmak"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@oguzhancakmak"
                className="icon fa-medium"
              >
                <span className="label">Medium</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/omc345" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            {/*
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            */}
            <li>
              <a
                href="https://www.instagram.com/oghmuch/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/muratcakmak"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
