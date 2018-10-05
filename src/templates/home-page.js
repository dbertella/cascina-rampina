import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

export const HomePageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing
}) => (
  <section className="section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <div
              className="full-width-image-container margin-top-0"
              style={{ backgroundImage: `url(${image})` }}
            >
              <h2
                className="has-text-weight-bold is-size-1"
                style={{
                  boxShadow: '0.5rem 0 0 #95C11F, -0.5rem 0 0 #95C11F',
                  backgroundColor: '#95C11F',
                  color: 'white',
                  padding: '1rem'
                }}
              >
                {title}
              </h2>
            </div>
            <div className="columns">
              <div className="column is-7">
                <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                <p>{description}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <section className="section">
                  <a
                    href={intro.link}
                    className="has-text-centered"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="" src={intro.image} />
                  </a>
                  <p>{intro.text}</p>
                </section>
              </div>
            </div>
            <div className="columns">
              <div className="column is-7">
                <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
                <p>{main.description}</p>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={main.image1.image}
                        alt={main.image1.alt}
                      />
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={main.image2.image}
                        alt={main.image2.alt}
                      />
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <img
                      style={{ borderRadius: '5px' }}
                      src={main.image3.image}
                      alt={main.image3.alt}
                    />
                  </article>
                </div>
              </div>
            </div>
            <Testimonials testimonials={testimonials} />
            <div
              className="full-width-image-container"
              style={{ backgroundImage: `url(${fullImage})` }}
            />
            <h2 className="has-text-weight-semibold is-size-2">{pricing.heading}</h2>
            <p className="is-size-5">{pricing.description}</p>
            <Pricing data={pricing.plans} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

HomePageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    image: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array
  })
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          image
          link
          text
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            image
          }
        }
      }
    }
  }
`
