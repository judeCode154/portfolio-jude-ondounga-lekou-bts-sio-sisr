(function () {
    const canvas = document.querySelector('.binary-rain');
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fontSize = 20;
    const columnGap = 14;
    let columns = [];
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let animationFrame = 0;
    let previousFrame = 0;

    function resizeCanvas() {
        const bounds = canvas.getBoundingClientRect();
        width = bounds.width;
        height = bounds.height;
        pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        const columnCount = Math.ceil(width / columnGap);
        columns = Array.from({ length: columnCount }, function (_, index) {
            const length = 18 + Math.floor(Math.random() * 14);
            return {
                x: index * columnGap + Math.random() * 5,
                y: Math.random() * height,
                speed: 105 + Math.random() * 80,
                length: length
            };
        });
    }

    function drawFrame(timestamp) {
        if (!width || !height) return;

        const elapsed = previousFrame ? Math.min((timestamp - previousFrame) / 1000, 0.05) : 0;
        previousFrame = timestamp;
        context.clearRect(0, 0, width, height);
        context.font = fontSize + 'px monospace';
        context.textAlign = 'center';

        columns.forEach(function (column) {
            column.y += column.speed * elapsed;

            if (column.y - column.length * fontSize > height) {
                column.y = -Math.random() * height * 0.5;
                column.speed = 105 + Math.random() * 80;
            }

            for (let index = 0; index < column.length; index += 1) {
                const y = column.y - index * fontSize;
                if (y < 0 || y > height) continue;

                const opacity = (1 - index / column.length) * 0.55;
                context.fillStyle = 'rgba(0, 216, 255, ' + opacity.toFixed(2) + ')';
                context.fillText(Math.random() < 0.5 ? '0' : '1', column.x, y);
            }
        });

        animationFrame = window.requestAnimationFrame(drawFrame);
    }

    function stopAnimation() {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        context.clearRect(0, 0, width, height);
    }

    function startAnimation() {
        if (motionPreference.matches || document.hidden || animationFrame) return;
        previousFrame = 0;
        animationFrame = window.requestAnimationFrame(drawFrame);
    }

    resizeCanvas();
    startAnimation();

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            stopAnimation();
        } else {
            startAnimation();
        }
    });
    motionPreference.addEventListener('change', function () {
        if (motionPreference.matches) {
            stopAnimation();
        } else {
            startAnimation();
        }
    });
})();
