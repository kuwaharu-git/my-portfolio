import { Description, DescriptionUl } from "../Card";


export const productsData = {
    "ポートフォリオサイト": {
        "siteUrl": "https://www.kuwaharu.com",
        "imgUrl": "/product/portfolio.png",
        "imgAlt": "ポートフォリオサイト",
        "description":
            (<Description>
                Reactを使用して作成したポートフォリオサイトです。<br />
                自己紹介やスキル、資格、制作物などを掲載しています。<br />
            </Description>)
    },
    "イベントカウントダウンbot": {
        "siteUrl": "https://github.com/kuwaharu-git/date-countdown-bot",
        "imgUrl": "/product/count_down.png",
        "imgAlt": "Discord count down bot",
        "description":
            (<Description>
                Discordのサーバーで使用するカウントダウンbotです。<br />
                特定の日時までのカウントダウンを行い、指定したチャンネルにメッセージを送信します。<br />
            </Description>)
    },
    "気象警報bot": {
        "siteUrl": "https://github.com/kuwaharu-git/DiscordWeatherNotifier",
        "imgUrl": "/product/weather_alert.png",
        "imgAlt": "Discord weather alert bot",
        "description":
            (<Description>
                気象庁のAPIを使用して、特定の地域の気象警報を取得し、特定の時間にDiscordのサーバーに通知するbotです。<br />
                休講になるかの判断のために作りました。<br />
            </Description>)
    },
    "LiveFx": {
        "siteUrl": null,
        "imgUrl": "/product/no_image.png",
        "imgAlt": "no image",
        "description":
            (<Description>
                学校の入学式で使用した観客のスマートフォンとリアルタイムに連携することで、イベントや演出と連動した視覚的な演出体験を提供するシステム<br />
            </Description>)
    }
};


