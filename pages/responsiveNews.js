import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'

export default () => (
  <div>
  <HeaderLayout/>
  <Layout>
  <body>
  <header className="masthead">
    <div className="wrapper">
      <h1>Important News</h1>

    </div>
  </header>

  <nav role="navigation" className="navbar">
    <div className="wrapper">
      <ul className="navlist">
        <li><a href="#">Home</a></li>
        <li><a href="#">World</a></li>
        <li><a href="#">Local</a></li>
        <li><a href="#">Sports</a></li>
      </ul>
    </div>
  </nav>
  <main className="wrapper">

    <section className="subcategory">
      <div className="row">
        <header className="col subcategory-header">
          <h2>Lorem ipsum</h2>
        </header>
        <div className="col subcategory-content">
          <div className="row row-quartet">
            <div className="col subcategory-featured">
              <article className="story">
                <img src="http://placehold.it/600x300" alt="Dummy image"/>
                <h3><a href="#">Cras suscipit nec leo id.</a></h3>
                <p>Autem repudiandae aliquid tempora quos reprehenderit architecto, sequi repellat.</p>
              </article>
            </div>
            <div className="col">
              <article className="story">
                <img src="http://placehold.it/600x300" alt="Dummy image"/>
                <h3><a href="#">Perferendis, ipsam!</a></h3>
                <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
              </article>
            </div>
            <div className="col">
              <article className="story">
                <img src="http://placehold.it/600x300" alt="Dummy image"/>
                <h3><a href="#">Curabitur mattis purus nec velit.</a></h3>
                <p>Neque magnam vero obcaecati facere nobis sint dolore accusamus vitae consequuntur ad necessitatibus, laborum molestiae.</p>
              </article>
            </div>
          </div>
          <ul className="row row-quartet row-wrapping">
            <li className="col">
              <div className="story">
                <h3><a href="#">Perferendis, ipsam! Dolor sit amet consectetur</a></h3>
              </div>
            </li>
            <li className="col">
              <div className="story">
                <h3><a href="#">Aliquam mattis eros id posuere.</a></h3>
              </div>
            </li>
            <li className="col">
              <div className="story">
                <h3><a href="#">Proin leo felis, semper nec</a></h3>
              </div>
            </li>
            <li className="col">
              <div className="story">
                <h3><a href="#">Aliquam vitae risus tortor. Sed!</a></h3>
              </div>
            </li>
            <li className="col">
              <div className="story">
                <h3><a href="#">Perferendis, ipsam!</a></h3>
              </div>
            </li>
            <li className="col">
              <div className="story">
                <h3><a href="#">Aliquam mattis eros id posuere.</a></h3>
              </div>
            </li>
            <li className="col">
              <div className="story">
                <h3><a href="#">Proin leo felis, semper nec</a></h3>
              </div>
            </li>
            <li className="col">
              <div className="story">
                <h3><a href="#">Aliquam vitae risus tortor. Sed!</a></h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>

</body>

    <style jsx>{`

/* grid styling */

/**
* [1] Remove list-style and default padding, in case any 
*     columns are actually <li> items.
* [2] Negative margin equal to 1/2 gutter width.
*/
.row {
list-style: none; /* [1] */
padding: 0; /* [1] */
margin: 0 -.6875em; /* [2] */
}
/**
* Make sure rows contain floats.
*/
.row:after {
content: '';
display: block;
clear: both;
}
/**
* [1] Set font-size to 0 to counteract the white-space issue with
*     inline-block children.
* [2] Set the negative margin in px as a "good-enough" fallback for IE8 (see 3)
* [3] Set the negative margin in rems instead of ems as the font-size is 0.
*/
.row-wrapping {
font-size: 0; /* [1] */
margin: 0 -11px; /* [2] */
margin: 0 -.6875rem; /* [3] */
}
/**
* Children of wrapping rows are inline blocks.
* [1] Set the font-size in as a fallback for browsers without rem support 
*     e.g. IE8. (see 2)
* [2] Set the font size using rems since font-size on parent is 0.
*/
.row-wrapping > .col {
float: none;
vertical-align: top;
display: inline-block;
font-size: 16px;
font-size: 1rem;
}
/**
* [1] Set columns to float/100% width by default, despite not needing to for 
*     for single-column layouts. That way, we don't need to decide at which
*     breakpoint the column starts floating.
*/
.col {
-moz-box-sizing: border-box;
     box-sizing: border-box;
padding: 0 .6875em 1.375em;
float: left; /* [1] */
width: 100%; /* [1] */
}
/**
* If flexbox wrapping is supported, it will be automatically taken care of
* at the various breakpoints.
*/
.flexwrap .row {
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
}

/** 
* Set columns as flexbox column containers, to enable equal height columns
* on wider screens later, if wrapping is supported.
*/
.flexwrap .col {
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
}
.flexwrap .col > * {
-webkit-flex: 1;
-ms-flex: 1 0 auto;
flex: 1;
}
@media only screen and (min-width: 35em) {
.row-quartet > * {
  width: 50%;
}
.subcategory-featured {
  width: 100%;
}
}
@media only screen and (min-width: 50em) {
.row-quartet > * {
  width: 25%;
}
.subcategory-featured {
  width: 50%;
}

}
@media only screen and (min-width: 70em) {
.subcategory-header {
  width: 20%;
}
.subcategory-content {
  width: 80%;
}
}

.col:last-child {
float: right;
}
/* content styling */

.subcategory {
margin-top: 1.5em;
border-bottom: 1px solid #8e3339;
}


.story {
padding: .6875em;
background-color: #eee;
}
.story + .story {
margin-top: 1.375em;
}
.story img {
width: 100%;
}
`}</style>

  </Layout>
  </div>
)