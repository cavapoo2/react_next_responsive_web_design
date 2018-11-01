import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'
import Head from 'next/head'

export default () => (
    <div>
        <Head>
            <meta charSet="UTF-8" />
            <title>Multi-column responsive text</title>
        </Head>
        <HeaderLayout />
        <Layout>
            <body>
                <div className="multicol">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis iusto sint tenetur impedit aspernatur pariatur id minima explicabo quis vitae corrupti nisi, iure, voluptatibus obcaecati porro repellat mollitia officia suscipit!</p>

                    <p>Unde repellat earum facere nam. Eligendi cupiditate sed fugiat accusantium, esse itaque rem eaque officia maxime, ex praesentium molestias, perspiciatis officiis fugit. Nemo quidem ex labore eum autem aspernatur, voluptatibus explicabo. Quisquam ipsum rerum ullam officia vel est, minus ducimus quos expedita magnam reprehenderit.</p>

                    <p>Id magni totam animi velit laborum tempore deserunt, eveniet veritatis, tempora nostrum excepturi accusantium. Reprehenderit repellat error ullam, laudantium maxime. Excepturi, delectus.</p>
                </div>

            </body>

            <style jsx>{`
    body {
      font-family: Georgia, iimes New Roman, serif;
      line-height: 1.4em;
    }
    p {
      margin: 0 0 1.4em;
    }

    .multicol {
      -webkit-column-width: 16em;
         -moz-column-width: 16em;
              column-width: 16em;
    }
 `} </style>

        </Layout>
    </div>
)