import Link from 'next/link'

const linkStyle = {
  /*  marginRight: 15*/
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
     <Link href="/responsiveNews">
      <a style={linkStyle}>responsiveNews</a>
    </Link>
    <Link href="/maxWidthTypography">
      <a style={linkStyle}>maxWidthTypography</a>
    </Link>
 

    <style jsx> {`
   display: inline-block;
   padding: 0.25em;
   `}</style>
  </div>
)

export default Header