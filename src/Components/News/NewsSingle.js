/* eslint-disable react/style-prop-object */
import React from "react";
import "./NewsSingle.css";
import Download from "../Home/Download";
// import { UilAirplay } from '@iconscout/react-unicons'
import Button from "../Home/Utilities/Button";
import { UilInstagram } from "@iconscout/react-unicons";
// import { SiTiktok } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import Footer from "../Home/Footer";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Helmet } from "react-helmet";

function NewsSingle() {
  const buttonStyleSize = {
    width: "159px",
    height: "55px",
  };

  const buttonTextSize = {
    width: "110px",
    height: "21px",
  };

  // const color = {
  //  background: radial-gradient(
  //   circle at 33% 100%,
  //   #fed373 4%,
  //   #f15245 30%,
  //   #d92e7f 62%,
  //   #9b36b7 85%,
  //   #515ecf
  // );
  // }

  const pageTitle = "Credbevy raises unknown amount in undisclosed round funding";
  const pageUrl = "https://cred-bevy.vercel.app/NewsSingle";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:url" content={pageUrl} />
        {/* Add other Open Graph meta tags for sharing */}
      </Helmet>
      <div className="NewsSingle__Section-1">
        <div className="NewsSingle__Section-1-title">
          {pageTitle}
        </div>
        <div className="NewsSingle__Section-1-image"></div>
        <div className="NewsSingle__Section-1-socials">
          <div className="News__grid-item1-content-profile">
            <div className="News__grid-item1-content-profile-img"></div>
            <div>Oripeloye Timilehin</div>
          </div>
          <div className="social__share">
            <p>Share</p>
          </div>
          <div className="NewsSingle__Section-1-socials-icon">
            <div className="facebook-icon">
              <FacebookShareButton
                quote={"Credbevy news"}
                url={pageUrl}
              >
                <FacebookIcon size="30px" round />
              </FacebookShareButton>
            </div>
            <div className="instagram-icon">
              <UilInstagram size="30" />
            </div>
            <div className="twitter-icon">
              <TwitterShareButton url="https://www.credbevy.com/">
                <TwitterIcon size="30px" round />
              </TwitterShareButton>
            </div>
            <div className="tiktok-icon">
              <FaTiktok />
            </div>
            <div className="linkedin-icon">
              <LinkedinShareButton url="https://www.credbevy.com/">
                <LinkedinIcon size="30px" round />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
        <div className="NewsSingle__Section-1-body">
          <div className="NewsSingle__Section-1-body-text">
            {" "}
            <p>
              Africa’s financial technology (fintech) industry is coming of age.
              In the face of political and economic challenges and a global
              pandemic, fintech on the continent is booming. Between 2020 and
              2021, the number of tech startups in Africa tripled to around
              5,200 companies. Just under half of these are fintechs, which are
              making it their business to disrupt and augment traditional
              financial services.1 McKinsey analysis shows that African fintechs
              have already made significant inroads into the market, with
              estimated revenues of around $4 billion to 6 billion in 2020 and
              average penetration levels of between 3 and 5 percent (excluding
              South Africa).2 These figures are in line with global market
              leaders.3 One industry leader we spoke with commented that rather
              than a “fintech disruption”, the continent is experiencing a
              “fintech eruption”, and local and international investors are
              taking notice. African fintech is emerging as a hotbed for
              investment, with average deal sizes growing and the proportion of
              fintech funding in Africa increasing over the past year, bringing
              jobs and growth to African economies. And the story is only just
              beginning. As fintech matures, financial services on the continent
              are at an inflection point, and several African countries have a
              significant opportunity to capitalize on the momentum of recent
              years to unlock further potential in the sector. Despite a slow
              down in funding in line with global trends, we expect significant
              growth and value creation to lie ahead for the fintech industry on
              the continent. Cash is still used in around 90 percent of
              transactions in Africa, which means that fintech revenues have
              huge potential to grow. If the sector overall can reach similar
              levels of penetration to those seen in Kenya, a country with one
              of the highest levels of fintech penetration in the world, we
              estimate that African fintech revenues could reach eight times
              their current value by 2025.
            </p>{" "}
          </div>

          <div className="NewsSingle__Section-1-body-text">
            {" "}
            <p>
              African financial services are undergoing a structural shift
              McKinsey analysis estimates that Africa’s financial services
              market could grow at about 10 percent per annum, reaching about
              $230 billion in revenues by 2025 ($150 billion excluding South
              Africa, which is the largest and most mature market on the
              continent). Nimble fintech players have wasted no time in carving
              out a share of this expanding market. As the fastest growing
              startup industry in Africa, the success of fintech companies is
              being fueled by several trends, including increasing smartphone
              ownership, declining internet costs, and expanded network
              coverage, as well as a young, fast-growing, and rapidly urbanizing
              population.4 The COVID-19 pandemic has accelerated existing trends
              toward digitalization and created a fertile environment for new
              technology players, even as it caused significant hardship and
              disrupted lives and livelihoods across the continent. Our analysis
              shows that fintech players are delivering significant value to
              their customers. Their transactional solutions can be up to 80
              percent cheaper and interest on savings up to three times higher
              than those provided by traditional players, while the cost of
              remittances may be up to six times cheaper.
            </p>{" "}
          </div>

          <div className="NewsSingle__Section-1-body-text">
            {" "}
            <p>
              Africa’s financial technology (fintech) industry is coming of age.
              In the face of political and economic challenges and a global
              pandemic, fintech on the continent is booming. Between 2020 and
              2021, the number of tech startups in Africa tripled to around
              5,200 companies. Just under half of these are fintechs, which are
              making it their business to disrupt and augment traditional
              financial services.1 McKinsey analysis shows that African fintechs
              have already made significant inroads into the market, with
              estimated revenues of around $4 billion to 6 billion in 2020 and
              average penetration levels of between 3 and 5 percent (excluding
              South Africa).2 These figures are in line with global market
              leaders.3 One industry leader we spoke with commented that rather
              than a “fintech disruption”, the continent is experiencing a
              “fintech eruption”, and local and international investors are
              taking notice. African fintech is emerging as a hotbed for
              investment, with average deal sizes growing and the proportion of
              fintech funding in Africa increasing over the past year, bringing
              jobs and growth to African economies. And the story is only just
              beginning. As fintech matures, financial services on the continent
              are at an inflection point, and several African countries have a
              significant opportunity to capitalize on the momentum of recent
              years to unlock further potential in the sector. Despite a slow
              down in funding in line with global trends, we expect significant
              growth and value creation to lie ahead for the fintech industry on
              the continent. Cash is still used in around 90 percent of
              transactions in Africa, which means that fintech revenues have
              huge potential to grow. If the sector overall can reach similar
              levels of penetration to those seen in Kenya, a country with one
              of the highest levels of fintech penetration in the world, we
              estimate that African fintech revenues could reach eight times
              their current value by 2025.
            </p>{" "}
          </div>

          <div className="NewsSingle__Section-1-body-text">
            {" "}
            <p>
              African financial services are undergoing a structural shift
              McKinsey analysis estimates that Africa’s financial services
              market could grow at about 10 percent per annum, reaching about
              $230 billion in revenues by 2025 ($150 billion excluding South
              Africa, which is the largest and most mature market on the
              continent). Nimble fintech players have wasted no time in carving
              out a share of this expanding market. As the fastest growing
              startup industry in Africa, the success of fintech companies is
              being fueled by several trends, including increasing smartphone
              ownership, declining internet costs, and expanded network
              coverage, as well as a young, fast-growing, and rapidly urbanizing
              population.4 The COVID-19 pandemic has accelerated existing trends
              toward digitalization and created a fertile environment for new
              technology players, even as it caused significant hardship and
              disrupted lives and livelihoods across the continent. Our analysis
              shows that fintech players are delivering significant value to
              their customers. Their transactional solutions can be up to 80
              percent cheaper and interest on savings up to three times higher
              than those provided by traditional players, while the cost of
              remittances may be up to six times cheaper.
            </p>
          </div>
          <div>
            Heading for further readings on the subject matter or topic of
            discussion{" "}
          </div>
          <div className="NewsSingle__Section-1-body-text">
            Africa’s financial technology (fintech) industry is coming of age.
            In the face of political and economic challenges and a global
            pandemic, fintech on the continent is booming. Between 2020 and
            2021, the number of tech startups in Africa tripled to around 5,200
            companies. Just under half of these are fintechs, which are making
            it their business to disrupt and augment traditional financial
            services.1 McKinsey analysis shows that African fintechs have
            already made significant inroads into the market, with estimated
            revenues of around $4 billion to 6 billion in 2020 and average
            penetration levels of between 3 and 5 percent (excluding South
            Africa).2 These figures are in line with global market leaders.3 One
            industry leader we spoke with commented that rather than a “fintech
            disruption”, the continent is experiencing a “fintech eruption”, and
            local and international investors are taking notice. African fintech
            is emerging as a hotbed for investment, with average deal sizes
            growing and the proportion of fintech funding in Africa increasing
            over the past year, bringing jobs and growth to African economies.
            And the story is only just beginning. As fintech matures, financial
            services on the continent are at an inflection point, and several
            African countries have a significant opportunity to capitalize on
            the momentum of recent years to unlock further potential in the
            sector. Despite a slow down in funding in line with global trends,
            we expect significant growth and value creation to lie ahead for the
            fintech industry on the continent. Cash is still used in around 90
            percent of transactions in Africa, which means that fintech revenues
            have huge potential to grow. If the sector overall can reach similar
            levels of penetration to those seen in Kenya, a country with one of
            the highest levels of fintech penetration in the world, we estimate
            that African fintech revenues could reach eight times their current
            value by 2025.
          </div>
          <div className="NewsSingle__Section-1-body-text">
            African financial services are undergoing a structural shift
            McKinsey analysis estimates that Africa’s financial services market
            could grow at about 10 percent per annum, reaching about $230
            billion in revenues by 2025 ($150 billion excluding South Africa,
            which is the largest and most mature market on the continent).
            Nimble fintech players have wasted no time in carving out a share of
            this expanding market. As the fastest growing startup industry in
            Africa, the success of fintech companies is being fueled by several
            trends, including increasing smartphone ownership, declining
            internet costs, and expanded network coverage, as well as a young,
            fast-growing, and rapidly urbanizing population.4 The COVID-19
            pandemic has accelerated existing trends toward digitalization and
            created a fertile environment for new technology players, even as it
            caused significant hardship and disrupted lives and livelihoods
            across the continent. Our analysis shows that fintech players are
            delivering significant value to their customers. Their transactional
            solutions can be up to 80 percent cheaper and interest on savings up
            to three times higher than those provided by traditional players,
            while the cost of remittances may be up to six times cheaper.
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter-content">
          <div className="newsletter-content-title">
            Subscribe to our Newsletter
          </div>
          <div className="newsletter-content-search">
            <div className="newsletter__searchbar">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="nav__btn">
              <Button
                className="newsletter-subscribe-btn__container"
                buttonTextStyle={buttonTextSize}
                buttonStyle={buttonStyleSize}
                label={"Subscribe"}
              />
            </div>
          </div>
          <div className="newsletter-content-footer">
            Expertly curared emails that adds value to you
          </div>
        </div>
      </div>

      <div className="newssingle__related-articles">
        <div className="related-articles-content">
          <div className="newssingle__related-articles-title">
            Related Article{" "}
          </div>
          <div className="newssingle__related-articles-content">
            <div className="newssingle__related-articles-content1">
              <div className="newssingle__related-articles-content-img"></div>
              <div className="newssingle__related-articles-content-title">
                Credbevy raises unknown amount in indisclosed round
              </div>
              <div className="newssingle__related-articles-content-body">
                News related to Credbevy all around the world gathered here.
                News related to Credbevy all around the world gathered hereNews
                related to Credbevy all around the world gathered here.......
              </div>
              <div className="News__grid-item-content-profile">
                <div className="News__grid-item-content-profile-img"></div>
                <div>Oripeloye Timilehin</div>
              </div>
            </div>

            <div className="newssingle__related-articles-content1">
              <div className="newssingle__related-articles-content-img"></div>
              <div className="newssingle__related-articles-content-title">
                Credbevy raises unknown amount in indisclosed round
              </div>
              <div className="newssingle__related-articles-content-body">
                News related to Credbevy all around the world gathered here.
                News related to Credbevy all around the world gathered hereNews
                related to Credbevy all around the world gathered here.......
              </div>
              <div className="News__grid-item-content-profile">
                <div className="News__grid-item-content-profile-img"></div>
                <div>Oripeloye Timilehin</div>
              </div>
            </div>

            <div className="newssingle__related-articles-content1">
              <div className="newssingle__related-articles-content-img"></div>
              <div className="newssingle__related-articles-content-title">
                Credbevy raises unknown amount in indisclosed round
              </div>
              <div className="newssingle__related-articles-content-body">
                News related to Credbevy all around the world gathered here.
                News related to Credbevy all around the world gathered hereNews
                related to Credbevy all around the world gathered here.......
              </div>
              <div className="News__grid-item-content-profile">
                <div className="News__grid-item-content-profile-img"></div>
                <div>Oripeloye Timilehin</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Download />
      <Footer />
    </>
  );
}

export default NewsSingle;
