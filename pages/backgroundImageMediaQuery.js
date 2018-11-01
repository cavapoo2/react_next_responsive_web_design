import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'
import Head from 'next/head'

export default () => (
    <div>
        <Head>
            <meta charSet="UTF-8" />
            <title>Profile header with responsive background-image</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <HeaderLayout />
        <Layout>
            <body>
                <header className="profile-box" role="banner">
                    <div className="profile-photo">
                        <img src="static/profile.jpg" alt="Charles the Cat" />
                        <h1 className="username">@CharlesTheCat</h1>
                    </div>
                </header>
            </body>

            <style jsx>{`
    body {
        padding: 0;
        margin: 0;
        font-family: "Helvetica Neue", Arial, sans-serif;
      }
      .profile-box {
        position: relative;
        height: 300px;
        background-size: cover;
        background-position: 50% 50%;
        background-image: url(static/small-cat.jpg);
      }
      @media only screen and (min-width: 600px) {
        .profile-box {
          height: 600px;
          background-image: url(static/big-cat.jpg);
        }
      }
      .profile-photo {
        width: 160px;
        min-height: 200px;
        position: absolute;
        bottom: -60px;
        left: 5%;
        padding: .5em;
        -webkit-border-radius: .5em;
                border-radius: .5em;
        background-color: #fff;
        box-shadow: .25em .25em .5em rgba(0, 0, 0, 0.3);
      }
      .profile-photo img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      .username {
        font-size: 20px;
        color: #666;
        margin: .35em 0 0;
      }
  
    `} </style>

        </Layout>
    </div>
)