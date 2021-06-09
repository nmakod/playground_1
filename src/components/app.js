import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import { PreactLibWithoutHook, PreactLibWithHook } from "preact-lib";
import { Layout } from "astral";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
    </Router>
    <PreactLibWithoutHook />
    <PreactLibWithHook />
    <Layout
      data={{
        guid: "01a43bca-74f7-11eb-9439-0242ac130002",
        startTime: "06/07/2021 4:58:00 PM", // M/d/yyyy h:mm:ss tt (Show start time)
        endTime: "06/08/2021 4:59:00 PM", // M/d/yyyy h:mm:ss tt (Show end time)
        VCF: (c) => 9 * c + 3908,
        video: {
          sourceUrl:
            "https://carpetqa.azureedge.net/glance-live/show/luv_aaj_kal_22_feb.webm",
          posterImage: "assets/images/poster-image.png",
          title: "Glance Live Show",
          subTitle: "",
          landingPageImage: "./assets/images/show-banner.png",
          titleImage: "assets/images/show-name.png",
          influencerName: "",
          duration: 512,
          sourceType: "CDN",
          contentType: "video/webm",
        },
        agoraConfig: {
          appId: "0b6f87fbf33e499fa4ac29aec04493ac",
          expiryDurationInSecs: 10800, // 3 hours
          role: 1,
          channelName: "rymIqKIQfI",
        },
        products: [
          {
            title: "Earphone With Mic AEP-47",
            imageUrl: "assets/images/aep47gold.jpg",
            offerBadgeUrl: "assets/images/deal-of-the-day.png",
            actualPrice: 599.0,
            discountedPrice: 239.0,
            unitsLeft: 100,
            handoffPeriod: 5,
            offerEndTime: 1612891480,
            productLink: "https://bulbul.tv/product/7330",
            privacyLink: "https://bulbul.tv/privacy-policy",
            isDealOfTheDay: true,
            linkOpenMethod: "redirect",
          },
          {
            title: "ARU Universal Metal In",
            imageUrl: "assets/images/aep47gold.jpg",
            offerBadgeUrl: "assets/images/deal-of-the-day.png",
            actualPrice: 599.0,
            discountedPrice: 239.0,
            unitsLeft: 100,
            handoffPeriod: 5,
            offerEndTime: 1612891480,
            productLink: "https://bulbul.tv/product/7330",
            privacyLink: "https://bulbul.tv/privacy-policy",
            isDealOfTheDay: true,
            linkOpenMethod: "redirect",
          },
          {
            title: "ARU Universal Metal In Ear Earphone With Mic AEP-47",
            imageUrl: "assets/images/aep47gold.jpg",
            offerBadgeUrl: "assets/images/deal-of-the-day.png",
            actualPrice: 599.0,
            discountedPrice: 239.0,
            unitsLeft: 100,
            handoffPeriod: 5,
            offerEndTime: 1612891480,
            productLink: "https://bulbul.tv/product/7330",
            privacyLink: "https://bulbul.tv/privacy-policy",
            isDealOfTheDay: true,
            linkOpenMethod: "redirect",
          },
          {
            title: "ARU Universal Metal In Ear Earphone With Mic AEP-47",
            imageUrl: "assets/images/aep47gold.jpg",
            offerBadgeUrl: "assets/images/deal-of-the-day.png",
            actualPrice: 599.0,
            discountedPrice: 239.0,
            unitsLeft: 100,
            handoffPeriod: 5,
            offerEndTime: 1612891480,
            productLink: "https://bulbul.tv/product/7330",
            privacyLink: "https://bulbul.tv/privacy-policy",
            isDealOfTheDay: true,
            linkOpenMethod: "redirect",
          },
        ],
        config: {
          emojiList: [
            ["😀", "😅", "😊", "💖", "💔", "😜", "😎", "🎉"],
            ["😃", "😂", "😇", "😍", "😚", "🤪", "🤓", "😞"],
            ["😄", "🤣", "🙂", "🥰", "😋", "🤨", "🤩", "😔"],
            ["😁", "😢", "🙃", "😘", "😛", "📹", "🥳", "😟"],
            ["😆", "🙄", "👍", "👎", "👌", "🔇", "😏", "😕"],
          ],
          stickerList: [
            "https://glance.l.inmobicdn.net/public/content/assets/xiaomi/Heart.gif",
            "https://glance.l.inmobicdn.net/public/content/assets/xiaomi/starry-eyed.gif",
            "https://glance.l.inmobicdn.net/public/content/assets/xiaomi/grinning.gif",
            "https://glance.l.inmobicdn.net/public/content/assets/xiaomi/cool.gif",
            "https://glance.l.inmobicdn.net/public/content/assets/xiaomi/winking.gif",
            "https://glance.l.inmobicdn.net/public/content/assets/xiaomi/rollingeyes.gif",
            "https://glance.l.inmobicdn.net/public/content/assets/xiaomi/raisedeyebrows.gif",
          ],
          interactionType: "default", // can be 'emojis', 'stickertray', 'default' or 'gifs'
          gifApiUrl: "https://api.gifskey.com/v1/gifs",
          gifApiSecretKey: "4UEZSxpkqN24pAh1KLC3nS4uqdcVaVg0p4jms4iz6ORi",
          remindMeEventUrl:
            "https://calendar.google.com/calendar/u/0/r/eventedit?text=Testing&details=This+a+test+event&dates=20210504T070000Z/20210504T080000Z",
        },
      }}
    />
  </div>
);

export default App;
