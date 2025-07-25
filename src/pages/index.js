import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle" style={{ textAlign: "center" }}>{siteConfig.tagline}</p>
                <a href="/vsdiat-aashray-reddy/docs/intro" class="pagination-nav__link hero__link">
                    <div class="pagination-nav__sublabel hero__button">Let's Go!</div></a>
            </div>
        </header>
    );
}

function ScrollingBanner() {
    return (

        <>
            <div class="wrapper-scrolling">
                <div class="text-scrolling">
                    <div class="row-scroller row-1">
                        <p>
                            <span class="rubik-80s-fade-regular">El código abierto es amor ❤️</span> 
                            <span class="vt"> &gt;&gt; Open source is love &lt;&lt;</span><span> ❤️ </span> 
                            <span class="potta-one-regular">オープンソースは愛です ❤️</span>
                            <span class="kalam-bold">खुला स्रोत प्रेम है ❤️</span>
                            <span class="bitcount">Sumber terbuka adalah cinta ❤️</span>
                        </p>
                    </div>
                    <div class="row-scroller row-2">
                        <p>
                            <span class="alfa-slab-one-regular">Chanzo wazi ni upendo ❤️</span>
                            <span class="liu-jian-mao-cao-regular">开源就是爱 ❤️</span>
                            <span>Открытый исходный код — это любовь ❤️</span>
                            <span class="reem-kufi">المصدر المفتوح هو الحب ❤️</span>
                        </p>
                    </div>
                    <div class="row-scroller row-3">
                        <p>
                            <span class="dancing-script">Nguồn mở là tình yêu ❤️</span>
                            <span class="akaya-telivigala-regular">ఓపెన్ సోర్స్ ప్రేమ ❤️</span>
                            <span class="rubik-glitch-regular">Open Source ist Liebe ❤️</span>
                            <span class="fugaz-one-regular">L'open source, c'est l'amour ❤️</span>
                            <span class="playwrite-au-qld">Bude tushen soyayya ❤️</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="A site for VSDIAT">
            <HomepageHeader />
            <main>
                <ScrollingBanner />
            </main>
        </Layout>
    );
}
