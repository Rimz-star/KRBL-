<script>
    // Ambil semua elemen audio
    const audioWidgets = document.querySelectorAll('.audio-widget audio');

    audioWidgets.forEach((audio, index) => {
        audio.addEventListener('play', () => {
            // Hentikan semua audio lainnya
            audioWidgets.forEach((otherAudio, otherIndex) => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0; // Reset waktu ke awal
                }
            });
        });

        // Tambahkan event listener untuk memutar audio berikutnya
        audio.addEventListener('ended', () => {
            const nextAudio = audioWidgets[index + 1];
            if (nextAudio) {
                nextAudio.play(); // Putar audio berikutnya
            }
        });
    });
</script>
