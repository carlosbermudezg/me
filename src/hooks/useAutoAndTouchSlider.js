import { useRef, useEffect } from 'react';

export const useAutoAndTouchSlider = (speed = 0.8) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationFrameId;
        let isHovered = false;
        let isDragging = false;
        let startX = 0;
        let scrollLeftStart = 0;

        const autoScroll = () => {
            if (!isHovered && !isDragging && slider) {
                slider.scrollLeft += speed;
                const halfWidth = slider.scrollWidth / 2;
                if (halfWidth > 0 && slider.scrollLeft >= halfWidth) {
                    slider.scrollLeft -= halfWidth;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        const onMouseEnter = () => { isHovered = true; };
        const onMouseLeave = () => { isHovered = false; isDragging = false; };

        const onMouseDown = (e) => {
            isDragging = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeftStart = slider.scrollLeft;
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5;
            let targetScroll = scrollLeftStart - walk;

            const halfWidth = slider.scrollWidth / 2;
            if (halfWidth > 0) {
                if (targetScroll >= halfWidth) {
                    targetScroll -= halfWidth;
                    startX = e.pageX - slider.offsetLeft;
                    scrollLeftStart = targetScroll;
                } else if (targetScroll < 0) {
                    targetScroll += halfWidth;
                    startX = e.pageX - slider.offsetLeft;
                    scrollLeftStart = targetScroll;
                }
            }

            slider.scrollLeft = targetScroll;
        };

        const onMouseUp = () => { isDragging = false; };

        const onTouchStart = () => { isDragging = true; };
        const onTouchEnd = () => { isDragging = false; };

        const onScroll = () => {
            if (!slider) return;
            const halfWidth = slider.scrollWidth / 2;
            if (halfWidth > 0) {
                if (slider.scrollLeft >= halfWidth) {
                    slider.scrollLeft -= halfWidth;
                } else if (slider.scrollLeft <= 0 && isDragging) {
                    slider.scrollLeft += halfWidth;
                }
            }
        };

        slider.addEventListener('mouseenter', onMouseEnter);
        slider.addEventListener('mouseleave', onMouseLeave);
        slider.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        slider.addEventListener('touchstart', onTouchStart, { passive: true });
        slider.addEventListener('touchend', onTouchEnd, { passive: true });
        slider.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            cancelAnimationFrame(animationFrameId);
            slider.removeEventListener('mouseenter', onMouseEnter);
            slider.removeEventListener('mouseleave', onMouseLeave);
            slider.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            slider.removeEventListener('touchstart', onTouchStart);
            slider.removeEventListener('touchend', onTouchEnd);
            slider.removeEventListener('scroll', onScroll);
        };
    }, [speed]);

    return sliderRef;
};
