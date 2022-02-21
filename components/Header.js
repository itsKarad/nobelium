import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: false },
    { id: 1, name: 'About me', to: 'https://adityakarad.com', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: false },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    /* eslint-disable-line */
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
                <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" enable-background="new 0 0 92.107 184.986" xml:space="preserve" version="1.1" y="0px" x="0px" viewBox="0 0 92.107 184.986">
                <symbol id="New_Symbol" viewBox="-24 -140.25 48 280.5">
                      <path d="m-21.159 115.25l2.13-170.5h-1v-9c0.813-0.813 1.25-1.938 1.938-1.938h3.938l-3.125-31.688c2.75-2.75 12.125-26.375 12.125-26.375s9.312 24.312 11.124 26.125l-4 31.875 4.25 0.375c2 0.75 1.375 2 1.375 2v8.625h-1l-0.88 170.5h-26.875z"/>
                  <linearGradient id="SVGID_1_" y2="-95.218" gradientUnits="userSpaceOnUse" y1="-95.218" x2="5.9712" x1="-17.279">
                    <stop stop-color="#fff" offset="0"/>
                    <stop stop-color="#FFDF21" offset="1"/>
                  </linearGradient>
                  <path d="m-14.193-66.586l15.914 0.4 4.25-31.939c-2.687-2.685-11.125-26.125-11.125-26.125-1.426 3.534-12.125 26.375-12.125 26.375l3.086 31.289z" fill="url(#SVGID_1_)"/>
                  <linearGradient id="SVGID_2_" y2="-95.06" gradientUnits="userSpaceOnUse" y1="-95.06" x2="-.0137" x1="-8.1118">
                    <stop stop-color="#fff" offset="0"/>
                    <stop stop-color="#FEE600" offset="1"/>
                  </linearGradient>
                  <path d="m-8.112-65.871v-27.847c1.333-1.38 3.673-26.498 2.958-30.532 2.131 6.216 5.14 16.541 5.14 16.541-2.458-2.546-6.765 41.838-5.598 41.838s-2.5 0.001-2.5 0.001z" fill="url(#SVGID_2_)"/>
                  <polygon points="6.721 -56.375 -19.636 -56.375 -19.636 -31.556 6.721 -31.556" fill="#525A7B"/>
                  <linearGradient id="SVGID_3_" y2="111.75" gradientUnits="userSpaceOnUse" y1="111.75" x2="5.7231" x1="-21.111">
                    <stop stop-color="#C44852" offset="0"/>
                    <stop stop-color="#9B3941" offset=".1574"/>
                    <stop stop-color="#70292F" offset=".3452"/>
                    <stop stop-color="#4F1D21" offset=".5281"/>
                    <stop stop-color="#371417" offset=".7021"/>
                    <stop stop-color="#290F11" offset=".8634"/>
                    <stop stop-color="#240D0F" offset="1"/>
                  </linearGradient>
                  <path stroke="#000" d="m5.723 111.75c0-15.464-6.007-28-13.417-28s-13.417 12.536-13.417 28 6.007 28 13.417 28c7.41 0 13.417-12.54 13.417-28z" fill="url(#SVGID_3_)"/>
                  <polygon points="5.773 -28.929 -20.042 -28.657 -21.154 115.25 5.722 115.25" fill="#C64953"/>
                  <polygon points="4.596 -56.125 -6.667 -56.125 -6.667 -31 4.596 -31"/>
                  <polygon points="4.596 -29.001 -6.667 -29.001 -6.667 115.25 4.596 115.25" fill="#120200"/>
                  <polygon points="-15.904 -56.125 -17.279 -56.125 -17.279 -31 -15.904 -31"/>
                  <polygon points="-16.668 -29.37 -18.043 -29.379 -18.52 115.25 -17.145 115.25"/>
                  <path d="m-6.195-66.186v-26.897c1.333-1.333 3.952-27.338 1.618-29.672 1.833 6.666 6.48 16.157 6.48 16.157-2.458-2.459-6.765 40.412-5.598 40.412s-2.5 0.002-2.5 0.002z" fill="#A19461"/>
                  <polygon stroke="#000" points="7.596 -60.75 -20.029 -60.75 -20.029 -55.25 7.596 -55.25" fill="#FFF784"/>
                  <path stroke="#000" d="m7.596-63.75c0-1.345-0.85-2.436-1.898-2.436h-23.828c-1.048 0-1.898 1.091-1.898 2.436s0.85 2.436 1.898 2.436h23.828c1.048 0 1.898-1.091 1.898-2.436z" fill="#FFF784"/>
                  <path d="m-3.529-94.584c0-1.112-0.671-2.015-1.5-2.015s-1.5 0.902-1.5 2.015c0 1.113 0.671 2.016 1.5 2.016s1.5-0.903 1.5-2.016z" fill="#403300"/>
                  <path stroke="#000" d="m-21.154 115.25l2.125-170.5h-1v-9c0.813-0.813 1.25-1.938 1.938-1.938h3.938l-3.125-31.688c2.75-2.75 12.125-26.375 12.125-26.375s9.312 24.312 11.124 26.125l-4 31.875 4.25 0.375c2 0.75 1.375 2 1.375 2v8.625h-1l-0.875 170.5h-26.875z" fill="none"/>
                  <polygon stroke="#000" stroke-width="1.0934" fill="#FFF784" points="7.208 -30.988 -20.16 -30.988 -20.16 -28.004 7.208 -28.004"/>
                  <polygon stroke="#000" stroke-width="1.0934" fill="#FFF784" points="5.882 113.76 -21.486 113.76 -21.486 116.74 5.882 116.74"/>
                </symbol>
                <g id="Layer_2">
                      <path d="m21.679 127.97c-4.667 0.667-17 2.334-19.667 6.667-5 7.667 29.667 6.667 34.333 7.333 5 0.667 25 2.334 28 8 2.666 5-13.667 11-16.667 12.667-12 5.333-24.333 9.333-36 15.333-3.333 1.667-7.333 3.334-8.667 7" fill="none"/>
                          <g fill="#050505">
                            <path d="m13.667 177.76l1.467-0.665-0.807 0.191c-0.341 0.1-0.461 0.27-0.66 0.47z"/>
                            <polygon points="16.495 176.49 16.754 176.37 16.956 176.23"/>
                            <path d="m18.977 175.18l-1.286 0.628c0.383-0.14 0.81-0.34 1.286-0.63z"/>
                            <path d="m16.908 176.03c0.188-0.01 0.291 0.023 0.057 0.194l-0.009 0.006 0.736-0.419-0.784 0.22z"/>
                            <path d="m16.908 176.03c-0.183 0.01-0.448 0.063-0.548 0.066l0.548-0.07z"/>
                            <path d="m16.835 174.19c0.231-0.169 0.373 0.295 0.838-0.043 1.151-0.671 2.073-1.41 3.222-1.858 0.481-0.316 1.513-0.168 1.986-0.48 1.168-0.632 4.056-2.527 2.219-1.733-2.737 1.253-4.531 2.004-6.927 3.289-1.91 1.113-3.719 2.22-5.667 3.331-0.562 0.293-1.103 0.496-1.641 0.73 0.699-0.266 1.472-0.535 2.288-0.846 1.098-0.37 2.089-1.52 3.682-2.39z"/>
                            <path d="m3.937 183.91c0.102-0.247 0.347-0.743 0.345-0.746 0.979-0.766 1.854-1.632 2.879-2.457l-0.62 0.117c-0.586 0.48-0.565 0.633 0.019 0.32-1.416 0.602-2.493 1.701-3.132 3.025 0.155-0.02 0.281 0.07 0.509-0.25z"/>
                            <polygon points="3.088 184.96 3.428 184.17 3.376 184.18 3.064 184.99"/>
                            <path d="m24.271 172.41c3.442-1.462 6.713-2.775 9.935-3.989 0.209-0.184 0.344-0.354 0.693-0.433l0.817-0.141 1.403-0.532 0.481-0.231 0.009-0.007c0.242-0.155 0.14-0.194-0.048-0.195l-0.555 0.034c0.105 0.002 0.37-0.034 0.555-0.034l0.802-0.173 1.317-0.566c-0.492 0.265-0.927 0.456-1.317 0.566l-0.763 0.37-0.214 0.132 3.205-1.242 0.646-0.314c0.736-0.38 1.474-0.759 2.038-0.743l0.571-0.225-0.125 0.006 0.226-0.046 2.42-0.95 1.488-0.928c0-0.001 0.418-0.035 0.619-0.047 0.149-0.212 0.427-0.422 0.761-0.624-0.479 0.064-0.936 0.099-1.337 0.199-0.591 0.042-0.99 0.953-1.799 0.814 0.81 0.139 1.208-0.772 1.799-0.814 0.401-0.101 0.858-0.135 1.337-0.199 0.709-0.422 1.712-0.779 2.583-0.92-0.88 0.625-1.776 0.812-2.583 0.92-0.334 0.202-0.611 0.412-0.761 0.624-0.201 0.012-0.619 0.046-0.619 0.047l-1.488 0.928c1.603-0.586 3.136-1.381 4.749-2.021 5.033-2.445 10.56-3.879 14.077-9.209 1.148-4.136-3.061-5.715-5.254-6.844-2.672-1.136-5.473-1.864-8.355-2.522-6.32-1.352-12.172-2.338-18.346-3.027-5.958-0.472-11.593-0.572-17.179-1.129-2.775-0.288-5.571-0.656-8.175-1.378-2.208-0.813-5.878-2.255-3.503-1.38 1.291-1.76 10.105-4.213 14.187-4.746 5.669-1.67 2.398-3.246 2.08-3.327-3.91-1.048-6.557-0.15-14.263 1.451 2.638-0.708 1.761-0.085-0.317 0.813-1.581 1.216-6.6 1.74-6.018 7.331 3.335 5.317 8.084 4.861 12.516 5.733 4.538 0.457 9.208 0.435 13.51 0.827 2.148 0.197 4.44 0.17 6.966 0.293 6.152 0.731 12.769 1.565 18.779 2.726 2.989 0.633 6.161 1.385 8.457 2.693 1.183 0.509 1.847 1.725 1.547 1.123 0.167-0.095-0.753 1.238-1.967 2.023-2.573 1.914-5.3 3.713-7.944 5.229-1.891 0.942-4.521 1.922-5.973 2.577-2.654 1.119-4.877 2.235-6.992 3.354 2.421-1.112 4.157-1.982 6.858-3.195 1.811-0.792-1.018 1.096-2.176 1.729-0.475 0.317-1.497 0.168-1.968 0.483-1.126 0.474-2.077 1.106-3.235 1.741-0.474 0.316-0.598-0.16-0.837-0.005-1.627 0.766-2.684 1.849-3.798 2.15-0.839 0.257-1.596 0.479-2.334 0.693l-1.381 0.519-0.863 0.474c0.295 0.041 0.449 0.173 0.6 0.308-0.451 0.146-1.107 0.308-1.562 0.467 0.454-0.159 1.111-0.32 1.562-0.467-0.151-0.135-0.305-0.267-0.6-0.308-2.087 1.167-4.517 2.451-6.78 3.613l0.051 0.026c1.35-0.613 2.708-1.129 4.237-1.447-0.655 0.157-0.628 0.002 0.063-0.315l0.63-0.003c-1.172 0.634-2.335 1.263-3.626 1.423 0 0-0.481 0.316-0.72 0.475-0.413 0.099-0.452-0.048-0.584-0.132l-0.797 0.371c0.665 0.01 2.582-0.45 2.582-0.45z"/>
                            <path d="m38.399 166.71l-0.651 0.301 2.688-1.038c-0.557-0.02-1.29 0.36-2.037 0.74z"/>
                          </g>
                    <use xlink:href="#New_Symbol" transform="matrix(.4795 .2366 .2366 -.4795 52.739 69.704)" height="280.5" width="48" y="-140.25" x="-24" overflow="visible"/>
                </g>
                <metadata><rdf:RDF><cc:Work><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/"/><dc:publisher><cc:Agent rdf:about="http://openclipart.org/"><dc:title>Openclipart</dc:title></cc:Agent></dc:publisher><dc:title>Stylo</dc:title><dc:date>2008-01-11T16:27:25</dc:date><dc:description>clip art, clipart, image, media, office, office, pen, pen, png, public domain, school, school, svg, writing, writing, </dc:description><dc:source>http://openclipart.org/detail/10965/stylo-by-raffaella_biscuso</dc:source><dc:creator><cc:Agent><dc:title>raffaella_biscuso</dc:title></cc:Agent></dc:creator><dc:subject><rdf:Bag><rdf:li>clip art</rdf:li><rdf:li>clipart</rdf:li><rdf:li>image</rdf:li><rdf:li>media</rdf:li><rdf:li>office</rdf:li><rdf:li>pen</rdf:li><rdf:li>png</rdf:li><rdf:li>public domain</rdf:li><rdf:li>school</rdf:li><rdf:li>svg</rdf:li><rdf:li>writing</rdf:li></rdf:Bag></dc:subject></cc:Work><cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/"><cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/><cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/><cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/></cc:License></rdf:RDF></metadata></svg>

              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
