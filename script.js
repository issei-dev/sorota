document.addEventListener('DOMContentLoaded', () => {
    const abacus = document.querySelector('.abacus');

    abacus.addEventListener('touchstart', (e) => {
        // デフォルトの動作（拡大縮小など）を無効化
        e.preventDefault();

        // 複数の指が同時に触れたときの処理
        const touches = e.touches;
        for (let i = 0; i < touches.length; i++) {
            const touch = touches[i];
            const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);

            // タップされた要素が珠であるか確認し、クラスをトグル
            if (targetElement && targetElement.classList.contains('bead')) {
                // 'lit' クラスをトグル（あれば削除、なければ追加）
                targetElement.classList.toggle('lit');
            }
        }
    });

    // mouse events for desktop testing
    abacus.addEventListener('click', (e) => {
        const targetElement = e.target;
        if (targetElement && targetElement.classList.contains('bead')) {
            targetElement.classList.toggle('lit');
        }
    });
});
