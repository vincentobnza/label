import { FeedCard } from "@/components/index/feed-card";

export const Home = () => {
  return (
    <section className="space-y-4">
      {DumpPost.map((post, index) => (
        <FeedCard
          key={index}
          avatar_url={post.avatar_url}
          name={post.name}
          description={post.description}
          img={post.img}
        />
      ))}
    </section>
  );
};

const DumpPost = [
  {
    avatar_url:
      "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-6/491058861_1872395456927710_8529157611979072610_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH_dwnGM5EalqZ8jcu0DWY-Q4BtPDWyE6tDgG08NbITq1kAtP6SJDaEtnjbAGNMlmNQWVQo_Dl2GzUrJdumWo6v&_nc_ohc=BRAagHNoJ2sQ7kNvwH81I6t&_nc_oc=AdnNbHPJGSLx1Q04-L2hhKl75gfZTo8pf7PDX7K2P5kTArayfgIBkPfBS5UYNqRzGthj_OT1dkWIFFmCZSpsf3uF&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=CdktUKzvDRET6q90sBRHdQ&oh=00_AfHJAbmFxP2wHhSmLuQDt1ZFbScXMAc_PDz8xdqXPkdeAg&oe=6801402C",
    name: "Vincent Obenza",
    description: "Kung ang bato ay rock, gagu ka ba?!!!!",
    img: "https://tse2.mm.bing.net/th?id=OIP.04z12guso2-yAcGvVcuvkgHaEK&pid=Api&P=0&h=220",
  },
  {
    avatar_url:
      "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/490074904_655997567035248_2963245977716423345_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4T1COTfw-ivOxwGMu7WJ4Lqif-Fx3hmEuqJ_4XHeGYdF9AsyLH_h4On4ad97grrYK8kEhZIKhnOGR03HfQv9X&_nc_ohc=K4OTSLqSdwQQ7kNvwFmMeyr&_nc_oc=AdmTM6oYMuWEya2Mw1KWjSiy7gGG5_V2IN_r0BPje46j-h6JDYNuYpuI6mN9aQ2-qJQngHyQiW_LVJ7dlSHiW0bN&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=unG_ydSqhxq4wNbPVxB0ag&oh=00_AfHNkUT4Pv2s4swDNXV4d7E7QRPEuPm2-MUijlr8PesYoA&oe=68013169",
    name: "Karla Pipay",
    description: "Di ko kasi ginagamit yung akin hehe :>",
    img: "https://i.pinimg.com/originals/1e/ce/4a/1ece4a1aae851e6de0108497feec1b83.jpg",
  },
  {
    avatar_url:
      "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-1/476735499_2098754097238285_5403632495428798098_n.jpg?stp=c0.266.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGzzLH_-gYLFsMM-kY75OteO14GFDS1Njc7XgYUNLU2N5e0YM3P8JcPOmABcuzmRkD-I_NPsXOlofB0lcdcLxFR&_nc_ohc=P3Guwqb6q5UQ7kNvwG_QVRF&_nc_oc=Adkn242wtQd0rW_nBv-HUFxrFJ7N5hZrvNyGZKIomDeqtZgashtVowDfIxd8iH0BS87x5s2yDy_kvm8am0iMR1pM&_nc_zt=24&_nc_ht=scontent.fmnl3-2.fna&_nc_gid=fETK_I8V4kMktm--xKQ9Mw&oh=00_AfG4Racuiu3oB4nM3S-qSYSTGB9_Mx9PRW7lv_-TnC_u2w&oe=68011C53",
    name: "Rick Burikat",
    description: "Sana magkajowa na ako :<",
    img: "https://tse3.mm.bing.net/th?id=OIP.qJotuf-cji70IRcJi88G3gHaEK&pid=Api&P=0&h=220",
  },
  {
    avatar_url:
      "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/476804476_1159226842280143_4408987739732093886_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHsHAs0WLXkTyDCm4pwxCHTYDVor3KkUJVgNWivcqRQlcOMS5oRKqSxznwohII0IgEibBsg-AgoOfK1BLaCvb6X&_nc_ohc=nXwkTGtrJ0UQ7kNvwG6Iylt&_nc_oc=AdmiSABfJpuObHPvpof7NiBJYC8umBuMSVK7goisMqQyD_emtvt06JuLsCE4PDdC3frZddUD6svoyZ30zRrQQbX9&_nc_zt=24&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=-6H0bXXll1dBkv_VQWvOmA&oh=00_AfEYI_hGKiZmYV58_dHDSblCXmCoEN4o4VnaU9sFHtQ6jg&oe=68011272",
    name: "Jasfer Masangkay",
    description: "MGA  HANGALLLL!!!",
  },
  {
    avatar_url:
      "https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-6/491058861_1872395456927710_8529157611979072610_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH_dwnGM5EalqZ8jcu0DWY-Q4BtPDWyE6tDgG08NbITq1kAtP6SJDaEtnjbAGNMlmNQWVQo_Dl2GzUrJdumWo6v&_nc_ohc=BRAagHNoJ2sQ7kNvwH81I6t&_nc_oc=AdnNbHPJGSLx1Q04-L2hhKl75gfZTo8pf7PDX7K2P5kTArayfgIBkPfBS5UYNqRzGthj_OT1dkWIFFmCZSpsf3uF&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=CdktUKzvDRET6q90sBRHdQ&oh=00_AfHJAbmFxP2wHhSmLuQDt1ZFbScXMAc_PDz8xdqXPkdeAg&oe=6801402C",
    name: "Vincent Obenza",
    description: "Kung ang bato ay rock, gagu ka ba?!!!!",
    img: "https://tse2.mm.bing.net/th?id=OIP.04z12guso2-yAcGvVcuvkgHaEK&pid=Api&P=0&h=220",
  },
  {
    avatar_url:
      "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/490074904_655997567035248_2963245977716423345_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4T1COTfw-ivOxwGMu7WJ4Lqif-Fx3hmEuqJ_4XHeGYdF9AsyLH_h4On4ad97grrYK8kEhZIKhnOGR03HfQv9X&_nc_ohc=K4OTSLqSdwQQ7kNvwFmMeyr&_nc_oc=AdmTM6oYMuWEya2Mw1KWjSiy7gGG5_V2IN_r0BPje46j-h6JDYNuYpuI6mN9aQ2-qJQngHyQiW_LVJ7dlSHiW0bN&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=unG_ydSqhxq4wNbPVxB0ag&oh=00_AfHNkUT4Pv2s4swDNXV4d7E7QRPEuPm2-MUijlr8PesYoA&oe=68013169",
    name: "Karla Pipay",
    description: "Di ko kasi ginagamit yung akin hehe :>",
    img: "https://i.pinimg.com/originals/1e/ce/4a/1ece4a1aae851e6de0108497feec1b83.jpg",
  },
  {
    avatar_url:
      "https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-1/476735499_2098754097238285_5403632495428798098_n.jpg?stp=c0.266.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGzzLH_-gYLFsMM-kY75OteO14GFDS1Njc7XgYUNLU2N5e0YM3P8JcPOmABcuzmRkD-I_NPsXOlofB0lcdcLxFR&_nc_ohc=P3Guwqb6q5UQ7kNvwG_QVRF&_nc_oc=Adkn242wtQd0rW_nBv-HUFxrFJ7N5hZrvNyGZKIomDeqtZgashtVowDfIxd8iH0BS87x5s2yDy_kvm8am0iMR1pM&_nc_zt=24&_nc_ht=scontent.fmnl3-2.fna&_nc_gid=fETK_I8V4kMktm--xKQ9Mw&oh=00_AfG4Racuiu3oB4nM3S-qSYSTGB9_Mx9PRW7lv_-TnC_u2w&oe=68011C53",
    name: "Rick Burikat",
    description: "Sana magkajowa na ako :<",
    img: "https://tse3.mm.bing.net/th?id=OIP.qJotuf-cji70IRcJi88G3gHaEK&pid=Api&P=0&h=220",
  },
  {
    avatar_url:
      "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-1/476804476_1159226842280143_4408987739732093886_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHsHAs0WLXkTyDCm4pwxCHTYDVor3KkUJVgNWivcqRQlcOMS5oRKqSxznwohII0IgEibBsg-AgoOfK1BLaCvb6X&_nc_ohc=nXwkTGtrJ0UQ7kNvwG6Iylt&_nc_oc=AdmiSABfJpuObHPvpof7NiBJYC8umBuMSVK7goisMqQyD_emtvt06JuLsCE4PDdC3frZddUD6svoyZ30zRrQQbX9&_nc_zt=24&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=-6H0bXXll1dBkv_VQWvOmA&oh=00_AfEYI_hGKiZmYV58_dHDSblCXmCoEN4o4VnaU9sFHtQ6jg&oe=68011272",
    name: "Jasfer Masangkay",
    description: "MGA  HANGALLLL!!!",
  },
];

export default Home;
