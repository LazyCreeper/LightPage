// TODO: 等数据库审核...
const Projects = [
  {
    text: "Lazy's Blog",
    href: 'https://blog.imlazy.ink:233/'
  },
  {
    text: 'SyncTV',
    href: 'https://github.com/synctv-org'
  },
  {
    text: 'MiraiUI',
    href: 'https://github.com/LazyCreeper/MiraiUI'
  },
  {
    text: 'FxCraft',
    href: 'https://skin.fxcraft.cn'
  },
  {
    text: '雫 API',
    href: 'https://api.imlazy.ink'
  },
  {
    text: "Lazy's Live",
    href: 'https://live.lazy.ink'
  },
  {
    text: 'MCSM 10 Vivid主题',
    href: 'https://blog.imlazy.ink:233/index.php/archives/335/'
  },
  {
    text: 'MCSM 10 二次元主题',
    href: 'https://blog.imlazy.ink:233/index.php/archives/253/'
  },
  {
    text: '宝塔面板二次元主题',
    href: 'https://blog.imlazy.ink:233/index.php/archives/38/'
  },
  {
    text: 'A Blacklist',
    href: 'https://blacklist.imlazy.ink'
  },
  {
    text: 'Nyancy Account',
    href: 'https://account.lazy.ink'
  },
  {
    text: 'WeMC',
    href: 'https://wemc.cc'
  }
]

export async function onRequestGet({ request }) {
  const json = JSON.stringify({
    code: 200,
    data: Projects
  })

  return new Response(json, {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
