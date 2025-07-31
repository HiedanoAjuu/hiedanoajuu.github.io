const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: false,
    theme: "#000",
    mutex: true,
    lrcType: 3,
    preload: "auto",
    audio: [
        {
            name: "かぜのいろ",
            artist: "森羅万象 / みぃ",
            url: "/music/kazenoiro/music.ogg",
            cover:
                "/music/kazenoiro/cover.png",
            lrc: "/music/kazenoiro/lyric.lrc",
        }
    ]
})
