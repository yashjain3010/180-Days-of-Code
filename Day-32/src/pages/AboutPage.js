import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to Comfy sloth, your ultimate destination
            for seamless online shopping! At comfy sloth, we
            strive to redefine your shopping experience, offering a vast
            selection of high-quality products conveniently accessible at your
            fingertips. Our mission is to provide unparalleled customer
            satisfaction through an intuitive platform, secure transactions, and
            prompt delivery. Whether you're searching for the latest fashion
            trends, innovative gadgets, or household essentials, we've got you
            covered. With a commitment to excellence and a passion for
            innovation, we're dedicated to making your shopping journey
            effortless and enjoyable. Join us today and discover the ease and
            joy of shopping online with comfy sloth!
          </p>
        </article>
      </Wrapper>
    </main>
  );
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
