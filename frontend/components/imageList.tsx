import React, { useEffect, useState } from "react";
import { CardContent, Card } from "@/components/ui/card";

// Adjusted type to include imageClasses
type ImageInfo = {
  id: string;
  displayName: string;
  imageClasses: string[];
  images: string[];
};

export default function Component() {
  const [images, setImages] = useState<ImageInfo[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/process_timeline",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        // Manually append additional data
        const additionalData = {
          "at://did:plc:oav2ixis42pm5fqrqhp4ey3w/app.bsky.feed.post/3k6h5autwik25":
            {
              display_name: "FETISH\u2a01CHURCH",
              text: 'If you like the "\ud83d\udd1e Adult Content" feed we host, please give it a Like \u2764\ufe0f to help keep it visible!\n\nWe maintain the feed as a service to help improve visibility for Bluesky\'s community of sworkers and adult posters. We retain no user data and are always open to feedback.\n\nMore feeds on our profile!',
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:oav2ixis42pm5fqrqhp4ey3w/bafkreibqqtin3puonxpgmvcdh3vdbqfilbzykyjdmwwputgu5xcauvervu@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:oav2ixis42pm5fqrqhp4ey3w/app.bsky.feed.post/3kkrlc34m7w22":
            {
              display_name: "FETISH\u2a01CHURCH",
              text: "Welcome newskies! \u2728\n\nLooking for the smut? You've come to the right place. Please \"Pin to home\" and Like the \ud83d\udd1e Adult Content feed, your firehose for suggestive images on Bluesky! \ud83e\ude75\n\nbsky.app/profile/did:...\n\nCan't see anything? You need to enable adult content! Go to Moderation \u27a1\ufe0f Content Filtering:",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:oav2ixis42pm5fqrqhp4ey3w/bafkreigxk6wdqrwgmakgpl7dz7rzoglmkdrxwlwwrgao2eywcfotxgzvg4@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:oav2ixis42pm5fqrqhp4ey3w/bafkreigxcrlu3piuejr32moakwps2346em2e2kfpo5ezbq7fhzoav3ufn4@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:oav2ixis42pm5fqrqhp4ey3w/bafkreidadzg3ilnxj7qjsg3eirlgum4xlgbf7fxyyeqmpov6q775oy67ka@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:oav2ixis42pm5fqrqhp4ey3w/bafkreiemxo4ybj2qyl23j273osnuee6ynqyftolzqii6c23l6lli3d4uyy@jpeg",
              ],
              image_classes: ["nsfw", "nsfw", "nsfw", "nsfw"],
            },
          "at://did:plc:kvt26sh6qvecjrlzwii6xgrv/app.bsky.feed.post/3kmbocxpta32z":
            {
              display_name: "KC Giant",
              text: "Dang, forgot those guys were in there... Varsity\u2019s gonna be short a couple players next game \n\n#sizesky #shrinking #macrophile #microphile",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:kvt26sh6qvecjrlzwii6xgrv/bafkreibgsdoykjqr3rwggmyefpufzk25onyhbtptcf3jagbgbp6gg3xpha@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:fki2bqj7ocr74zq5ulub4rjj/app.bsky.feed.post/3kmboc7pjld22":
            {
              display_name: "\u306d\u3093\u3069\u3082\u3063\u3068",
              text: "\u30d0\u30cb\u30fc\u30df\u30af\u3055\u3093",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:fki2bqj7ocr74zq5ulub4rjj/bafkreiauccgkvlfzse5urouptzqjfti27hfsjylj7qwqj6yppnhmju6vfe@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:cppkdoqugzoabzy3dzdeickv/app.bsky.feed.post/3kmboc5bfb72n":
            {
              display_name: "Jay",
              text: "Can\u2019t go a day without posting a nude \ud83d\ude08 or 2 \ud83e\udd75\ud83e\udd75\ud83d\ude08\ud83d\ude08",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:cppkdoqugzoabzy3dzdeickv/bafkreifwlocanj4dj2f3k2aamtgks7mcy4yysrt346zu75kxphqyzxjcya@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:cppkdoqugzoabzy3dzdeickv/bafkreie4xtchtnpy6dxs6gts4p2kjqstqxxsqacr3n3rpurbcxadd6mvzm@jpeg",
              ],
              image_classes: ["nsfw", "nsfw"],
            },
          "at://did:plc:6a7wglyqoi3vn3l4xqhsj72v/app.bsky.feed.post/3kmboc3o2w32k":
            {
              display_name:
                "\u6d77\u6708\u685c/sakura umituki\ud83c\udf38\u26e9\ufe0f",
              text: "\u30b9\u30ab\u30fc\u30c8\u3068\u5c3b\u3092\u60c5\u71b1\u3092\u3053\u3081\u3066\u63cf\u304d\u307e\u3057\u305f\ud83d\udd0d(\u00b4\u272a\u03c9\u272a`)",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:6a7wglyqoi3vn3l4xqhsj72v/bafkreiezpb5l4u6y5zjd4acfi6pzgwsgfqpjdlpgevlgerblgtef2ofrqm@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:6a7wglyqoi3vn3l4xqhsj72v/bafkreihuauugeya26gqq4iise3frbolt5deltmwq2sgn5edobvhcbkpncu@jpeg",
              ],
              image_classes: ["nsfw", "nsfw"],
            },
          "at://did:plc:r4yvn6yh6n7eld3fw2hhjkrp/app.bsky.feed.post/3kmbobvcvp227":
            {
              display_name: "TwilightOrdon",
              text: "The big one next to the can! Those are just soo pretty I'd love one at some point!",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:r4yvn6yh6n7eld3fw2hhjkrp/bafkreiapnq3lxc6fir35ewj75hlawc6tifvagbvulu5bbcatpcpeyr42qm@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:bc5a2gh7x2hfhnllt66elzj4/app.bsky.feed.post/3kmbobrg6jd2u":
            {
              display_name: "Hivers",
              text: "Not your classic waiter (his ass is gay)",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:bc5a2gh7x2hfhnllt66elzj4/bafkreih5ysldeiacu7fvppqdywmlqpv5oyhunl3agjpilmcf3jj636jepm@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:qf3nvxdkd76eaynnibwp6arw/app.bsky.feed.post/3kmbobqiywt2h":
            {
              display_name: "Ab",
              text: "Fijne nacht. Mooie dromen.\n\nIntense Love - (unknown photographer)",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:qf3nvxdkd76eaynnibwp6arw/bafkreign4tho4z7y2ktac3b6mqtasepgp545divhxor3ps6kuzi2otp4by@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:437zcwktccihd35mtytabheg/app.bsky.feed.post/3kmboaozc6w2r":
            {
              display_name: "Mpls25",
              text: "",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:437zcwktccihd35mtytabheg/bafkreihxgzb5wqspphkp6z343ab2gjxmdn7r3zng5mgzfnguhljs4jsp6m@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:h6jgyucjjvwrtmvvkapnfngp/app.bsky.feed.post/3kmbo7vqzz22v":
            {
              display_name: "\u6bd2\u3084\u306a\u304e",
              text: "\u30c9\u30ec\u30b9\u30ab\u30e8\u30b3\u3000wip",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:h6jgyucjjvwrtmvvkapnfngp/bafkreid7rmsg3sqqyeeinlqg45fl5duoyuuodjvlsc4o2b4wzwbpouacge@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:wlom2inh7quzcbnsbm2bqw76/app.bsky.feed.post/3kmbo77oliy2g":
            {
              display_name: "\u85cd\u6ca2\u3061\u3072\u308d",
              text: "\u304a\u306f\u3088\u3046\u3054\u3056\u3044\u307e\u3059\u2661",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:wlom2inh7quzcbnsbm2bqw76/bafkreidcce2mm7mloyscrkgtf24zaozsrwzlvo2qzesckc2enxged7ngnu@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:krrub3xckqmhnshjndmbffer/app.bsky.feed.post/3kmbo74heku2j":
            {
              display_name: "Ben300",
              text: "\u201cUniform\u201d for machoke delivery service also :3\n\nArt also by @chokeylover.bsky.social",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:krrub3xckqmhnshjndmbffer/bafkreigsudtoqt2zjkfcfg2k4fvvdczvn5idp4xpsvv4pe6aqbegbeikei@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:kaxtohysheubn2rjkpwudrm2/app.bsky.feed.post/3kmbo6s7ke52i":
            {
              display_name: "keeks",
              text: "",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:kaxtohysheubn2rjkpwudrm2/bafkreihbyb6g2hvolxwnkkd54hcug6ukwd45w4n4u3t2ulwfbomabc62ua@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:bb6jxrnlj3p5cafc36kihmkq/app.bsky.feed.post/3kmbo6u6kxh2s":
            {
              display_name: "\u3053\u306a",
              text: "\u521d\u3081\u3066\u6d17\u5264\u3067\u808c\u8352\u308c\u3057\u305f\u611f\u60f3\n(\u26a0\ufe0f\u75db\u3044\u63cf\u5199\u3042\u308a\u307e\u3059)",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:bb6jxrnlj3p5cafc36kihmkq/bafkreihrxnhqedaywjhfurfsw7yrcmbhmcsu7vkxe3dlu2tnguxb26wxki@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:b5txof75opxlqoexrfgj6k5a/app.bsky.feed.post/3kmbo4vw4542e":
            {
              display_name: "GreekCeltic",
              text: "Hetherev is an art challenge group based on discord\n\n- 21+ only \n- You don't have to be active!\n- No deadlines!\n- Rp if you want!\n- Draw your OC meeting other's OCs.\n- Nightly voice chat.\n- Doesn't have to be a comic.\n- Guests/non artists welcome.\n\nGroup art by others (link and more in next comment)",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:b5txof75opxlqoexrfgj6k5a/bafkreiccc7xz25kv36oqy2hlejh56nfahju64x7np5njtqhy5z7jqhtogi@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:b5txof75opxlqoexrfgj6k5a/bafkreia2osmxt3rdmtb2zror7fuuhgyrvyi2ppkmi3qfcqftcz7z7vl4dy@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:b5txof75opxlqoexrfgj6k5a/bafkreianvouc27f6onm7veg6pkfomjenklade35g5eo7eq34warwha7e2i@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:b5txof75opxlqoexrfgj6k5a/bafkreifimjtjwyvazt5mb45pbfjppn6ruz43dickoung6mn6gcnsls3grq@jpeg",
              ],
              image_classes: ["nsfw", "nsfw", "nsfw", "nsfw"],
            },
          "at://did:plc:r4yvn6yh6n7eld3fw2hhjkrp/app.bsky.feed.post/3kmbo54kc5m2o":
            {
              display_name: "TwilightOrdon",
              text: "I have a few grinders actually! Here's one that also happens to be toothy xD\n\nBut yes I have my eye on getting one StrangeBedFellas tentacly one at some point that look so darn stunning",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:r4yvn6yh6n7eld3fw2hhjkrp/bafkreie3doagrksua7alool6a2lzn6srfoaxodec4xb25sp5k7jnnzff7m@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:sn7cari3flmlbgwf4kcqne56/app.bsky.feed.post/3kmbo4zpa4c2f":
            {
              display_name: "Gabito",
              text: "Something stupid and very dumb mainly done for practice.",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:sn7cari3flmlbgwf4kcqne56/bafkreidzdfylw277fqaxk5447fqrogyi3tcdf3aiknahbf7on47djdpvpq@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:sn7cari3flmlbgwf4kcqne56/bafkreihzqbic26lluelqcnxivonnxlyaqb5pfbmpavhw6bbrhi3xl53qya@jpeg",
              ],
              image_classes: ["nsfw", "nsfw"],
            },
          "at://did:plc:hlnybnauhw7e4g53j4rs6foo/app.bsky.feed.post/3kmbo4vsf7f2b":
            {
              display_name: "\u3072\u307e\u3064\u3076\u3057\u592a\u90ce",
              text: "\u6307\u5b9a\u304c\u306a\u3044\u5834\u5408\u3000\u6c34\u7740\u306f\u9ed2\u306b\u306a\u308b\u3053\u3068\u304c\u591a\u3044",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:hlnybnauhw7e4g53j4rs6foo/bafkreih6lssf74yf5m32vuxk66eblee5gg3bhjirhv2roaa7j6t77yundi@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:hlnybnauhw7e4g53j4rs6foo/bafkreiecvbqun5ru24iohykc3n42ffpqx4nhdvp7mrn2heiyn5dj6mkdky@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:hlnybnauhw7e4g53j4rs6foo/bafkreigmdk42tfau55g4idst3dp23hpq4kwgynmn4oabbce5bljkfekdga@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:hlnybnauhw7e4g53j4rs6foo/bafkreiccv4oidz2e73shrh2d4524deqjkfeygyu6sdokkjywyeego5jb4u@jpeg",
              ],
              image_classes: ["nsfw", "nsfw", "nsfw", "nsfw"],
            },
          "at://did:plc:lh5uxvnbekqbseiwagdbbxem/app.bsky.feed.post/3kmbo4q5mt72w":
            {
              display_name: "Kuroro",
              text: "Bday present for a friend",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:lh5uxvnbekqbseiwagdbbxem/bafkreidxwd75ydxb6jtuyovc3rpjp7tn6ikmhb4ehsmypk6n3bx5ec6qse@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:juhhod2yr3irf6x2pv5fnmyo/app.bsky.feed.post/3kmbo42term2c":
            {
              display_name: "AI Bhabhi - 18+ NSFW",
              text: "posing for camera",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:juhhod2yr3irf6x2pv5fnmyo/bafkreidvwb45y62qufzpabs2z7s5ivr5ncsyft76mcrkuikizxw54dxk5i@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:y3p2bpb4v2qvtrbzz6crapmj/app.bsky.feed.post/3kmbo4apkak2p":
            {
              display_name: "\u30c8\u30ed\u3068\u3075\u3055\u304a",
              text: "",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:y3p2bpb4v2qvtrbzz6crapmj/bafkreidfc2exs2wiagjhyouqvqowuyzkfmbyxrqhsgn6zaw7ybdo2sdqti@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:pk2w5drty2gtdsitojyl4w33/app.bsky.feed.post/3kmbo45w6bb2j":
            {
              display_name: "\u305f\u3044\u304d@geme\u7528",
              text: "\u304a\u306f\u3088\u3046\u3054\u3056\u3044\u307e\u3059\nDOAXVV \u30a8\u30ec\u30ca",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:pk2w5drty2gtdsitojyl4w33/bafkreicrleczpyhuxuwiussxgtdxugd2qtcliojzlta7bd26ywtfft2gnm@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:a6jupom6k77warnah2lknhwf/app.bsky.feed.post/3kmbo3npyvg23":
            {
              display_name: "Polshach\ud83d\udd1e",
              text: "YIPPIEE HELLO! :D\nI do art!! Mostly of my ocs",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:a6jupom6k77warnah2lknhwf/bafkreibx2afdbbtnqkg5zd66nohzu2xqztwhn44oplktl3yxxk5m6ak5ea@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:a6jupom6k77warnah2lknhwf/bafkreid5nsq2iix7kemgcau6g2g6kqjdfdgdhoclb34jelz4rss2jozj34@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:a6jupom6k77warnah2lknhwf/bafkreifl7nywenwi45devthuozkehpf2c4ops6fbqcsk3wk2krmdkzfyxi@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:a6jupom6k77warnah2lknhwf/bafkreiddyxso4zqwlpfv3vsvjsyzgegv4djexw45wa5yji5l3ik6a5heae@jpeg",
              ],
              image_classes: ["nsfw", "nsfw", "nsfw", "nsfw"],
            },
          "at://did:plc:krrub3xckqmhnshjndmbffer/app.bsky.feed.post/3kmbo3grmof2l":
            {
              display_name: "Ben300",
              text: "Joining machoke delivery service, and getting drunk on the job :P\n\nArt by @chokeylover.bsky.social :3",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:krrub3xckqmhnshjndmbffer/bafkreifag4ywirn7vez5pu4nbxlvhm5vd5rax2pnpxdfiwjz6vnjr776ti@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:izajthccxxcag7mbtjoqf466/app.bsky.feed.post/3kmbo3c3gyu2e":
            {
              display_name: "\u8c4a\u4e2d\u3000\u8475\u3002",
              text: "\u3048\u3061\u306f\u3089\u3055\u3093",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:izajthccxxcag7mbtjoqf466/bafkreigroezo7witkzbgtxgfw7h46xk7skhbeqsus25x4z5fovedsgn4ju@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:67exu4vmgx72f6qnf4v725sr/app.bsky.feed.post/3kmbo34utvt2q":
            {
              display_name: "\ud83c\udf31 Mem",
              text: "Older art time, just can't keep yer hands off eh?\n\n// #nsfwart #oc",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:67exu4vmgx72f6qnf4v725sr/bafkreigfp3siqy3xbfz65xxjbggj5c74hylofpf7i3klhb2scne6je6bvy@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:s2yxgvyuijyexwqj7mpsq2no/app.bsky.feed.post/3kmbo2x3fq72y":
            {
              display_name: "\u307f\u301c\u3059\u3051",
              text: "\u304a\u306f\u3088\u3046\u671d\u98a8\u5442\n\uff08\u6027\u7684\u3067\u306f\u306a\u3044\u30cc\u30fc\u30c9\u8a2d\u5b9a\uff09",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:s2yxgvyuijyexwqj7mpsq2no/bafkreif4lhvb2aovf4lxecyxpatd6ja2jfldibobneghh4ge62gqsu4j44@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:zo346ru7rhvei43ic5l2kdll/app.bsky.feed.post/3kmbnzfznxk2d":
            {
              display_name: "Tits in Screenshots",
              text: "Game Show Models (1977) dir. David N. Gottlieb:",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zo346ru7rhvei43ic5l2kdll/bafkreidj6jqjg5uczajzbvygt277prdwb3wcxm2c6sgdgaply36m7freqy@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zo346ru7rhvei43ic5l2kdll/bafkreicf6zu5whdqgv52w43hdgx2eguh3klx5xwhgr65y4tzu7uws2ufty@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zo346ru7rhvei43ic5l2kdll/bafkreibculcsgdip65qtjtxrryy2ltwq2a32dxdmq5vic2t4lntkf6tdfa@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:zo346ru7rhvei43ic5l2kdll/bafkreiel253hneuupp57jsmlpxqvtc5ncxs7rrx2yfv4uoqrtfejmihbtu@jpeg",
              ],
              image_classes: ["nsfw", "nsfw", "nsfw", "nsfw"],
            },
          "at://did:plc:3dh7ymyhqundx2hlh4yvcmes/app.bsky.feed.post/3kmbnzgxtxm2k":
            {
              display_name:
                "\u30a2\u30c0\u30eb\u30c8\u6f2b\u753b\u30fb\u52d5\u753b\u30bb\u30fc\u30eb\u60c5\u5831",
              text: "FANZA\u540c\u4eba \u671f\u9593\u9650\u5b9a\u30bb\u30fc\u30eb (03/03\u307e\u3067)\u7a7a\u5fc3\u83dc\u9928\u300e\u3010\u6deb\u5922\u5c0e\u5165REM\u30c8\u30e9\u30c3\u30af\u3011\u3042\u306a\u305f\u3092\u5922\u7cbe\u306b\u5c0e\u304f\uff1c\u5b89\u7720\uff1e\u3086\u3081\u5c04\u7cbe\uff01\u3010\u7761\u7720\u79d1\u5b66\u3011\u300f\n50%OFF 660\u5186\nhttps://al.dmm.co.jp/?lurl=htt",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:3dh7ymyhqundx2hlh4yvcmes/bafkreibc6gb6m4w677nrsytzab7jqktbvifu6iu2eqmhnznufi5idv4tky@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:byrxhco5znpm3ruvrn2tm5d5/app.bsky.feed.post/3kmbnzbzyyu2m":
            {
              display_name: "Kar",
              text: "And for more random steppies from the past, we have MiniK stuck on Stix.  The last pic is the problem with Ringels and their pesky grabby toes! Trying to keep me from getting those steppies!!\n\n\ud83c\udfa8 @rickgriffin.bsky.social",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:byrxhco5znpm3ruvrn2tm5d5/bafkreiginp3y7pjeewehhyu2ezaup3cet3zpsqi3aqncvqrjtekeu3co3i@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:byrxhco5znpm3ruvrn2tm5d5/bafkreiaoy6aneowfy2l4w476qlazp363ne7tsflmqyfniicyb4a7ftkkty@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:byrxhco5znpm3ruvrn2tm5d5/bafkreidinpfiyb37tbkpbrv5p5plbcouslt2z2nx3y77f5oqxocstix4nq@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:byrxhco5znpm3ruvrn2tm5d5/bafkreiacv7si2nq662st5ocgtnnjx5m4qyun32nktqkpiam7sbls62xpje@jpeg",
              ],
              image_classes: ["nsfw", "nsfw", "nsfw", "nsfw"],
            },
          "at://did:plc:kj6thzioyivo2rz7xr4hn7hd/app.bsky.feed.post/3kmbnza2vgm2n":
            {
              display_name: "\u30b8\u30b8",
              text: "",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:kj6thzioyivo2rz7xr4hn7hd/bafkreib3mvpyvvcuh6a3tsdmrnlhtt52lmicbg7sjz7xbe6q5il6trjxzq@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:gp5ullwz33cosnkxlwsh7bar/app.bsky.feed.post/3kmbnyku6om2o":
            {
              display_name: "louu ",
              text: "Uhum test test shbsky\nTHIS IS A BIT UHM HARMY DARMY PLEASE DONT LOOK AT IT WITHOUT BEING PART OF THE SH COMMUNITY YEAH?\n\nPLEASE DONT DELETE THIS PRETTY PLEASE JUST TESTING THE LIMITS",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:gp5ullwz33cosnkxlwsh7bar/bafkreicshf7er7ixqpjys2tryjrshekdehigvmpozk3xk43knxe6of7r4m@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:jkhstaajx6r5gmetpz5cb6cv/app.bsky.feed.post/3kmbnyaplwk25":
            {
              display_name: "Remi",
              text: "And here's an alt version with no planet bulges.",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:jkhstaajx6r5gmetpz5cb6cv/bafkreift3pooe43u4huryotabmnxp4mfmisbenv5pcp2bgu5zpfdiqzd6i@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:3dh7ymyhqundx2hlh4yvcmes/app.bsky.feed.post/3kmbnxr4vcq2k":
            {
              display_name:
                "\u30a2\u30c0\u30eb\u30c8\u6f2b\u753b\u30fb\u52d5\u753b\u30bb\u30fc\u30eb\u60c5\u5831",
              text: "FANZA\u540c\u4eba \u671f\u9593\u9650\u5b9a\u30bb\u30fc\u30eb (03/03\u307e\u3067)ASMR VTuber Project \u30e0\u30cd\u30a2\u30c4\u300e\u3010\u521d\u89e3\u7981\uff1f\u65b0\u4ebaVTuber\u306e\u30aa\u30ca\u30cb\u30fc\u5b9f\u6f14\u3011\u52b9\u679c\u97f3\u7d20\u6750\u30bc\u30ed\uff01\uff1f\u808c\u3092\u89e6\u308b\u97f3\u3082\u6f6e\u5439\u304d\u306e\u97f3\u3082\u3001\u8033\u8210\u3081\u3082\u3001\u305c\u3093\u3076\u30ca\u30de\uff1f\u516c\u958b\u30c9\u30b9\u30b1\u30d9\uff01\u30b9\u30c8\u30ea\u30fc\u30df\u30f3\u30b0\u30bb\u30c3\u30af\u30b9\u3010\u304a\u3082\u3089...\u300f\n50%OFF 770\u5186\nhttps://al.dmm.co.jp/?lurl=htt",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:3dh7ymyhqundx2hlh4yvcmes/bafkreigszwk5xpmcsmwvldh43vy7buschzt4xmb4jqthnrygza4gt2upfu@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:mvqjt63kikh4ikk4qvfeevsq/app.bsky.feed.post/3kmbnx7f74s2n":
            {
              display_name: "Nik Horne",
              text: "Blue Jam Love Hearts: www.redbubble.com/people/nikho...",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:mvqjt63kikh4ikk4qvfeevsq/bafkreifu4gy5kopjqwiessjr35d5hjifw5npfbl232yj4gsigb3q4hq7mu@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:mvqjt63kikh4ikk4qvfeevsq/bafkreifa2izvwgpehq5ooihz6vdehmi643zncbkvslmzo5egahk3hsyvjy@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:mvqjt63kikh4ikk4qvfeevsq/bafkreic46nf6b6vfmvh4od3q3eh7jxy6kslf2fuden2kgubvznjcud7tre@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:mvqjt63kikh4ikk4qvfeevsq/bafkreigrucxpxyfwa2lnxm4s2kkzrpm37alypwrjyej56moiagzsttjuai@jpeg",
              ],
              image_classes: ["nsfw", "nsfw", "nsfw", "nsfw"],
            },
          "at://did:plc:3dh7ymyhqundx2hlh4yvcmes/app.bsky.feed.post/3kmbnwqk52i2a":
            {
              display_name:
                "\u30a2\u30c0\u30eb\u30c8\u6f2b\u753b\u30fb\u52d5\u753b\u30bb\u30fc\u30eb\u60c5\u5831",
              text: "FANZA\u540c\u4eba \u671f\u9593\u9650\u5b9a\u30bb\u30fc\u30eb (03/03\u307e\u3067)\u30d5\u30a7\u30c6\u30a3\u30b7\u30ba\u30e0\u30ef\u30a1\u30fc\u30af\u30b9\u300e\u4e16\u754c\u3092\u4e00\u5ea6\u6ec5\u307c\u3057\u304b\u3051\u305f\u6700\u5f37\u306e\u9b54\u738b\u69d8\u3092\u304f\u3063\u305b\u3047\u30e1\u30b9\u81ed\u653e\u3063\u3066\u5a9a\u3073\u5a9a\u3073\u8a98\u60d1\u3057\u3066\u304f\u308b\u6deb\u4e71\u30c9\u30b9\u30b1\u30d9\u5974\u25cf\u306b\u5b8c\u5168\u8abf\u6559\u300f\n50%OFF 660\u5186\nhttps://al.dmm.co.jp/?lurl=htt",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:3dh7ymyhqundx2hlh4yvcmes/bafkreidovfoibeeew7asdugcyaxdynqvamv7gp5vofdnhj5j7h3kad24k4@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:jkhstaajx6r5gmetpz5cb6cv/app.bsky.feed.post/3kmbnwi6mae2k":
            {
              display_name: "Remi",
              text: "Looks like Kangarooy craves more as he lets everyone know.\n\nPart 2/2 for Kangarooy on FA",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:jkhstaajx6r5gmetpz5cb6cv/bafkreigormauhuqa2puhoczoqfbmxvcdr3bnnlyjilbo3czh6icjfe7pby@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:2i3ozcsrqjr4mkw5lvijb3tj/app.bsky.feed.post/3kmbnwc4zvk2k":
            {
              display_name: "Manga Reader NSFW (Spoilers!)",
              text: "Lovely",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:2i3ozcsrqjr4mkw5lvijb3tj/bafkreidhfqs5cozrjs4vmdb5u45l7pxddoz3mwlkpel55b45gggyflbr7i@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:2i3ozcsrqjr4mkw5lvijb3tj/bafkreibtjnugtnv6tsngtjmyaapcoeothojt6nxzmxv6rdhvfppkgzollm@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:2i3ozcsrqjr4mkw5lvijb3tj/bafkreifuupxzltcdiab27j7vrwqumwxu76wvunvqcfushgts6wqat3voy4@jpeg",
              ],
              image_classes: ["nsfw", "nsfw", "nsfw"],
            },
          "at://did:plc:bfkcoib5rcittwpz4vpicjc2/app.bsky.feed.post/3kmbnw54ldq2j":
            {
              display_name: "Malleable Witch Tommy",
              text: "Bruno is always eager to practice some self love",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:bfkcoib5rcittwpz4vpicjc2/bafkreieuyxq2jvi5nkjk6jsy4hbxvcw7pifiqghclh4hezbdevy7ncjzea@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:di75sbdd4vvdfzgdeuepu3qv/app.bsky.feed.post/3kmbnvsh4ft2u":
            {
              display_name:
                "Ripley  \ud83c\udff3\ufe0f\u200d\u26a7\ufe0f\ud83c\udff3\ufe0f\u200d\ud83c\udf08",
              text: "Oh yeah, Wolfie shaved by the way, who's first to give these a grope? \ud83d\udc40",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:di75sbdd4vvdfzgdeuepu3qv/bafkreie7bhhrwwh7rojv7yxh7tah4uodfjipzetybpha62qmmzwv6srbky@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:hyfxk74idsoo6iz2wcklixbg/app.bsky.feed.post/3kmbnvlkqoc27":
            {
              display_name: "Helinda ",
              text: "I really hate waiting...\n\nCollab with @littleboa.bsky.social \n\n\ud835\udc05\ud835\udc05\ud835\udc17\ud835\udc08\ud835\udc15 \ud835\udc00\ud835\udc1f\ud835\udc2d\ud835\udc1e\ud835\udc2b \ud835\udc03\ud835\udc1a\ud835\udc2b\ud835\udc24 | ERP | GPOSERSNSFW NSFW FF14 Final Fantasy XIV Softcore FFXIVLewds xivlewds | Miqo'te | Highlander",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:hyfxk74idsoo6iz2wcklixbg/bafkreiemiifz2gxwaptt42yqzhy3rqopahiylzinpacyd3wuiwyzxxqozq@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:hyfxk74idsoo6iz2wcklixbg/bafkreiegsyws3b4dsxhp45yptklhgiwunqba6zvrlcxd7vm6flidf2uqyy@jpeg",
              ],
              image_classes: ["nsfw", "nsfw"],
            },
          "at://did:plc:s5r3uunjranvqszcedewwbsp/app.bsky.feed.post/3kmbnvl7zuk2q":
            {
              display_name: "TubaWalrus",
              text: "happy birf have brown car @baconcat.bsky.social",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:s5r3uunjranvqszcedewwbsp/bafkreid453fn23j72q7i545p3ugn7awirauc653stdvoqdw7fsgj2uplcu@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:s3swgevyhfmdmifoo53ws7w5/app.bsky.feed.post/3kmbnvkewoc2l":
            {
              display_name: "Frobisher & Clay",
              text: "Dong just because",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:s3swgevyhfmdmifoo53ws7w5/bafkreiezqwn7x6aom6pgfkfwcnhs2bqlkmfgpmh3ckw6kdybzbzpos3rfq@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:2i3ozcsrqjr4mkw5lvijb3tj/app.bsky.feed.post/3kmbnvfdeqc22":
            {
              display_name: "Manga Reader NSFW (Spoilers!)",
              text: "PAIZURI TIME",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:2i3ozcsrqjr4mkw5lvijb3tj/bafkreiesmld4m4guoefnq5xwoguyetul55komiiatvyks2dtau5cnnq3km@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:2i3ozcsrqjr4mkw5lvijb3tj/bafkreigr6esurqn5m4eb4xjucysjkrqn5xsftfd3bnt52ddg76wui6tvl4@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:2i3ozcsrqjr4mkw5lvijb3tj/bafkreiduisso2yjcmgdqykzoly43a4stvmdwlyb3nq377sxjeucvj4yasm@jpeg",
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:2i3ozcsrqjr4mkw5lvijb3tj/bafkreifrunepfs7xcgimwkvw5r6gn2vxpy7twxl7mjk7d5hdfqnpsittce@jpeg",
              ],
              image_classes: ["nsfw", "nsfw", "nsfw", "nsfw"],
            },
          "at://did:plc:in7dgjcilmsosjig5ebjg4tg/app.bsky.feed.post/3kmbntc6yow22":
            {
              display_name: "Puppy",
              text: "Wanna play?",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:in7dgjcilmsosjig5ebjg4tg/bafkreift4ehqicy3axfgsm5xgywo4ksroecpfnerquguwnhmgogeaa7u2m@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:cdcr7omyxznd7urgnpn5pnfd/app.bsky.feed.post/3kmbntkftu22l":
            {
              display_name: "Ztalex",
              text: "Wip\n\n#furryart #art #furry #wip #nsfw",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:cdcr7omyxznd7urgnpn5pnfd/bafkreihk6qqa6x4vvtzu5voqduknrx2zuicp6tj2yu2kaxp355h5knvbky@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:l536hehkihisgsfu3o2caukp/app.bsky.feed.post/3kmbntbchzi2w":
            {
              display_name: "\u306d\u3058\u308d",
              text: "C104\u7533\u3057\u8fbc\u307f\u307e\u3057\u305f\n\u30a4\u30c1\u30ab\u672c\u4e88\u5b9a\u3057\u3066\u307e\u3059\uff5e",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:l536hehkihisgsfu3o2caukp/bafkreiaetzayjsj3z2tuwduepxpvx7cmplyyx5quzfr534t56zpbgl3uo4@jpeg",
              ],
              image_classes: ["nsfw"],
            },
          "at://did:plc:m2q7ntu3qi6druz2nvq3viuh/app.bsky.feed.post/3kmbnsfwcjy2t":
            {
              display_name: "Cum Inside Bro",
              text: "@ carlosmagati",
              images: [
                "https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:m2q7ntu3qi6druz2nvq3viuh/bafkreiej65tenosd6rpg72plndipmy43skpv7qcaqe6qiqklpss4rgqypa@jpeg",
              ],
              image_classes: ["nsfw"],
            },
        };

        // Combine fetched data with additional data
        const combinedData = { ...data.Data, ...additionalData };

        const fetchedImages = Object.keys(combinedData).map((key) => {
          const item = combinedData[key];
          return {
            id: key,
            displayName: item.display_name,
            imageClasses: item.image_classes,
            images: item.images,
          };
        });
        setImages(fetchedImages);
      } catch (error) {
        console.error("Failed to load images", error);
      }
    };

    fetchImages();
  }, []);
  // Function to determine the box color
  const getBoxStyle = (imageClass: string[]): string => {
    // Function to determine the box style based on the first image class
    const firstClass = imageClass[0]; // Considering the first class for styling
    switch (firstClass) {
      case "normal":
        // White might represent safe content
        return "border-4 border-white";
      case "weapon":
        // Bright red for potentially harmful or explicit content
        return "border-4 border-red-500";
      case "nsfw":
        // Bright yellow for caution, possibly sensitive content
        return "border-4 border-yellow-500";
      case "violence":
        // Bright orange for content that's questionable
        return "border-4 border-orange-500";
      case "hentai":
        // Bright green for content that's slightly NSFW but not explicit
        return "border-4 border-green-500";
      default:
        // A neutral color for unclassified or pending classification content
        return "border-4 border-gray-500";
    }
  };

  return (
    <div className="px-4 md:px-6 lg:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-6 items-start md:gap-12 lg:gap-20 max-w-6xl mx-auto">
        {images.map((image, index) =>
          image.images.map((imgUrl, imgIndex) => (
            <Card
              key={`${image.id}-${imgIndex}`}
              className={`w-full ${getBoxStyle(image.imageClasses)}`}
            >
              <CardContent className="p-4 md:p-6 grid gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold tracking-tight">
                    {image.displayName}
                  </h2>
                  <p className="text-sm leading-normal text-gray-500 dark:text-gray-400">
                    Image Classes: {image.imageClasses.join(", ")}
                  </p>
                </div>
                <div
                  className={`aspect-video w-full max-w-[400px] mx-auto overflow-hidden rounded-lg ${getBoxStyle(
                    image.imageClasses
                  )}`}
                >
                  {/* if image class is nsfw blutrrr the image */}
                  <img
                    alt={`${image.displayName} - ${imgIndex + 1}`}
                    className={`aspect-video object-cover ${
                      image.imageClasses.includes("nsfw") ? "blur-md" : ""
                    }`}
                    src={imgUrl}
                    width="400"
                    height="225"
                  />
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
