import Link from 'next/link';

const Footer = () => {
  const links = [
    {
      title: 'ABOUT',
      links: [
        'How Airbnb works',
        'Newsroom',
        'Investors',
        'Airbnbn Plus',
        'Airbnb.org emergency stays',
      ],
    },
    {
      title: 'COMMUNITY',
      links: [
        'Accessbility',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals accepted',
        'Papafam',
      ],
    },
    {
      title: 'HOST',
      links: [
        'Airbnb your home',
        'AirCover for Hosts',
        'Hosting resources',
        'Community forum',
        'Hosting responsibly',
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        'Help Center',
        'AirCover',
        'Anti-discrimination',
        'Disability support',
        'Cancellation options',
        'Report neighborhood concern',
      ],
    },
  ];
  return (
    <footer>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 mt-16'>
        {links.map((link) => (
          <div key={link.title} className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>{link.title}</h5>
            {link.links.map((item) => (
              <Link href={item} key={item} className='block hover:underline'>
                {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;