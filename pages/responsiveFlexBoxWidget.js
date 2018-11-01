import Layout from '../components/MyLayout.js'
import HeaderLayout from '../components/HeaderLayout'
import Head from 'next/head'

export default () => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <title>Responsive flexbox widget, without media queries.</title>
        </Head>
        <HeaderLayout />
        <Layout>
            <body>
                <ul className="ordering-widget">
                    <li className="item">
                        <span className="item-name">Flux capacitor regulator</span>
                        <span className="item-controls">
                            <button className="item-control item-increase" aria-label="Increase">+</button>
                            <button className="item-control item-decrease" aria-label="Decrease">-</button>
                        </span>
                    </li>
                    <li className="item">
                        <span className="item-name">Multiverse unicorn wrench</span>
                        <span className="item-controls">
                            <button className="item-control item-increase" aria-label="Increase">+</button>
                            <button className="item-control item-decrease" aria-label="Decrease">-</button>
                        </span> 
                    </li>
                    <li className="item">
                        <span className="item-name">Singularity transmogrifier</span>
                        <span className="item-controls">
                            <button className="item-control item-increase" aria-label="Increase">+</button>
                            <button className="item-control item-decrease" aria-label="Decrease">-</button>
                        </span>
                    </li>
                    <li className="item">
                        <span className="item-name">Time-reverse sensitive oil</span>
                        <span className="item-controls">
                            <button className="item-control item-increase" aria-label="Increase">+</button>
                            <button className="item-control item-decrease" aria-label="Decrease">-</button>
                        </span>
                    </li>
                </ul>
            </body>

            <style jsx>{`
              .ordering-widget {
                    list - style: none;
                margin: 0;
                padding: 0;
                font-family: 'Avenir Next', Avenir, SegoeUI, sans-serif;
              }
              .ordering-widget * {
                    -moz - box - sizing: border-box;
                     box-sizing: border-box;
              }
              /**
              * bug fix for IE10-11, which doesn't apply flexbox styling to
              * elements that are not displayed as blocks by default. Since our
              * elements are mostly span:s, we need to set the to display as block
              * *before* turning them into flexbox items.
              */
              .item-name,
              .item-controls,
              .item-decrease,
    .item-increase {
                    display: block;
              }
          
    .item {
                    color: #fff;
                background-color: #129490;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                font-size: 1.5em;
                padding: 0;
                margin-bottom: .25em;
              }
          
    .item-name {
                    padding: .25em;
                -webkit-flex: 1 0 13em;
                -ms-flex: 1 0 13em;
                flex: 1 0 13em;
              }
    .item-controls {
                    -webkit - flex: 1 0 4em;
                -ms-flex: 1 0 4em;
                flex: 1 0 4em;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
              }
    .item-control {
                    -webkit - flex: 1;
                -ms-flex: 1;
                flex: 1;
                text-align: center;
                padding: .25em;
                cursor: pointer;
                width: 100%;
                margin: 0;
                border: 0;
                color: #fff;
                font-size: inherit;
              }
    .item-increase {
                    background - color: #1e6f6d;
              }
    .item-decrease {
                    background - color: #1c5453;
              }
 `} </style>

        </Layout>
    </div>
)