'use strict';

const domainblocklist = [
  'http://gadgetsearcher.com',
  'https://pixallus.com',
  'http://programming.yourworldin90seconds.com',
  'https://programming.nichedomain.news',
  'https://marketingsolution.com.au',
  'https://programming.aplus-review.com',
  'https://digitalapexgroup.com',
  'https://technologynews.biz',
  'https://worldtech.news',
  'https://programming.webcloning.com',
  'https://www.sacramentowebdesigngroup.com',
  'https://htmltreehouse.com',
  'https://1dmx.org',
  'https://websitedesign-usa.com',
  'https://techupd.com',
  'https://fancyhints.com',
  'https://techalertnews.com',
  'https://buzzedly.com',
  'https://dztechno.com',
  'https://graphicdon.com',
  'https://www.newsgosspis.com',
  'http://www.digitasbuzz.in',
  'https://gotutoral.com',
  'https://wpguynews.com',
  'https://www.klobal.net',
  'http://www.webmastersgallery.com',
  'https://pikopong.com',
  'https://keren.link',
  'https://ntdln.com',
  'https://jczh.xyz',
  'https://pazukong.wordpress.com',
  'https://fullstackfeed.com',
  'https://thebrandingstore.net',
  'https://development-tools.net',
  'https://itdirectory.my',
  'https://www.sacramentowebdesigngroup.com',
  'https://engrmks.com.ng',
  'https://www.xspdf.com',
  'http://isokunoffice.club',
  'http://dinezh.com',
  'http://www.makemoneyupdaters.com',
  'http://clicknow.in',
  'http://nexstair.com',
  'http://kovtonyuk.inf.ua',
  'http://postheaven.net',
  'http://www.legendstrivia.co.uk',
  'http://squareblogs.net',
  'http://www.fourthcity.net',
  'http://www.engrmks.com.ng',
  'http://711web.com',
  'http://techupd.com',
  'http://www.67nj.org',
  'http://tipsxd.com',
  'http://www.new.pixel-forge.ca',
  'http://pixallus.com',
  'http://wpnewshub.com',
  'http://tecriter.wordpressarena.com',
  'http://reddits.contractwebsites.com',
  'http://wawas-kingdom.com',
  'http://dztechno.com',
  'http://wpguynews.com',
  'http://www.digitasbuzz.in',
  'http://watchfvsslive.co',
  'http://gotutoral.com',
  'http://techfans.co.uk',
  'http://pikopong.com',
  'http://marketingsolution.com.au',
  'https://reportwire.org',
  'https://www.codeificant.com',
  'https://tipsxd.com',
  'https://wpdesigns.live',
  'https://gigatechnews.com',
  'https://blogs.thebitx.com',
  'https://updatetech.xyz',
  'https://neoweb4u.com',
  'https://www.websjohn.com',
  'https://www.webhostpolice.com',
  'https://lzomedia.com',
  'https://jateng.co',
  'https://news.priviw.com',
  'https://movilgadget.com',
  'https://kitdeveloper.ru',
  '.thats.im', // 'https://bdbloger.thats.im', 'https://mdsohel.thats.im/', 'https://sazelab.thats.im/'
  '.cu.ma', // 'https://bdbloger.cu.ma', 'https://mdsazel.cu.ma/'
  'https://reactjsexample.com',
  'https://dentedreality.com.au',
  'https://platoblockchain.net',
  'http://aayugcreation.com',
  'https://www.67nj.org',
  'https://wpnewshub.com',
  'https://codinghindi.in',
  'https://programmer.chimpymail.com',
  'https://sayed.work',
  'https://infos.by',
  'https://data-science-austria.at',
  'https://www.techyrack.com',
  // dont end any of these with  trailing slashes, as the DOM's URL.origin api doesnt give it to you so it will fail to filter
];

const additions = [
  'opta.live',
  'www.imoneyhub.com',
  'www.askorhelp.com',
  'www.handla.it',
  'webchilli.co.za',
  'indyamariejean.com',
  'hnikoloski.com',
  'www.makemoneyonlinecom.com',
  'underskore.in',
  'codytechs.com',
  'shanuverma.com',
  'technewzroom.com',
  'fiercesite.com',
  'www.essexwebhosts.com',
  'tavarro.com',
  'ecapital.news',
  'i-capitals.com',
  'vcodepedia.com',
  'e-capitals.com',
  'xlera8.com',
  'gadgetofficials.com',
  'coingenius.news',
  'thenewslog.org',
  'zplux.com',
  'tiptipa.com',
  'zephyrnet.com',
  'secretofcss.com',
  'test.designsolutions.online',
];

const blocklist = [...domainblocklist, ...additions]
  .map((source) => source.split('://')[1])
  .filter((domain, i, all) => all.indexOf(domain) === i);

module.exports = {
  blocklist,
};