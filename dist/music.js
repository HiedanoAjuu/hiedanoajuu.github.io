const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: true,
    theme: "#000",
    mutex: true,
    lrcType: 0,
    audio: [
        {
            name: "装飾戦 ～ Decoration Battle",
            artist: "上海アリス幻樂団",
            url: "http://music.163.com/song/media/outer/url?id=510039.mp3",
            cover:
                "https://p1.music.126.net/zM4G5cgsfQxsgDftD4RJIw==/109951169299510813.jpg",
        }
    ]
})