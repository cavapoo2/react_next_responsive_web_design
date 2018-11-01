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
    <Link href="/multiColumnText">
      <a style={linkStyle}>multicolumnText</a>
    </Link>
    <Link href="/responsiveFlexBoxWidget">
      <a style={linkStyle}>responsiveFlexBoxWidget</a>
    </Link>
    <Link href="/responsiveNewsGrid">
      <a style={linkStyle}>responsiveNewsGrid</a>
    </Link>
    <Link href="/backgroundImageMediaQuery">
      <a style={linkStyle}>backgroundImageMediaQuery</a>
    </Link>

    <style jsx> {`
   display: inline-block;
   padding: 0.25em;
   `}</style>
  </div>
)

export default Header