import Header from './Header'

const Layout = (props) => (
  <div>
      {props.children}
    <style jsx> {`
   margin:10;
   padding:10;
   border: 1px solid #DDD;
   `}</style>
  </div>
)

export default Layout