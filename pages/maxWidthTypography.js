import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'
import Head from 'next/head'

export default () => (
    <div>
        <Head>
            <meta charSet="UTF-8" />
            <title>Using the max-width media query for small-screen typography</title>
            {/*<!-- Load Open Sans Condensed & Regular from Google Fonts -->*/}
            <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700|Open+Sans:700,400' rel='stylesheet' type='text/css' />

        </Head>
        <HeaderLayout />
        <Layout>
            <body>
                <h1>This is a heading with a few words.</h1>

                <p>This is a paragraph with many many words. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore laboriosam esse distinctio tenetur ad sapiente aliquid quas consectetur eos provident, doloribus a, eum harum obcaecati, tempore iste iusto cumque porro?</p>

                <p>Another paragraph with many many words. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore laboriosam esse distinctio tenetur ad sapiente aliquid quas consectetur eos provident, doloribus a, eum harum obcaecati, tempore iste iusto cumque porro?</p>
            </body>


            <style jsx>{`
    body {
      font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.5;
    }
    @media only screen and (max-width: 37.5em) {
      h1,h2,h3,h4,h5,h6 {
        font-family: 'Open Sans Condensed', 'Arial Narrow', Arial, sans-serif;
      }
    }
  `}</style>

        </Layout>
    </div>
)