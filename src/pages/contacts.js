import React from 'react'
import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { navigateTo } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactPage extends React.Component {
  state = {}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    console.log(form)
    debugger
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section>
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Contatti</h1>
            </div>
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input
                type="hidden"
                name="form-name"
                value="contact"
                onChange={this.handleChange}
              />
              <p className="is-invisible">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                  <input
                    name="name"
                    className="input"
                    type="text"
                    placeholder="e.g Alex Smith"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    name="email"
                    className="input"
                    type="email"
                    placeholder="e.g. alexsmith@gmail.com"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Messaggio</label>
                <div className="control">
                  <textarea
                    name="messaggio"
                    className="textarea"
                    placeholder="Scrivi qui"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    )
  }
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

// export const pageQuery = graphql`
//   query NewsQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `
