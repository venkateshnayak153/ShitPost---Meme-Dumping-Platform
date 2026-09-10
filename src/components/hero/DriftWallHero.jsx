import { useMemo } from 'react';
import DriftWall from '../DriftWall';

// Authentic, iconic Indian meme collection from YouTube, Instagram, TV shows & Bollywood classics
const INDIAN_MEMES = [
  {
    image: '/memes/kya-gunda.jpg',
    fallback: 'https://i.imgflip.com/4/2v9onc.jpg',
    title: 'Kya Gunda Banega Re Tu (Hera Pheri)',
  },
  {
    image: '/memes/dhak-dhak.jpg',
    fallback: 'https://i.imgflip.com/4/3471uq.jpg',
    title: 'Mere ko to aisa dhak dhak horela hai',
  },
  {
    image: '/memes/maal-kidhar-hai.jpg',
    fallback: 'https://i.imgflip.com/4/39mo5g.jpg',
    title: 'Maal kidhar hai? (Hera Pheri)',
  },
  {
    image: '/memes/mirzapur-immediate.jpg',
    fallback: 'https://i.imgflip.com/4/4jzidx.jpg',
    title: 'Matlab aisa bilkul immediate nahi soche hain (Mirzapur)',
  },
  {
    image: '/memes/full-izzat.jpg',
    fallback: 'https://i.imgflip.com/4/4qgv23.jpg',
    title: 'Ab humko chahiye full izzat (Guddu Bhaiya)',
  },
  {
    image: '/memes/jethalal-thinking.jpg',
    fallback: 'https://i.imgflip.com/4/57ergj.jpg',
    title: 'Jethalal Thinking (TMKOC)',
  },
  {
    image: '/memes/daya-cylinder.jpg',
    fallback: 'https://i.imgflip.com/4/470f65.jpg',
    title: 'Daya bhabhi cylinder lift (TMKOC)',
  },
  {
    image: '/memes/jethalal-chai.jpg',
    fallback: 'https://i.imgflip.com/4/2f7t2j.jpg',
    title: 'Chai piyo, biscuit khao (Jethalal)',
  },
  {
    image: '/memes/ashneer-kya-kar-raha-hai.jpg',
    fallback: 'https://i.imgflip.com/4/668yne.jpg',
    title: 'Bhai kya kar raha hai tu? (Ashneer Grover)',
  },
  {
    image: '/memes/ashneer-doglapan.jpg',
    fallback: 'https://i.imgflip.com/4/7b840t.jpg',
    title: 'Yeh sab doglapan hai (Shark Tank)',
  },
  {
    image: '/memes/chabi-kaha-hai.jpg',
    fallback: 'https://i.imgflip.com/4/4alg5a.jpg',
    title: 'Chabi kaha hai? (Gangs of Wasseypur)',
  },
  {
    image: '/memes/beta-tumse-na-ho-payega.jpg',
    fallback: 'https://i.imgflip.com/4/341npq.jpg',
    title: 'Beta tumse na ho payega (Ramadhir Singh)',
  },
  {
    image: '/memes/ab-underground.jpg',
    fallback: 'https://i.imgflip.com/4/3x6gey.jpg',
    title: 'Ab underground hone ka samay aa gaya hai',
  },
  {
    image: '/memes/chatur-kehna-kya-chahte-ho.jpg',
    fallback: 'https://i.imgflip.com/4/2ayowh.jpg',
    title: 'Arey kehna kya chahte ho? (Chatur 3 Idiots)',
  },
  {
    image: '/memes/abba-nahi-manenge.jpg',
    fallback: 'https://i.imgflip.com/4/3xn9s7.jpg',
    title: 'Abba nahi manenge (Farhan 3 Idiots)',
  },
  {
    image: '/memes/jalwa-hai-humara.jpg',
    fallback: 'https://i.imgflip.com/4/5caji6.jpg',
    title: 'Jalwa hai humara yahan (Kaleen Bhaiya)',
  },
  {
    image: '/memes/munna-bhaiya.jpg',
    fallback: 'https://i.imgflip.com/4/5gmvg9.jpg',
    title: 'Yeh badhiya tha guru (Munna Bhaiya)',
  },
  {
    image: '/memes/paisa-hi-paisa.jpg',
    fallback: 'https://i.imgflip.com/4/3i98sz.jpg',
    title: 'Paisa hi paisa hoga (Phir Hera Pheri)',
  },
  {
    image: '/memes/paisa-double.jpg',
    fallback: 'https://i.imgflip.com/4/64ihym.jpg',
    title: '25 din mein paisa double (Akshay Kumar)',
  },
  {
    image: '/memes/aurat-ka-chakkar.jpg',
    fallback: 'https://i.imgflip.com/4/5cd6hr.jpg',
    title: 'Aurat ka chakkar babu bhaiya',
  },
  {
    image: '/memes/khatarnak-log.jpg',
    fallback: 'https://i.imgflip.com/4/521vu9.jpg',
    title: 'Bahar bohot khatarnak log hain (Babu Rao)',
  },
  {
    image: '/memes/carryminati.jpg',
    fallback: 'https://i.imgflip.com/4/40uted.jpg',
    title: 'Toh kaise hain aap log (CarryMinati)',
  },
  {
    image: '/memes/paise-barbaad.jpg',
    fallback: 'https://i.imgflip.com/4/461cf8.jpg',
    title: 'Paise barbaad bc (BB Ki Vines)',
  },
  {
    image: '/memes/lord-puneet.jpg',
    fallback: 'https://i.imgflip.com/4/6gb1ue.jpg',
    title: 'Lord Puneet Superstar (Kothi Bangle Wale)',
  },
  {
    image: '/memes/puneet-laugh.jpg',
    fallback: 'https://i.imgflip.com/4/6oey4d.jpg',
    title: 'Puneet Superstar laughing reel',
  },
  {
    image: '/memes/moye-moye.jpg',
    fallback: 'https://i.imgflip.com/4/82yaur.jpg',
    title: 'Moye Moye (Viral Reel Trend)',
  },
];

const DriftWallHero = ({ onExploreClick }) => {
  const memeItems = useMemo(() => INDIAN_MEMES, []);

  const handleScrollToExplore = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 select-none"
      style={{ width: '100vw' }}
    >
      {/* Cyber Yellow & Carbon Ambient Glows (Monkeytype Style) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyber-500/16 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-[500px] h-[400px] bg-cyber-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 3D Animated DriftWall Background with bright vibrant tiles */}
      <div className="absolute inset-0 pointer-events-auto">
        <DriftWall
          items={memeItems}
          columns={6}
          tileWidth={230}
          tileHeight={155}
          gap={20}
          radius={16}
          tilt={14}
          turn={-12}
          roll={1}
          depth={100}
          speed={36}
          perspective={1300}
          dim={0.92}
          lift={75}
          parallax={0.7}
          fade={0.35}
          pauseOnHover={false}
          overlayColor="rgba(10, 10, 10, 0.12)"
          className="w-full h-full"
        />
      </div>

      {/* Deep Contrast Vignette tailored for Black & Yellow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(10, 10, 10, 0.15) 0%, rgba(10, 10, 10, 0.45) 55%, rgba(10, 10, 10, 0.85) 100%)',
        }}
      />

      {/* Carbon Top Scrim for Guaranteed Navbar contrast & readability */}
      <div className="absolute top-0 left-0 right-0 h-36 sm:h-44 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/75 to-transparent pointer-events-none z-10" />

      {/* Foreground Hero Content Container - Auto-centered with guaranteed navbar clearance */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center pointer-events-none my-auto">
        {/* Animated Monkeytype Style Meme Badge */}

        {/* Hero Title in High-Voltage Bold Cartoon Font (Luckiest Guy) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-wider text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.95)] leading-[1.04] sm:leading-[1.02]">
          THE INTERNET&apos;S{' '}
          <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-cyber-500 to-amber-400 drop-shadow-[0_0_35px_rgba(226,183,20,0.55)]">
            SHITPOST.EXE
          </span>
        </h1>

        {/* Trending Meme Tags */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 pointer-events-auto">
          {[
            '#DesiMemes',
            '#BabuRao',
            '#Doglapan',
            '#Mirzapur',
            '#LordPuneet',
            '#MoyeMoye',
            '#TMKOC',
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-carbon-900/80 hover:bg-carbon-800 text-carbon-400 hover:text-cyber-400 border border-carbon-700/80 hover:border-cyber-500/50 shadow-sm transition-all cursor-pointer select-none"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
          <button
            type="button"
            onClick={handleScrollToExplore}
            className="px-8 py-3.5 sm:py-4 rounded-full font-display tracking-wider text-base sm:text-lg font-bold text-carbon-950 bg-cyber-500 hover:bg-cyber-400 active:bg-cyber-600 shadow-[0_0_30px_rgba(226,183,20,0.45)] hover:shadow-[0_0_40px_rgba(226,183,20,0.7)] hover:scale-105 active:scale-95 transition-all duration-150 flex items-center gap-2.5 group cursor-pointer"
          >
            <span>EXPLORE THE VAULT</span>
            <svg
              className="w-5 h-5 group-hover:translate-y-1 transition-transform stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          <a
            href="#upload"
            className="px-7 py-3.5 sm:py-4 rounded-full font-display tracking-wider text-base sm:text-lg font-bold text-cyber-400 hover:text-cyber-300 bg-carbon-850 hover:bg-carbon-800 border border-cyber-500/40 hover:border-cyber-400 shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(226,183,20,0.25)] hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer flex items-center gap-2"
          >
            <svg
              className="w-5 h-5 text-cyber-500 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span>DROP A MEME</span>
          </a>
        </div>

        {/* Quick Stats in Monkeytype Style */}
        <div className="mt-8 sm:mt-12 flex items-center justify-center gap-6 sm:gap-12 text-carbon-400 text-xs sm:text-sm font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <div className="flex flex-col items-center">
            <span className="text-cyber-500 font-display text-2xl sm:text-3xl tracking-wide">
              100K+
            </span>
            <span className="font-mono text-carbon-400 text-xs mt-0.5">SHITPOSTS</span>
          </div>
          <div className="h-8 w-px bg-carbon-700" />
          <div className="flex flex-col items-center">
            <span className="text-cyber-500 font-display text-2xl sm:text-3xl tracking-wide">
              2.4M
            </span>
            <span className="font-mono text-carbon-400 text-xs mt-0.5">UPVOTES</span>
          </div>
          <div className="h-8 w-px bg-carbon-700" />
          <div className="flex flex-col items-center">
            <span className="text-cyber-500 font-display text-2xl sm:text-3xl tracking-wide">
              0%
            </span>
            <span className="font-mono text-carbon-400 text-xs mt-0.5">FILTER</span>
          </div>
        </div>
      </div>

      {/* Bottom Sentinel element for Intersection Observer */}
      <div
        id="hero-sentinel"
        className="absolute bottom-0 left-0 right-0 h-4 pointer-events-none opacity-0"
        aria-hidden="true"
      />
    </section>
  );
};

export default DriftWallHero;
