import phpImage from "../assets/php.png";

const sources = [
  {
    label: "W3Techs: PHP usage statistics",
    href: "https://w3techs.com/technologies/details/pl-php",
  },
  {
    label: "Spexo Addons: Is PHP dead?",
    href: "https://spexoaddons.com/blog/is-php-dead/",
  },
  {
    label: "Fortune: How AI tools discovered the PHP vulnerabilities",
    href: "https://fortune.com/2026/10/21/ai-tools-discovered-the-php-vulnerability-that-could-take-down-70-of-the-internet-now-the-race-is-on-to-patch-it-before-ai-powered-hackers-attack/",
  },
  {
    label: "PHP 8.5.12 release announcement",
    href: "https://github.com/php/php-src/releases/tag/php-8.5.12",
  },
  {
    label: "KuCoin: PHP patches two critical vulnerabilities",
    href: "https://www.kucoin.com/news/flash/php-patches-two-critical-vulnerabilities-amid-early-exploits",
  },
];

function BlogPage() {
  return (
    <section className="page-section content-section" id="blog">
      <p className="eyebrow">NOTES & IDEAS</p>
      <article className="blog-article">
        <h2>Everyone’s Googling PHP Right Now, Including Me. Here’s Why</h2>
        <p className="blog-lead">
          If you’ve seen “PHP” all over your feed this week, you’re not imagining it.
          I noticed it too, and I’m new to programming, so my first thought was: what
          is PHP, and why is everyone suddenly talking about it?
        </p>
        <figure className="blog-cover">
          <img src={phpImage} alt="PHP displayed on a smartphone screen" />
          <figcaption>PHP runs behind the scenes of many websites.</figcaption>
        </figure>
        <p>
          So I did what any beginner does: I Googled it. Here’s everything I
          learned, explained the way I wish someone had explained it to me.

        </p>

        <h3>First, what is PHP?</h3>
        <p>
          PHP is a programming language that runs the “behind the scenes” part of
          websites. It’s old and very common: it powers about 70.6% of websites
          whose server-side language is known, according to W3Techs (July 2026).
          WordPress is built on it, and WordPress runs roughly 40% of all
          websites. See{" "}
          <a href={sources[0].href} target="_blank" rel="noreferrer">
            W3Techs
          </a>{" "}
          and{" "}
          <a href={sources[1].href} target="_blank" rel="noreferrer">
            Spexo Addons
          </a>
          .
        </p>

        <h3>What happened?</h3>
        <p>
          On October 21, PHP released emergency updates (versions 8.5.12,
          8.4.27, 8.3.36 and 8.2.35) to fix two critical bugs, CVE-2026-109618
          and CVE-2026-109619. Both scored 9.2 out of 10 for severity, and both
          allow remote code execution without logging in. Read the{" "}
          <a href={sources[3].href} target="_blank" rel="noreferrer">
            PHP release announcement
          </a>{" "}
          and the{" "}
          <a href={sources[4].href} target="_blank" rel="noreferrer">
            KuCoin report
          </a>
          .
        </p>
        <p>
          In plain English: an attacker could make a vulnerable website run
          <em> their </em> commands, without needing a password. The bugs are
          nicknamed <strong>“php2shell.”</strong>
        </p>

        <h3>How did anyone find it?</h3>
        <p>
          This is the part that surprised me. Several security teams found the
          bugs independently, and all of them used AI tools to help, including
          OpenAI’s GPT-5.6 Sol. One of the bugs had been sitting in PHP for 14
          years. The old code didn’t change. What changed is that AI got good
          enough to dig out flaws humans had missed. Read the{" "}
          <a href={sources[2].href} target="_blank" rel="noreferrer">
            Fortune report
          </a>
          .
        </p>

        <h3>Why did it become a scramble?</h3>
        <p>
          News leaked before the patch was ready. Cloudflare saw tens of
          thousands of attack attempts within 45 minutes of the news getting
          out, and millions by that evening. France temporarily disconnected
          some government websites while waiting for the fix. These details are
          covered in the{" "}
          <a href={sources[2].href} target="_blank" rel="noreferrer">
            Fortune report
          </a>{" "}
          and the{" "}
          <a href={sources[4].href} target="_blank" rel="noreferrer">
            KuCoin report
          </a>
          .
        </p>

        <h3>A small reality check</h3>
        <p>
          You’ll see headlines saying this could affect “70% of the internet.”
          That number comes from PHP’s share of sites with a{" "}
          <em>known</em> server-side language. Not every PHP site is vulnerable,
          and many are already patched. Headlines round up, so check the numbers
          behind them.
        </p>

        <h3>What should you do?</h3>
        <ul>
          <li>
            <strong>Run WordPress or any PHP site?</strong> Updating PHP is the
            only safe fix, because there is no complete workaround. Ask your
            host which PHP version you’re on. See the{" "}
            <a href={sources[3].href} target="_blank" rel="noreferrer">
              official PHP release
            </a>
            .
          </li>
          <li>
            <strong>Still on an old version?</strong> Security firm Mallory
            counted about 884,000 internet-facing hosts running PHP 8.1 or
            older, and PHP 8.2 stops getting security patches on December 31,
            2026. See the{" "}
            <a href={sources[4].href} target="_blank" rel="noreferrer">
              KuCoin report
            </a>
            .
          </li>
          <li>
            <strong>Just learning PHP like me?</strong> Don’t panic or quit. Use
            this as a lesson: keep your tools updated.
          </li>
        </ul>

        <h3>Sources</h3>
        <ul className="blog-sources">
          {sources.map((source) => (
            <li key={source.href}>
              <a href={source.href} target="_blank" rel="noreferrer">
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default BlogPage;
