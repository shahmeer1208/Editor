// Initialize FFmpeg
const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({ log: true });

// Video Upload
document.getElementById('videoUpload').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    const video = document.getElementById('videoPreview');
    video.src = URL.createObjectURL(file);
});

// Editing Tools
function splitVideo() {
    alert("Video split at current position");
    // Actual implementation would use FFmpeg:
    // await ffmpeg.run('-i', 'input.mp4', '-ss', '00:00:05', '-c', 'copy', 'output.mp4');
}

function applyFilter(filter) {
    const video = document.getElementById('videoPreview');
    video.style.filter = filter;
    // For real processing:
    // await ffmpeg.run('-i', 'input.mp4', '-vf', filter, 'output.mp4');
}
