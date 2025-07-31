const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: true,
    theme: "#000",
    mutex: true,
    lrcType: 3,
    audio: [
        {
            name: "かぜのいろ",
            artist: "森羅万象 / みぃ",
            url: "/music/kazenoiro/music.mp3",
            cover:
                "/music/kazenoiro/cover.png",
            lrc: "/music/kazenoiro/lyric.lrc",
        }
    ]
})
