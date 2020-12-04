import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
//import Image from "../components/image"  <Image />
import SEO from "../components/seo"

//import groceryStoreInsider from "../images/gsi.jpg"
//import townMarket from "../images/townmarket-preview.jpg"
//import amCustomCreations from "../images/a-m-custom-creations.jpg"
//import personalSitev3Preview from "../images/personalsitepreview2.jpg"
//import covidProject from "../images/covid19preview.jpg"
//import storeProject from "../images/storeproject.jpg"

import ProjectsText from "../components/maintext-projects"

const ProjectsPage = ({data}) => (
  <Layout>
    <SEO title="Greg Rasmussen - Web Designer and Developer - Projects" />
    <div className="projects">
      <section className="projects noh4" id="section-one">
          <ProjectsText />
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>The Grocery Store Insider Blog</p>
                  <p>As I was hunting for ideas for a project, I checked to see if the domain <Link to="https://grocerystoreinsider.com">grocerystoreinsider.com</Link> was available. To my surprise, not only was it available, it was affordable! I snapped it up and began mocking up the site in Adobe XD and choosing design elements while beginning to create blog content for the site itself.</p>
                  <p>To create this project, I decided to build the site in WordPress, and used a blank theme template from <Link to="https://underscores.me">underscores.me</Link> and built out the various sections. Once the post pages were complete, I built out the front-page.php file, which is what the user sees when they visit the main URL of the site.</p>
                  <p>I further customzied the site by customizing the "Recent Posts" area to show images with the links, and to show differing amounts of Recent Posts depending on the user's screen size. This site is also monetized with Google Adsense and uses the Yoast SEO Plugin for Search Engine Optimization. There are no plugins that alter the look of any of the pages.</p>
                  <p><Link to="https://grocerystoreinsider.com">grocerystoreinsider.com</Link> is fully responsive and compliant with WCAG 2.0 Guidelines for accessibility. I update this site with new articles twice weekly and am maintaining this site as an ongoing project. In the future, I look to rebuild this site's theme using GatsbyJS to improve load times.</p>
              </div>
              <div className="hero-image">
                
                <Img fluid={data.groceryStoreInsider.childImageSharp.fluid} alt="Grocery Store Insider blog" />

              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>Town Market - Integrated Grocery Store Data Platform</p>
                  <p>To be able to use the data from the database in a meaningful way, I chose to simulate a store website which populated its pages using the MongoDB Data.</p>
                  <p>To achieve this in a meaningful way, using JavaScript, I wrote a code that looped through all documents in the database to display every category of merchandise. From there, I wrote another script that created a new data set from the old one, this time with only one of each department, and one of each category in each data array. At that point, another script running the forEach function would then loop through each of the keys in the new category list, and display on the page every item in the department organized by category. For instance, it would return an assortment of apples in a section titled apples, before starting to return different banana types in the banana section.</p>
                  <p>Each item in the assortment then builds out a new form on the page. If you wish to add the item to your order, you simply type in how much you’d like, and hit “add to cart”. The page also renders different wording if your item is sold by the pound or individually.</p>
                  <p>The site also adds easy navigation between categories within the department you’re in, as well as an easy way to jump to another department. It is also fully responsive and works across all devices..</p>
              </div>
              <div className="hero-image">
              <Img fluid={data.townMarket.childImageSharp.fluid} alt="Town Market Website" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>A&M Custom Creations</p>
                  <p>Not too long ago, a longtime friend approached me knowing I’d been studying Web Development and asked me if I could help her launch her new Shopify store. Having had zero experience with Shopify, yet also wanting to be of assistance, and also being able to access and learn a new platform, I agreed, and began the design work and consultation for the Shopify page of A&M Custom Creations.</p>
                  <p>First step: Building a site mock-up. I designed a rough idea of what the site could look like, and with a modification of the colour scheme, we had an idea of what the site should look like. Once it was approved, it was off to the second step: working on the code.</p>
                  <p>Building a Shopify theme isn’t just about making the current site look good, its about making sure the site looks good when the shop owner builds out a new section of his or her store, without needing to call you for assistance – it should work out of the box, so making sure that sticking to the correct variables when changing colour and font settings was paramount during the work modifying the existing theme. In addition, the shop owner requested additional options that allow customer requestions for product customization, which has been implemented through the creation of additional product templates.</p>
                  <p>A&M Custom Creations sells everything from t-shirts to key chains to backpack charms and customized mask clips. Give them a look, and them them Greg sent you! </p>
              </div>
              <div className="hero-image">
                <img src={data.amCustom.childImageSharp.fluid} alt="Grocery Store Insider blog" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>Personal Website Blog Theme</p>
                  <p>The Project Portfolio is awaiting your click.</p>
              </div>
              <div className="hero-image">
                <img src={data.personalSite.childImageSharp.fluid} alt="Grocery Store Insider blog" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>COVID-19 Data Finder</p>
                  <p>In April of 2020 – admittedly some of the earlier days of the current pandemic – I was eager to build my skills as a developer and incorporate an API into a new project. It hadn’t been my first time doing a project involving an API, but it was the first time where there would be no readily available tutorial on the subject of using this particular API for anything since the topic was so new at the time.</p>
                  <p>I decided that that was the time to build a project that allowed a user to select a country from a dropdown list of every affected country, with that data populated by looping through the country names in the API, to get further information on how the virus affected that nation in a pop-up modal, as well as to give the user information on the first 10 affected countries at a glance. This was achieved using CSS flexbox, allowing for responsive viewing across multiple screens.</p>
                  <p>This project still receives data daily as the pandemic spreads in some areas and eases in others. Overall, it serves as an informative project and makes an important addition to my portfolio.</p>
              </div>
              <div className="hero-image">
                <img src={data.covidProject.childImageSharp.fluid} alt="Grocery Store Insider blog" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>Grocery Store Shopping List Map App</p>
                  <p>When I was beginning to really sink my teeth into JavaScript, I, like many people, resorted to watching tutorials on YouTube and coded along with the videos as they were being presented. This is a great strategy when you’re learning, but not so great if you’d like to show prospective employers what you’re capable of. There are plenty of To-Do List videos on YouTube, but the To-Do List already exists – it doesn’t solve any new problems and all beginning developers have one. But what if the To-Do list could do more?</p>
                  <p>In order to learn the sorcery that is CSS element positioning, I constructed a mostly-accurate map of my current workplace, complete with aisle numbers to help with navigation. With this already constructed, I realized that a To-Do List – re-imagined as a Shopping List – and merged with the store map – could be something incredibly beneficial to many shoppers and businesses. All that would need to be done is merge the two projects into one, and create a way to search the map using your list.</p>
                  <p>Because at the time I was not making use of any databases, I created a CSS file with the co-ordinates for almost 400 items on the map, and each item name would be labelled as a class name in the CSS file. Once the list item is clicked, the page creates a new element directly overtop of where the item is in the store by calling the CSS class of the item name on the list.</p>
                  <p>Of course, only having a desktop version of this wouldn’t work too well in a store environment where you would be using a mobile device, so when the project was made responsive, the look changes – when held up in portrait view on your phone, only the list itself appears, and once the button to find the item is clicked, the user would turn the phone to landscape view, where the page view would change from a list to a map – with the arrow directly above the item. Once the user finds the item, they merely rotate the phone back to portrait orientation, cross out the item off their list, and continue on.</p>
                  <p>As an additional functionality for businesses – the page makes suggestions for products to add to the list, which change based on seasonality, day of the week, and month of the year. The user can dismiss these suggestions, or add them directly to the list.</p>
                  <p>This project also differs from any tutorial as it builds out the list from an array, rather than creating an element with each list item directly in the HTML code. It was my first somewhat-big endeavor in the web development field. It could use some upgrades, but I’m very proud of this piece, and if you shop at the store this is modeled after, I hope you find it useful.</p>
              </div>
              <div className="hero-image">
                <img src={data.storeProject.childImageSharp.fluid} alt="Grocery Store Insider blog" />
              </div>
          </div>
        </div>
      </section>
    </div>
    
    <div>
      
    </div>
  </Layout>
)

export default ProjectsPage

export const query = graphql`
    query {
      groceryStoreInsider: file(relativePath: {eq: "gsi.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      townMarket: file(relativePath: {eq: "townmarket-preview.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amCustom: file(relativePath: {eq: "a-m-custom-creations.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      personalSite: file(relativePath: {eq: "personalsitepreview2.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      covidProject: file(relativePath: {eq: "covid19preview.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      storeProject: file(relativePath: {eq: "storeproject.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `