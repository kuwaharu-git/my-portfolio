import { Description, DescriptionUl } from "../Card";
import { getImagePath } from "../../utils/paths";


export const technicalData = {
    "JavaScript": {
        "siteUrl": "https://github.com/voodootikigod/logo.js/",
        "imgUrl": getImagePath("/logo/js.jpg"),
        "imgAlt": "JavaScript",
        "description": (<Description>
        スキルレベル: ★★☆☆☆<br />
        初めて触れたプログラミング言語。専門学校入学前に本やネットを参考に独学で学習をしたが、途中で挫折。現在は多少はかける程度。
        </Description>)
    },
    "Python": {
        "siteUrl": "https://www.python.org/community/logos/",
        "imgUrl": getImagePath("/logo/python-logo-only.png"),
        "imgAlt": "Python",
        "description": (<Description>
        スキルレベル: ★★★☆☆<br />
        専門学校で学習。一番よく使う言語。データ解析、Webアプリケーション開発、自動化など様々な用途で使用。
        </Description>)
    },
    "TypeScript": {
        "siteUrl": "https://www.typescriptlang.org/branding/",
        "imgUrl": getImagePath("/logo/ts-logo-256.png"),
        imgAlt: "TypeScript",
        "description": (<Description>
        スキルレベル: ★☆☆☆☆<br />
        基礎レベル。そのうちこのサイトもTypeScriptで書き直す予定。
        </Description>)
    },
    "HTML": {
        "siteUrl": "https://www.w3.org/html/logo/",
        "imgUrl": getImagePath("/logo/HTML5_Badge_128.png"),
        "imgAlt": "HTML",
        "description": (<Description>
        スキルレベル: ★★★☆☆<br />
        専門学校で学習。基本的なことはできる程度。
        </Description>)
    },
    "CSS": {
        "siteUrl": "https://commons.wikimedia.org/wiki/File:CSS3_logo.svg",
        "imgUrl": getImagePath("logo/CSS3_logo.svg.png"),
        "imgAlt": "CSS",
        "description": (<Description>
        スキルレベル: ★★☆☆☆<br />
        専門学校で学習。基本的なことはできる程度できるが、苦労することも多い。
        </Description>)
    },
    "Linux" : {
        "siteUrl": "https://isc.tamu.edu/~lewing/linux/",
        "imgUrl": getImagePath("logo/sit3-shine.7.gif"),
        "imgAlt": "Linux",
        "description": (<Description>
        スキルレベル: ★★☆☆☆<br />
        基本的なコマンド操作ができる程度。主にUbuntuなどDebian系を使うことが多い。
        </Description>)
    },
    "Mysql": {
        "siteUrl": "https://www.mysql.com/about/legal/logos.html",
        "imgUrl": getImagePath("/logo/powered-by-mysql-125x64.png"),
        "imgAlt": "",
        "description": (<Description>
        スキルレベル: ★★☆☆☆<br />
        データベースを使う際は主にMySqlを使用。基本的な操作はできる程度。Pythonで操作することが多い。
        </Description>)
    },
    "Flask": {
        "siteUrl": "https://msiz07-flask-docs-ja.readthedocs.io/ja/latest/index.html",
        "imgUrl": getImagePath("/logo/flask-icon.webp"),
        "imgAlt": "Flask",
        "description": (<Description>
        スキルレベル: ★★☆☆☆<br />
        PythonのWebフレームワーク。簡単なWebアプリケーションを作成する際に使用。初めて触ったWebフレームワーク。
        </Description>)
    },
    "Django": {
        "siteUrl": "https://www.djangoproject.com/community/logos/",
        "imgUrl": getImagePath("/logo/django-logo-positive.png"),
        "imgAlt": "Django",
        "description": (<Description>
        スキルレベル: ★☆☆☆☆<br />
        PythonのWebフレームワーク。Flaskよりも複雑で、まだまだ勉強中。
        </Description>)
    },
    "FastAPI": {
        "siteUrl": "https://fastapi.tiangolo.com/ja/",
        "imgUrl": getImagePath("/logo/logo-teal.png"),
        "imgAlt": "FastAPI",
        "description": (<Description>
        スキルレベル: ★★☆☆☆<br />
        PythonのWebフレームワーク。Flaskよりも高速で、API開発に適している。WebAPIを作成する際に使用。websocketを使用する時に使うこともある。
        </Description>)
    },
    "React": {
        "siteUrl": "https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/fixtures/dom/public/react-logo.svg",
        "imgUrl": getImagePath("/logo/react-logo.svg"),
        "imgAlt": "React",
        "description": (<Description>
        スキルレベル: ★★☆☆☆<br />
        JavaScriptのライブラリ。このサイトもReactで作成している。基本的なことはできるが、まだまだ勉強中。
        </Description>)
    },
    "Next.js": {
        "siteUrl": "https://vercel.com/geist/brands#next-js",
        "imgUrl": getImagePath("/logo/nextjs-logotype-light-background.png"),
        "imgAlt": "Next.js",
        "description": (<Description>
        スキルレベル: ★☆☆☆☆<br />
        Reactのフレームワーク。ブログサイトを作成する際に使用。ブログサイトはテンプレートを使って作成したため、Next.jsはまだあまり理解していない。
        </Description>)
    },
    "Git": {
        "siteUrl": "https://git-scm.com/downloads/logos",
        "imgUrl": getImagePath("/logo/Git-Icon-1788C.png"),
        "imgAlt": "Git",
        "description": (<Description>
        スキルレベル: ★★★☆☆<br />
        バージョン管理ツール。主にGitHubを使用。基本的な操作はできる程度。チームでの開発経験が浅いため、ブランチの使い方などはまだまだ。
        </Description>)
    },
    "Docker": {
        "siteUrl": "https://www.docker.com/company/newsroom/media-resources/",
        "imgUrl": getImagePath("/logo/docker-mark-blue.png"),
        "imgAlt": "Docker",
        "description": (<Description>
        スキルレベル: ★☆☆☆☆<br />
        コンテナ仮想化ツール。基礎的な仕組みの理解と、少しだけ操作ができる程度。
        </Description>)
    },
    "AWS": {
        "siteUrl": "https://aws.amazon.com/jp/architecture/icons/",
        "imgUrl": getImagePath("/logo/AWS-Cloud-logo_32.svg"),
        "imgAlt": "AWS",
        "description": (<Description>
        スキルレベル: ★☆☆☆☆<br />
        クラウドサービス。基礎的な仕組みの理解と、EC2の起動やVPC作成など少しだけ操作ができる程度。
        </Description>)
    },
};


