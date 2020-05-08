import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
           <h1>
               <Link className={headerStyles.title} to="/">
                   {data.site.siteMetadata.title}
               </Link>
           </h1>
           <h3 className={headerStyles.subtitle}>
               Creative writing, readings, and some musing.
           </h3>
           <nav>
               <ul className={headerStyles.navList}> 
                   <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/">Home</Link>
                   </li>
                   <li>
                        <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Writing</Link>
                   </li>
                   <li>
                        <Link to="/musings" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Musings</Link>
                   </li>
                   <li>
                        <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link>
                   </li>
               </ul>
           </nav>
        </header>
    )
}

export default Header;