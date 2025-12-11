<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null = null;
    let frameId: number;
    const PARTICLE_COUNT = 80;

    type Particle = {
        x: number;
        y: number;
        r: number;
        vx: number;
        vy: number;
        alpha: number;
    };

    let particles: Particle[] = [];

    function initParticles(width: number, height: number) {
        particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: 0.8 + Math.random() * 1.8,
            vx: 0.03 + Math.random() * 0.08,
            vy: -0.04 - Math.random() * 0.06,
            alpha: 0.15 + Math.random() * 0.25,
        }));
    }

    function resizeCanvas() {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        canvas.width = rect.width * ratio;
        canvas.height = rect.height * ratio;
        ctx = canvas.getContext("2d");
        if (ctx) ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        initParticles(rect.width, rect.height);
    }

    function loop() {
        if (!ctx || !canvas) return;
        const rect = canvas.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Use specific colors from requested demo if needed, but sticking to theme
        // The spec asks to replicate the demo.
        // Demo gradient: #020814 -> #030b18 -> #01040a

        const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
        bgGradient.addColorStop(0, "#020814");
        bgGradient.addColorStop(0.5, "#030b18");
        bgGradient.addColorStop(1, "#01040a");

        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, width, height);

        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x > width + 10) p.x = -10;
            if (p.y < -10) p.y = height + 10;

            const glow = ctx.createRadialGradient(
                p.x,
                p.y,
                0,
                p.x,
                p.y,
                p.r * 4,
            );
            // Cyan: 0, 228, 255
            glow.addColorStop(0, `rgba(0, 228, 255, ${p.alpha})`);
            glow.addColorStop(1, "rgba(0, 228, 255, 0)");

            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
            ctx.fill();
        }

        frameId = requestAnimationFrame(loop);
    }

    onMount(() => {
        if (!browser) return;
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        frameId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(frameId);
        };
    });

    onDestroy(() => {
        if (browser && frameId) {
            cancelAnimationFrame(frameId);
        }
    });
</script>

<div class="fixed inset-0 -z-0 overflow-hidden pointer-events-none">
    <canvas bind:this={canvas} class="w-full h-full block"></canvas>
    <div
        class="absolute inset-0 opacity-[0.12] mix-blend-screen"
        aria-hidden="true"
        style="
      background-image:
        linear-gradient(to right, rgba(0,228,255,0.25) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,228,255,0.18) 1px, transparent 1px);
      background-size: 80px 80px;
    "
    ></div>
</div>
